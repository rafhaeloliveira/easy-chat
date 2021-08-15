import { Perfil } from "../Perfil";
import {
  SidebarContainer,
  SidebarContatosList,
  SidebarUserInfo,
} from "./Sidebar-styled";

const Sidebar = () => {
  return (
    <>
      <SidebarContainer>
        <SidebarUserInfo>
          <Perfil />
        </SidebarUserInfo>
        <SidebarContatosList>
          <li>Contato 1</li>
          <li>Contato 2</li>
          <li>Contato 3</li>
          <li>Contato 4</li>
        </SidebarContatosList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
