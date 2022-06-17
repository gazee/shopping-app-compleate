import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';

export default function Profile() {
    const navigate=useNavigate();
    const [item,setItem]=useState({});

    const callProfilepage=async () => {
   
        try {
            const res=await fetch("/profile",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:"include"
            });
            const data=await res.json();
            //console.log(data);
            setItem(data);
            if(!res.status===200){
                 const err=new Error(res.error);
                 throw err
            }
        } catch (error) {
            console.log(error);
            navigate("/login")
        }
    };

    useEffect(()=>{
        callProfilepage()
    },[])
  return (
    <div className='viewport_profile'>profile
        <h2>{item.username}</h2>
    </div>
  )
}
