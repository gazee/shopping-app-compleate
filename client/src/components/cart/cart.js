import { map } from '@firebase/util';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { ViewContext } from '../../store/ViewContext';
import './cart.css';
import Cartitem from '../Cart-item/Cart-item';


export default function Cart() {
  const{cart,setCart}=useContext(ViewContext);
  //console.log(cart)
  useEffect(()=>{
    // fetch("cart/list")
    // .then(x=>x.json()).then(x=>{
    //  setCart(x)
      
     
    // })
  },[])

let amt=0;

  return (

    <div className='viewport-cart'> 
    {/* <Cartitem/> */}
    <div className='main-body'>
     
      <div className='left-body'>
      My Cart({cart.length})
      <hr/>
     
      {
        cart.map((data,index)=>{   amt=amt+(data.qty*data.price);
               return <Cartitem key={index} data={data}/>
         
        })
      }
      
      

      </div>
      <div className='right-body'>
        <h3>PRICE DETAILS</h3><hr/>
        <div className='container-left'>
          Price<br/>
          Discount<br/>
          Delivery Charges<hr/>
          Total Amount
        </div>
        <div className='container-right'>
          {amt}<br/>
          {Math.round(amt/10)}<br/>
          FREE<hr/>
          {Math.round(amt-amt/10)}
        </div>
        <button className='button-order'>Place Order</button>
      </div>


    </div>
   
      </div>
        )
}
