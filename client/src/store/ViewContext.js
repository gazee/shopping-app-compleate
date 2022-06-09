import { createContext, useState } from "react";
import React from 'react';


export const ViewContext=createContext(null);


export  function Viewdata({children}) {
    const[viewdata,setViewdata]=useState({});
    const[cart,setCart]=useState([])
    const[filtered,setFiltred]=useState([])
      return (
        <ViewContext.Provider value={{viewdata,setViewdata,cart,setCart,filtered,setFiltred}}>
            {children}
        </ViewContext.Provider>
      )
    }