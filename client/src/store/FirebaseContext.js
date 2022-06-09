import { createContext, useState } from "react";
import React from 'react';


export const FirebaseContext=createContext(null);
export const AuthContext=createContext(null);


// export  function ContextAuth({children}) {
//     const [user,setUser]=useState("hello")
//   return (
//     <AuthContext.Provider value={{user}}>
//         {children}
//     </AuthContext.Provider>
//   )
// }

export  function ContextAuth(props) {
    const [user,setUser]=useState(null)
  return (
    <AuthContext.Provider value={{user,setUser}}>
        {props.children}
    </AuthContext.Provider>
  )
}
