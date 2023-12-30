import { createContext, useState } from "react"

 const myusecontaxt = createContext();

const UserProvider = ({children})=>
{
     const [validuser, setvaliduser]=useState("");
    
     return(
        <>
           <myusecontaxt.Provider value={{validuser, setvaliduser}}>
            {children}
           </myusecontaxt.Provider>
        </>
     )
}
export {UserProvider, myusecontaxt}