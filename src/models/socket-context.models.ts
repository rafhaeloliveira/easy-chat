import { Socket } from "socket.io-client";

export interface UsersProps {
  userId?: string;
  username?: string;
}

export interface SocketContextProps {
  socket: Socket;
}
