import { FC } from "react";
import { UsersProps } from "../../models/socket-context.models";
import { PeopleContainer, PeopleImage, PeopleName } from "./People-styled";

interface PeopleInterface {
  user: UsersProps;
}

const People: FC<PeopleInterface> = ({ user }) => {
  return (
    <PeopleContainer>
      <PeopleImage />
      <PeopleName>{user.username || "Usuário"}</PeopleName>
    </PeopleContainer>
  );
};

export default People;
