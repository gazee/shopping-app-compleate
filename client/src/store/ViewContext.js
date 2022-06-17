import { createContext, useState } from "react";
import React from 'react';
import { Login } from "../components/Login/Login";


export const ViewContext=createContext(null);
//local storage set
// const getLocalItems=()=>{
//   let list=localStorage.getItem("cartList");
//   //console.log(list);
//   if(list){
//     //return if there is data in list then make it as object(here expecting []not string)
//     return JSON.parse(localStorage.getItem("cartList"));
//   }else{
//     return [];
//   }
// };

export  function Viewdata({children}) {
    const[viewdata,setViewdata]=useState({});
    const[cart,setCart]=useState([]);
    const[filtered,setFiltred]=useState([])
      return (
        <ViewContext.Provider value={{viewdata,setViewdata,cart,setCart,filtered,setFiltred}}>
            {children}
        </ViewContext.Provider>
      )
    }