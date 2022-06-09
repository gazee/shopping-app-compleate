import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { UserContext } from '../../App'
import { AuthContext } from '../../store/FirebaseContext'
import { Login } from '../Login/Login'




export default function ProtectedRoutes() {
  const {state,dispatch}=useContext(UserContext);
//  const{user}=useContext(AuthContext)
  return (
      <div>
            {state? <Outlet/>:<Login/>}
      </div>
  )  
}
