import { FunctionComponent } from "react";
import styled from "styled-components";

const Image: FunctionComponent<any> = (props) => (
  <div {...props}>
    {props.src ? (
      <img src={props.src} alt="perfil" />
    ) : (
      <img
        src="https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile.png"
        alt="perfil"
      />
    )}
  </div>
);

export const PeopleContainer = styled.div`
  width: 100%;
  padding: 10px 20px;

  display: flex;
  flex-direction: row;
  align-items: center;

  ${(props: any) => (props.active ? "border-radius: 3px solid #000" : "")}
`;

export const PeopleImage = styled(Image)`
  img {
    width: 30px;
    height: 30px;

    margin-right: 5px;

    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const PeopleName = styled.span`
  font-size: 18px;
`;
