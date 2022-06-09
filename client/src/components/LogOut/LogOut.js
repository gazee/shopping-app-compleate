import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../App';
import { AuthContext } from '../../store/FirebaseContext';


export const LogOut =() => {
    const navigate=useNavigate();
    const {state,dispatch}=useContext(UserContext);
    //we cant write async fun inside useEffect hook||so we use promise
    useEffect(()=>{
        fetch('/user/logout',{
            method:"GET",
            headers:{
                Accept:"appllication/json",
                "Content-Type":"appllication/json"
            },
            credentials:"include"
        }).then((res)=>{
                dispatch({type:'USER',payload:false})
                navigate('/')
        }).catch((err)=>{
            console.log(err);
        })
    },[])
  return (
    <>
    LogOut Page
    
    
    </>
  )
}
