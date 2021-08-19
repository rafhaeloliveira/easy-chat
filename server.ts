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

let connectedUsers = [];
io.on("connection", (socket) => {
  console.log("a user connected", socket.id);

  connectedUsers.push(socket.id);

  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });

  // On disconnect
  socket.on("disconnected", () => {
    const newList = [];

    connectedUsers.map((user) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      user.id === socket.id ? null : newList.push(user);
    });

    console.log("user disconnected");
    socket.removeAllListeners();
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
