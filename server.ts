const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

const io = new Server({
  cors: {
    origin: "*",
  },
});

io.attach(server, {
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false,
});

const port = 3001;

app.set("port", port);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

io.on("connection", (socket) => {
  let users = [];
  console.log("a user connected", socket.id);

  for (let [id, socket] of io.of("/").sockets) {
    users.push({
      userId: id,
      username: socket.username,
    });
  }

  // On events
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  // emit
  socket.emit("users", users);

  // broadcast
  socket.broadcast.emit("users", users);

  // On disconnect
  socket.on("disconnect", () => {
    const newUsers = [];

    users.map((user) => {
      if (user.userId !== socket.id) {
        newUsers.push(user);
      }
    });

    users = newUsers;
    socket.broadcast.emit("users", users);
  });
});

io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("Invalid username"));
  }
  socket.username = username;
  next();
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
