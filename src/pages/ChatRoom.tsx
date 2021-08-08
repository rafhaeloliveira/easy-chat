import { FC } from "react";
import Messages from "../components/Messages/Messages";
import MsgInput from "../components/MsgInput/MsgInput";

const ChatRoom: FC = () => {
  return (
    <div style={{ width: "100%", maxWidth: "calc(100% - 300px)" }}>
      <Messages />
      <MsgInput />
    </div>
  );
};

export default ChatRoom;
