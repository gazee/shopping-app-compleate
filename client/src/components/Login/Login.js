import React, { useContext, useState } from 'react'
import { AuthContext} from '../../store/FirebaseContext';
import './login.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../App';
import { ViewContext } from '../../store/ViewContext';


export const Login = () => {
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();
    const {setCart}=useContext(ViewContext);

    const {state,dispatch}=useContext(UserContext);

    const handleLogin = async (e)=>{
        e.preventDefault();
        const res=await fetch("/user/login",{
          method:"post",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({email,password})
         });

         const data=await res.json();
        console.log(data.result);

        if(data.status===400||!data){
            window.alert("invalid user")
            console.log("invalid user");
        }else{
            window.alert("user succsessful")
            dispatch({type:'USER',payload:true})
              console.log("user succsessful");
              navigate("/");
              setCart([]);
        }
          
          
      

        
     }
  return (
    <div className='viewport-login'>
      <div className="loginParentDiv">
        {/* <img width="200px" height="200px" src={Logo}></img> */}
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            id="fname"
            name="email"
            //defaultValue="John"
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>{setPassword(e.target.value)}}
            id="lname"
            name="password"
            //defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <a onClick={()=>navigate("/signin")}>Signup</a>
      </div>
    </div>
  );
}
