import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const defaultChat = {
  list: [],
};

export const ChatSocketContext = React.createContext({});

export const ChatSocketProvider = ({ children, chat }: any) => {
  const [currentChat, setCurrentChat] = useState(chat || defaultChat);

  const saveCurrentChat = (values: any) => {
    setCurrentChat(values);
  };

  const socket = io("http://localhost:3001", {
    reconnectionDelayMax: 10000,
  });

  useEffect(() => {
    console.log("socket =>", socket);
  }, []);

  return (
    <ChatSocketContext.Provider value={{ chat: currentChat, saveCurrentChat }}>
      {children}
    </ChatSocketContext.Provider>
  );
};
