import { IconButton, TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";
import { FC } from "react";
import { MsgInputContainer } from "./MsgInput-styled";

const MsgInput: FC = () => {
  return (
    <MsgInputContainer>
      <TextField label="Mensagem" variant="outlined" fullWidth />
      <IconButton aria-label="Enviar">
        <Send />
      </IconButton>
    </MsgInputContainer>
  );
};

export default MsgInput;
