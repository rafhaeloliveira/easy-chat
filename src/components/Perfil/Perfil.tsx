import { useContext } from "react";
import { ProfileContext } from "../../context/profile-provider";
import { ChatSocketContext } from "../../context/socket-provider";
import {
  PerfilContainer,
  PerfilImg,
  PerfilName,
  PerfilLogout,
} from "./Perfil-styled";

const Perfil = () => {
  const { profile, saveProfile }: any = useContext(ProfileContext);
  const { socket }: any = useContext(ChatSocketContext);

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
