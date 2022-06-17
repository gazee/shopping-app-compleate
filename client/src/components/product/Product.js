import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ViewContext } from "../../store/ViewContext";
import View from "../view/View";
import './Product.css';

function Product(props) {
  const { product } = props;
  //console.log(product);
 
  const navigate=useNavigate()
  const{setCart,cart,setViewdata}=useContext(ViewContext)

 
 
  const viewfun=(product)=>{  
    setViewdata(product);
    navigate('/view')
  }
  //console.log(cart)
  return (
    
    
       <div className="card" 
        //onClick={()=>viewfun(product)} 
       >
          <div className="favorite">
            {/* <Heart></Heart> */}
          /* </div>
          <div className="image">
            <img src={product.image} alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; {product.price}</p>
            <span className="kilometer">{product.name}</span>
            <p className="name"> {product.description}</p>
          </div>
          
          {/* <button onClick={()=>addtocart(product)}>Add to Cart</button> */}
          <button onClick={()=>viewfun(product)}>View</button>
          
        </div> 
    );
}

export default Product;
