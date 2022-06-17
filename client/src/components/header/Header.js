import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import { ViewContext } from "../../store/ViewContext";
//import { useSelector } from "react-redux";
import './header.css';




function Header(props) {

const {state,dispatch}=useContext(UserContext);

const{cart,setCart}=useContext(ViewContext);
const[profile,setProfile]=useState(null);

//console.log(user);
useEffect(()=>{
  
  if(profile){
    console.log("Profile is there",profile);
    fetch("profile",{
      method:'PATCH',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        data:profile,
        cart:cart
          
      })
    });
  }else {
    console.log("no Profile");
    return;}
 
  
  // //to store cart items into localstorage
  //   localStorage.setItem("cartList",JSON.stringify(cart))

},[cart,profile])
//
const navigate=useNavigate();
const [item,setItem]=useState({});

    const callProfilepage=async () => {
    try {
        const res=await fetch("/auth",{
            method:"GET",
            headers:{
                Accept:"application/json",
                "Content-Type":"application/json"
            },
            credentials:"include"
        });
      const data=await res.json();
       console.log(data,"data from auth"); 
        setProfile(data)
        console.log(data.cart);
        dispatch({type:'USER',payload:true})
        setCart(data.cart);
          
    } catch (error) {
        console.log(error,);
        console.log("no data");
        setCart([]);
        setProfile(null);
        navigate("/login")
    }
};

  useEffect(()=>{
    console.log("state changed");
    callProfilepage()
 },[state])

  return (
    <header>
      
      <div className="nav">
        <div className="logo">
          <Link to="/">
            <img src="https://png.pngtree.com/png-vector/20200921/ourlarge/pngtree-red-and-black-logo-png-image_2348180.jpg" alt="" />
          </Link>
        </div>
        <div className="menu">
          <ul>
           
            <li>
              <Link to="/" id="MenuActive">
                home
              </Link>
            </li>
            
            <li>
              <Link to="/signin">SignIn</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            
           
            <li>
                {state ? <Link  to="/logout">LogOut</Link>:<Link to="/login">Login</Link>}


                  
            </li>
          </ul>

        </div>
        <div className="buttons">
          <div className="users">
           
            <h1>{cart.length}</h1>
          </div> 
          </div>
        </div>
     
    </header>
  );
}

export default Header;
