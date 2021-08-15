import { FC } from "react";
import Messages from "../components/Messages/Messages";
import MsgInput from "../components/MsgInput/MsgInput";
import Sidebar from "../components/Sidebar/Sidebar";

const ChatRoom: FC = () => {
  return (
    <>
      <Sidebar />
      <div style={{ width: "100%", maxWidth: "calc(100% - 300px)" }}>
        <Messages />
        <MsgInput />
      </div>
    </>
  );
};

export default ChatRoom;
