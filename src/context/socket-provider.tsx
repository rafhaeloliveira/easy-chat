import React, { useState } from "react";
import { io } from "socket.io-client";

const defaultChat = {
  list: [],
};

export const ChatSocketContext = React.createContext({});

export const ChatSocketProvider = ({ children, chat }: any) => {
  const [currentChat, setCurrentChat] = useState(chat || defaultChat);

  const socket = io("http://192.168.1.4:3001", {
    reconnectionDelayMax: 10000,
  });

  console.log("socket =>", socket);

  socket.on("chat message", (msg) => {
    const newCurrentChat = currentChat;

    newCurrentChat?.list.push(msg || "Server msg error!");

    setCurrentChat(newCurrentChat);
  });

  return (
    <ChatSocketContext.Provider value={{ socket: socket, chat: currentChat }}>
      {children}
    </ChatSocketContext.Provider>
  );
};
