import React, { createContext, useState } from 'react';

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const [profiles, setProfiles] = useState([]);

  const addProfile = (profile) => {
    //console.log('Adding profile:', profile);
    setProfiles(prev => [...prev, profile]);
  };

  return (
    <ProfileContext.Provider value={{ profiles, addProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;