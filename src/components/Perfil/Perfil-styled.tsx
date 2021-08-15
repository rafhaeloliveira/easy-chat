import React, { FunctionComponent } from "react";
import styled from "styled-components";

export const PerfilContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

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

export const PerfilImg = styled(Image)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    overflow: hidden;
    object-fit: cover;
  }
`;

export const PerfilName = styled.p`
  font-size: 21px;
  text-align: center;

  margin-top: 10px;
  margin-bottom: 5px;
`;

export const PerfilLogout = styled.span`
  font-size: 16px;
  text-decoration: underline;

  cursor: pointer;
`;
