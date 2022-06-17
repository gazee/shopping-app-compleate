import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ViewContext } from '../../store/ViewContext';
import './view.css';


export default function View() {
    const{viewdata}=useContext(ViewContext); 
     const{cart,setCart}=useContext(ViewContext)
     const navigate=useNavigate();
useEffect(() => {

}, [])


    //console.log(viewdata);

    const addtocart= (data)=>{
      console.log(data);
      if(!cart.some(el => el._id === data._id)) {
       console.log(cart ,"frm fun")
        setCart([...cart,data])
            
      };

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
