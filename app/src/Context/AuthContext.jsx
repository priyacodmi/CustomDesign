import { createContext, useState } from "react";

export const AuthContext=createContext();


export const AuthContextProvider=({children})=>{
  const value=JSON.parse(localStorage.getItem("user"))?true:false;

  const [isAuthorized, setIsAuthorized]=useState(value);

  const handleAuth=(state)=>{
    setIsAuthorized(state);
  }

  return <AuthContext.Provider value={{isAuthorized,handleAuth}}>{children}</AuthContext.Provider>
}