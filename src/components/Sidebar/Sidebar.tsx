import { FC, useContext, useEffect, useState } from "react";
import { ChatSocketContext } from "../../context/socket-provider";
import {
  SocketContextProps,
  UsersProps,
} from "../../models/socket-context.models";
import People from "../People/People";
import { Perfil } from "../Perfil";
import {
  SidebarContainer,
  SidebarContatosList,
  SidebarUserInfo,
} from "./Sidebar-styled";

const Sidebar = () => {
  const [usersList, setUsersList] = useState<UsersProps[]>([]);

  const { socket } = useContext(ChatSocketContext) as SocketContextProps;

  useEffect(() => {
    socket.on("users", (users: UsersProps) => {
      const newUsers = users as UsersProps[];

      setUsersList(newUsers);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <SidebarContainer>
        <SidebarUserInfo>
          <Perfil />
        </SidebarUserInfo>
        <SidebarContatosList>
          {usersList?.map((user: UsersProps) => (
            <People key={user.userId} user={user} />
          ))}
        </SidebarContatosList>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
