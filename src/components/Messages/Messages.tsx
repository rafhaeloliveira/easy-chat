import { FC, useContext, useEffect, useState } from "react";
import { ChatSocketContext } from "../../context/socket-provider";
import { SocketContextProps } from "../../models/socket-context.models";
import {
  MessageBalloon,
  MessageBalloonAuthor,
  MessageBalloonText,
  MessagesContainer,
  MessagesList,
} from "./Messages-styled";

interface ChatMessageProps {
  who_id: string;
  who_name: string;
  text: string;
}

const Messages: FC = () => {
  const { socket } = useContext(ChatSocketContext) as SocketContextProps;

  const [chat, setChat] = useState<ChatMessageProps[]>([]);

  useEffect(() => {
    socket.on("chat message", (message: any) => {
      const newChat = chat as ChatMessageProps[];

      newChat.push(message);

      setChat([...newChat]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MessagesContainer>
      <MessagesList>
        {chat &&
          chat.map((msg: ChatMessageProps) => (
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
