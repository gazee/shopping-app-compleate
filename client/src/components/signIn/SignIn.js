import React, { useContext, useState } from 'react'
import { FirebaseContext } from '../../store/FirebaseContext';
import './SignIn.css';
import firebase from '../../firebase/config';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection,getFirestore } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
import { doc, setDoc } from "firebase/firestore"; 




export const SignIn = () => {
  const navigate=useNavigate();
    const [username,setUsername]=useState("");
    const [email,setEmial]=useState("");
    const [password,setPassword]=useState("");
    const[phone,setPhone]=useState('');
    const {firebase}=useContext(FirebaseContext)
    //destucturing
    

    const handleSubmit= async (event)=>{
        event.preventDefault()
        
            let User={username,email,password,phone,}
          /////fech by promis
          //   fetch("/user/register",{
          //     method:"post",
          //     headers:{"Content-Type":"application/json"},
          //     body:JSON.stringify(User)
          // }).then(x=>navigate('/'));

          ////fech by async awite
          const res=await fetch("/admin/product",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({username,email,phone,password})
        });

        const data=await res.json();
        console.log(data);
        if(data.status===422||!data){
            window.alert("invalid Registration")
            console.log("invalid Registration");
        }else{
            window.alert("Registration succsessful")
            console.log("Registration succsessful");
            navigate("/");
        }
    }
  return (
    
     <div className='viewport-signin'>
      
      <div className="signupParentDiv">
        {/* <img width="200px" height="200px" src={Logo}></img> */}
        <form onSubmit={handleSubmit} method="POST">
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            onChange={(event)=>setUsername(event.target.value) }
            id="uname"
            name="name"
            //defaultValue="John"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(event)=>setEmial(event.target.value) }
            id="emial"
            name="email"
            //defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(event)=>setPhone(event.target.value) }
            id="phone"
            name="phone"
            //defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(event)=>setPassword(event.target.value) }
            id="password"
            name="password"
           //defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a>Login</a>
      </div>
    </div>
    
  )
};
