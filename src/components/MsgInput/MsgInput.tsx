import { IconButton, TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { ChangeEvent, FC, FormEvent, useContext, useState } from "react";
import { ChatSocketContext } from "../../context/socket-provider";
import { SocketContextProps } from "../../models/socket-context.models";
import { MsgInputContainer } from "./MsgInput-styled";

const MsgInput: FC = () => {
  const { socket } = useContext(ChatSocketContext) as SocketContextProps;

  const [msg, setMsg] = useState("");

  const submitMsg = (e: FormEvent<EventTarget>) => {
    e.preventDefault();
    setMsg("");
    socket.emit("chat message", msg);
  };

  const handleMsg = (e: ChangeEvent<HTMLInputElement>) => {
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
