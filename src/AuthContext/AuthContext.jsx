import React, { useState } from 'react';

const AuthContext = React.createContext(null);

export const useAuth = () => {
  return React.useContext(AuthContext);
};

export default function AuthContextProvider({ children }) {
  // User aur password state define karna
  const [user, setUser] = useState(null);
  const [password1, setPass1] = useState('');
  const [IsLoggin,setIsloging] = useState(false);

  const login = (user) => {
    setUser(user);  // User ko set karna
    console.log(user);
  };

  const passwordlog = (password) => {
    setPass1(password);  // Password ko set karna
    console.log(password);
  };

  const logout = () => {
    setUser(null);  // User ko null kar dena (logout)
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, password1, passwordlog,IsLoggin,setIsloging}}>
      {children}
    </AuthContext.Provider>
  );
}
