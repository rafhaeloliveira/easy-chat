import { FC } from "react";
import {
  MessageBalloon,
  MessagesContainer,
  MessagesList,
} from "./Messages-styled";

const Messages: FC = () => {
  return (
    <MessagesContainer>
      <MessagesList>
        <MessageBalloon mine>Abc</MessageBalloon>
        <MessageBalloon>Abc</MessageBalloon>
      </MessagesList>
    </MessagesContainer>
  );
};

export default Messages;
