import React, { FC, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { io } from "socket.io-client";
import ChatRoom from "./pages/ChatRoom";
import Login from "./pages/Login";

const App: FC<any> = () => {
  const socket = io("http://localhost:3001", {
    reconnectionDelayMax: 10000,
  });

  useEffect(() => {
    console.log("socket =>", socket);
  }, []);

  return (
    <Router>
      <div className="main-container">
        <Switch>
          <Route path="/" exact component={ChatRoom} />
          <Route path="/login" exact component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
