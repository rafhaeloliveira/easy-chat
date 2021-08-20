import { useContext, useEffect, useState } from "react";
import { ChatSocketContext } from "../../context/socket-provider";
import People from "../People/People";
import { Perfil } from "../Perfil";
import {
  SidebarContainer,
  SidebarContatosList,
  SidebarUserInfo,
} from "./Sidebar-styled";

const Sidebar = () => {
  const [usersList, setUsersList]: any = useState([]);

  const { socket }: any = useContext(ChatSocketContext);

  useEffect(() => {
    socket.on("users", (users: any) => {
      const newUsers = users || [];

      setUsersList(newUsers);
    });
  }, []);

  return (
    <>
      <SidebarContainer>
        <SidebarUserInfo>
          <Perfil />
        </SidebarUserInfo>
        <SidebarContatosList>
          {usersList?.map((user: any): any => (
            <People key={user.userId} user={user} />
          ))}
        </SidebarContatosList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
