import { useContext } from "react";
import { ProfileContext } from "../../context/profile-provider";
import { ChatSocketContext } from "../../context/socket-provider";
import { ProfileContextProps } from "../../models/profile-context.models";
import { SocketContextProps } from "../../models/socket-context.models";
import {
  PerfilContainer,
  PerfilImg,
  PerfilName,
  PerfilLogout,
} from "./Perfil-styled";

const Perfil = () => {
  const { profile, saveProfile }: ProfileContextProps =
    useContext(ProfileContext);
  const { socket } = useContext(ChatSocketContext) as SocketContextProps;

  const callLogout = () => {
    socket.disconnect();

    saveProfile({ user: null, image: null });
  };

  return (
    <PerfilContainer>
      <PerfilImg src={profile.image} />
      <PerfilName>{profile.user}</PerfilName>
      <PerfilLogout onClick={callLogout}>sair</PerfilLogout>
    </PerfilContainer>
  );
};

export default Perfil;
