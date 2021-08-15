import { useContext } from "react";
import { ProfileContext } from "../../context/profile-provider";
import {
  PerfilContainer,
  PerfilImg,
  PerfilName,
  PerfilLogout,
} from "./Perfil-styled";

const Perfil = () => {
  const { profile }: any = useContext(ProfileContext);

  return (
    <PerfilContainer>
      <PerfilImg src={profile.image} />
      <PerfilName>{profile.user}</PerfilName>
      <PerfilLogout>sair</PerfilLogout>
    </PerfilContainer>
  );
};

export default Perfil;
