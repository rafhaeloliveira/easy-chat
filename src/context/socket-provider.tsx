import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const defaultChat = {
  list: [],
};

export const ChatSocketContext = React.createContext({});

export const ChatSocketProvider = ({ children, chat, users }: any) => {
  const [socket, setSocket]: any = useState();
  const [currentChat, setCurrentChat] = useState(chat || defaultChat);

  useEffect(() => {
    const newSocket = io("http://192.168.1.4:3001", {
      reconnectionDelay: 10000,
      autoConnect: false,
    });

    newSocket.on("chat message", (msg) => {
      const newCurrentChat = currentChat;

      newCurrentChat?.list.push(msg || "Server msg error!");

      setCurrentChat(newCurrentChat);
    });

    setSocket(newSocket);
  }, []);

  return (
    <>
      {socket && (
        <ChatSocketContext.Provider
          value={{ socket: socket, chat: currentChat }}
        >
          {children}
        </ChatSocketContext.Provider>
      )}
    </>
  );
};
