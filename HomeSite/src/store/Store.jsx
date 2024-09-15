import { createContext, useContext, useState } from "react";

export const postHomeContext = createContext({})
export const usePostContext = () =>{
    return useContext(postHomeContext)
}

export default function postProvider({children}){
const [isLogIn , setIsLogIn] = useState(false)
const [listMap , setListMap] = useState([])
    return (
        <postHomeContext.Provider value={{isLogIn,setIsLogIn,listMap , setListMap}}>
            {children}
        </postHomeContext.Provider>
    )
}