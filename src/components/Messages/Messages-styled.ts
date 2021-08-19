import styled from "styled-components";

export const MessagesContainer = styled.div`
  width: 100%;
  height: calc(100vh - 76px);
  background-color: #efefef;
  padding: 10px;
`;

export const MessagesList = styled.ul`
  width: 100%;
  height: 100%;

  list-style: none;

  display: flex;
  flex-direction: column;

  padding: 10px;

  margin-top: 10px;
  margin-bottom: 50px;
`;

export const MessageBalloon: any = styled.li`
  max-width: 50%;
  padding: 10px 20px;

  border-radius: 4px;

  background-color: #62d062;
  color: #fff;

  margin-bottom: 20px;

  ${(props: any) => `
    background-color: ${props.mine ? "#62d062" : "#5f99e2"};
    ${props.mine ? "margin-left: auto" : "margin-right: auto"};
  `}
`;
