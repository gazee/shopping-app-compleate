
import './App.css';
import Footer from './components/footer/Footer';
import {  Route, Routes, useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import HomeScreen from './screen/home/HomeScreen';
import SignScreen from './screen/signScreen.js/SignScreen';
import { Admin } from './screen/admin/admin';
import { Login } from './components/Login/Login';
import React, { useContext, useEffect ,createContext,useReducer} from 'react';
import { AuthContext, FirebaseContext } from './store/FirebaseContext';
import { getAuth, onAuthStateChanged ,signOut} from "firebase/auth";
import View from './components/view/View';
import { Viewdata } from './store/ViewContext';
import Cart from './components/cart/cart';
import ProtectedRoutes from './components/Protected Routes/ProtectedRoutes';
import Profile from './components/profile/profile';
import { LogOut } from './components/LogOut/LogOut';
import { initilaState,reducer } from './redux/Reducer/userReducer';
import Error from './screen/error/Error';



 //context api
 export const UserContext=createContext();


function App() {
  
  const navigate=useNavigate();
  const {setUser}=useContext(AuthContext);
  const {firebase}=useContext(FirebaseContext);
  useEffect(()=>{
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // Check for user status
     // console.log(user.displayName)
      setUser(user)
    })
    
  })
  const SignOut=()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log("log out Succsesfully")
      //navigate("/login")
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  };
   const [state, dispatch] = useReducer(reducer,initilaState)
  return (
    
   
    <React.Fragment>
      <UserContext.Provider value={{state,dispatch}}>
      <Viewdata>
     <Header signOut={()=>SignOut()}/>
    
    <Routes>
        
             <Route path="/"  element={<HomeScreen/>}/>
             <Route path="/signin" element={<SignScreen/>}/> 
             <Route path="/login" element={<Login/>}/>
             <Route path="/profile" element={<Profile/>}/>
             <Route path="/logout" element={<LogOut/>}/>
              <Route element={<ProtectedRoutes/>}>
                <Route path="/admin" element={<Admin/>}/>
                  <Route path="/view" element={<View/>}/>
                <Route path="/cart" element={<Cart/>}/>
             </Route> 
             <Route path="*" element={<Error/>}/>
    </Routes>
    </Viewdata>
    </UserContext.Provider>
    <Footer/>
    </React.Fragment>

      
   
  );
}

export default App;
