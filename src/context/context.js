import React from 'react';

const ProfileContext = React.createContext();

export const ProfileProvider = ({ children }) => {
  const [phoneNumber, setPhoneNumber] = React.useState('123-456-7890');
  const [email, setEmail] = React.useState('john_doe@gmail.com');
  const [about, setAbout] = React.useState("Hi, my name is John and I'm from San Francisco, California. I enjoy playing basketball and football.");

  const values = {phoneNumber, setPhoneNumber, email, setEmail, about, setAbout};

  return (
    <ProfileContext.Provider value={values}>{children}</ProfileContext.Provider>
  );
};

export default ProfileContext;
