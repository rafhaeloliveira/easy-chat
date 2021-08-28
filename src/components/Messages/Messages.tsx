import { FC, useContext, useEffect, useState } from "react";
import { ChatSocketContext } from "../../context/socket-provider";
import {
  MessageBalloon,
  MessageBalloonAuthor,
  MessageBalloonText,
  MessagesContainer,
  MessagesList,
} from "./Messages-styled";

const Messages: FC = () => {
  const { socket }: any = useContext(ChatSocketContext);

  const [chat, setChat]: any = useState([]);

  useEffect(() => {
    socket.on("chat message", (message: any) => {
      const newChat = chat || [];

      console.log("===>", message);

      newChat.push(message);

      setChat([...newChat]);
    });
  }, []);

  return (
    <MessagesContainer>
      <MessagesList>
        {chat &&
          chat.map((msg: any) => (
            <MessageBalloon mine={socket.id === msg.who_id}>
              <MessageBalloonText mine={socket.id === msg.who_id}>
                {msg.text}
              </MessageBalloonText>
              <MessageBalloonAuthor mine={socket.id === msg.who_id}>
                {msg.who_name}
              </MessageBalloonAuthor>
            </MessageBalloon>
          ))}
      </MessagesList>
    </MessagesContainer>
  );
};

export default Messages;
