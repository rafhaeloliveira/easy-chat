import People from "../People/People";
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
          <li>
            <People />
          </li>
          <li>
            <People />
          </li>
          <li>
            <People />
          </li>
          <li>
            <People />
          </li>
        </SidebarContatosList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
