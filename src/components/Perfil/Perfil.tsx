import {
  PerfilContainer,
  PerfilImg,
  PerfilName,
  PerfilLogout,
} from "./Perfil-styled";

const Perfil = () => {
  return (
    <PerfilContainer>
      <PerfilImg />
      <PerfilName>Rafhael Oliveira</PerfilName>
      <PerfilLogout>sair</PerfilLogout>
    </PerfilContainer>
  );
};

export default Perfil;
