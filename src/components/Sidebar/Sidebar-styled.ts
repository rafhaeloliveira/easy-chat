import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 25%;
  background-color: #fff;

  border-right: 1px solid #e5e5e5;
`;

export const SidebarUserInfo = styled.div`
  width: 100%;

  padding: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const SidebarContatosList = styled.ul`
  width: 100%;

  li {
    border-top: 1px solid #e5e5e5;

    &:last-child {
      border-bottom: 1px solid #e5e5e5;
    }
  }
`;
