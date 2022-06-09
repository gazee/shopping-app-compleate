import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewContext } from '../../store/ViewContext';
import './view.css';


export default function View() {
    const{viewdata}=useContext(ViewContext); 
     const{setCart,cart,setViewdata}=useContext(ViewContext)
     const navigate=useNavigate();

    //console.log(viewdata)
    const addtocart=(data)=>{
      if(!cart.some(el => el.id === data.id))
      {
        console.log(cart ,"frm fun")

        
        setCart([...cart,data])
           navigate("/")
     
      }
      navigate("/");  
   }
        
         
  return (
    <div className='viewport-view'>
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img src={viewdata.image} alt="pic"/>
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9;{viewdata.price} </p>
            <span>{viewdata.title}</span>
            <p>Two Wheeler</p>
            <span>Tue May 04 2021</span>
          </div>
          <div className="contactDetails">
            <p>Seller details</p>
            <p>No name</p>
            <p>1234567890</p>
          </div>
        </div>
     
    </div>
    <button onClick={()=>{addtocart(viewdata)}}>Add to Cart</button>

<div className='raiting'>

</div>
    </div>
  )
}
