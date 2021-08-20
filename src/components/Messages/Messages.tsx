import { FC, useContext, useState } from "react";
import { ChatSocketContext } from "../../context/socket-provider";
import {
  MessageBalloon,
  MessagesContainer,
  MessagesList,
} from "./Messages-styled";

const Messages: FC = () => {
  const { socket }: any = useContext(ChatSocketContext);

  const [chat, setChat]: any = useState([]);

  socket.on("chat message", (msg: any) => {
    const newChat = chat || [];
    setChat([...newChat]);
  });

  return (
    <MessagesContainer>
      <MessagesList>
        {chat && chat.map((msg: any) => <MessageBalloon>{msg}</MessageBalloon>)}
      </MessagesList>
    </MessagesContainer>
  );
};

export default Messages;
