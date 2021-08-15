import React, { useState } from "react";

const defaultProfile = {
  user: null,
  image: null,
};

export const ProfileContext = React.createContext({});

export const ProfileProvider = ({ children, profile }: any) => {
  const [currentProfile, setCurrentProfile] = useState(
    profile || defaultProfile
  );

  const saveProfile = (values: any) => {
    setCurrentProfile(values);
  };

  return (
    <ProfileContext.Provider value={{ profile: currentProfile, saveProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
