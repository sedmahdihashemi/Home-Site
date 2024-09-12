import { createContext, useContext, useState } from "react";

export const postHomeContext = createContext({})
export const usePostContext = () =>{
    return useContext(postHomeContext)
}

export default function postProvider({children}){
const [isLogIn , setIsLogIn] = useState(false)
    return (
        <postHomeContext.Provider value={{isLogIn,setIsLogIn}}>
            {children}
        </postHomeContext.Provider>
    )
}