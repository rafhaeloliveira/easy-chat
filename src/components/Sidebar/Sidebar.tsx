import { useState } from "react";
import People from "../People/People";
import { Perfil } from "../Perfil";
import {
  SidebarContainer,
  SidebarContatosList,
  SidebarUserInfo,
} from "./Sidebar-styled";

const Sidebar = () => {
  const [chatList, setChatList] = useState([]);

  return (
    <>
      <SidebarContainer>
        <SidebarUserInfo>
          <Perfil />
        </SidebarUserInfo>
        <SidebarContatosList>
          {chatList?.map((user) => (
            <People />
          ))}
        </SidebarContatosList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
