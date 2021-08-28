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

  margin-bottom: 20px;

  display: flex;
  flex-direction: column;

  ${(props: any) => `
    ${props.mine ? "margin-left: auto" : "margin-right: auto"};
  `}
`;

export const MessageBalloonText: any = styled.p`
  padding: 10px 20px;

  border-radius: 4px;

  background-color: #62d062;
  color: #fff;

  ${(props: any) => `
    background-color: ${props.mine ? "#62d062" : "#5f99e2"};
  `}
`;

export const MessageBalloonAuthor: any = styled.span`
  font-size: 10px;
  color: #4c4c4c;
  margin-top: 3px;

  ${(props: any) => `
    margin-left: ${props.mine ? "auto" : "0"};
  `}
`;
