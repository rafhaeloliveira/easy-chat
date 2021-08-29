import { FC } from "react";

export interface ProfileProps {
  user: string;
  image: string;
}

export interface ProfileProviderProps {
  children: FC;
  profile?: any;
}

export interface ProfileContextProps {
  profile?: any;
  saveProfile?: any;
}
