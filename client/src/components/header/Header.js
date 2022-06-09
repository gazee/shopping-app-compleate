import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import { ViewContext } from "../../store/ViewContext";
//import { useSelector } from "react-redux";
import './header.css';




function Header(props) {
//   const cart = useSelector((state) => state.cart);
//   const { cartItems } = cart;

const {state,dispatch}=useContext(UserContext);

const{cart}=useContext(ViewContext);
//console.log(user);
useEffect(()=>{
 
})

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
