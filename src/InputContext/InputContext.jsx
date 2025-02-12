import { createContext } from "react";
import { useState } from "react";

 export const InputContext = createContext();

 export const InputProvider = ({ children }) => {

   const [value12,setValue1] = useState('');
   const [password, setPassword] = useState('');

   return (
     <InputContext.Provider value={{ value12, setValue1, password, setPassword }}>
       {children}
     </InputContext.Provider>
   );


 }
