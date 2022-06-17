import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../../components/product/Product';
import './homeScreen.css';


export default function HomeScreen() {
  const [productList,setProductList]=useState([]);
  

  useEffect(()=>{
    fetch("product/list")
    .then(x=>x.json()).then(x=>{
      let products=[]
      for (let key in x){
              const product={
                id:key,
                ...x[key]
              }
             // console.log(product)
              products.push(product)
      }
      setProductList(products)
      //console.log(products)
    });
  
  },[])
 
  return (
    <div className="postParentDiv">
    <div className="moreView">
      <div className="heading">
        <span>Quick Menu</span>
        <span>View more</span>
      </div>
      <div className="cards">
        
        {
          productList.map((data)=><Product key={data.name} product={data}/>)
        }
        
      </div>
    </div>
    <div className="recommendations">
      <div className="heading">
        <span>Fresh recommendations</span>
      </div>
      <div className="cards">
        <div className="card">
          <div className="favorite">
            {/* <Heart></Heart> */}
          </div>
          <div className="image">
            <img src="https://www.yamaha-motor.com.au/-/media/products/motorcycle/road/supersport/2020/yzf-r15l/product-category--thumbnail/2020_yzf-r15_dpbmc_aus_stu_003_800x600.ashx" alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; 250000</p>
            <span className="kilometer">Two Wheeler</span>
            <p className="name"> YAMAHA R15V3</p>
          </div>
          <div className="date">
            <span>10/5/2021</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
