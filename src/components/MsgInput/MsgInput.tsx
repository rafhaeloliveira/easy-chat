import { IconButton, TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { FC, useContext, useEffect, useState } from "react";
import { ChatSocketContext } from "../../context/socket-provider";
import { MsgInputContainer } from "./MsgInput-styled";

const MsgInput: FC = () => {
  const { socket, chat }: any = useContext(ChatSocketContext);

  const [msg, setMsg] = useState("");

  const submitMsg = (e: any) => {
    e.preventDefault();
    setMsg("");
    socket.emit("chat message", msg);
  };

  const handleMsg = (e: any) => {
    setMsg(e.target.value);
  };

  return (
    <form onSubmit={submitMsg}>
      <MsgInputContainer>
        <TextField
          label="Mensagem"
          variant="outlined"
          fullWidth
          value={msg}
          onChange={handleMsg}
        />
        <IconButton type="submit" aria-label="Enviar">
          <Send />
        </IconButton>
      </MsgInputContainer>
    </form>
  );
};

export default MsgInput;
