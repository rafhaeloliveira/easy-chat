import React, { FC, useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import { io } from "socket.io-client";
import Sidebar from "./components/Sidebar/Sidebar";
import ChatRoom from "./pages/ChatRoom";

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
        <Sidebar />
        <Switch>
          <Route path="/" exact component={ChatRoom} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
