import { getUserData, removeUserData } from "./storage"

export const isAuthentication = ()=>{
    return getUserData() == null ? false:true;    
}

export const logout = ()=>{
    removeUserData();
}