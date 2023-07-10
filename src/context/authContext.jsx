import { useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../config/axios";
const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
    const [currentUser,setCurrentUser]=useState(JSON.parse(localStorage.getItem('user') || null))
    const login=async(data)=>{
        const res= await api.post("auth/login", data, {withCredentials: true});
setCurrentUser(res.data)
    }
    const logout=async(data)=>{
        const res= await api.post("auth/logout", data, {withCredentials: true});
        setCurrentUser(null)

    }
    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(currentUser))
    },[currentUser])
  return <AuthContext.Provider value={{currentUser,login,logout}}>{children}</AuthContext.Provider>;
};
