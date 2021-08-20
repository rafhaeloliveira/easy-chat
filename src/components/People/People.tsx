import { PeopleContainer, PeopleImage, PeopleName } from "./People-styled";

const People = (props: any) => {
  const { user } = props;

  return (
    <PeopleContainer>
      <PeopleImage />
      <PeopleName>{user.username || "Usuário"}</PeopleName>
    </PeopleContainer>
  );
};

export default People;
