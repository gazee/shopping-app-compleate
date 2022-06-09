import React, { useContext } from 'react';
import { ViewContext } from '../../store/ViewContext';
import './Cart-item.css'; 



export default function Cartitem(props) {
    let {data}=props
  //  console.log(data);
   const{cart,setCart}=useContext(ViewContext);

   let  handleDecrement =(id) => {
    setCart(cart=>
      cart.map( (item) =>
      id===item.id?{...item,qty:item.qty-(item.qty>1?1:0)}:item
      )
    ); 
}

let handleIncrement=(id) =>{
  setCart(cart=>
    cart.map( (item) =>
    id===item.id?{...item,qty:item.qty+(item.qty<10?1:0)}:item
    )
  );
}

const removeitemHandler=(id)=>{
  console.log(id)
  setCart(cart.filter(meetup=>meetup.id!=id))
}
  return (
  // <p>wello</p>
    <div className='container'>
                <div className='image'>
                <img src={data.image} alt='pic'/>
                </div>
                <div className='details'>
                  <h2>{data.title}</h2>
                  <h2>{data.price}</h2>
                 
                  <div className='add'>
                  <span>Qty:</span>
                   <button className='btn' onClick={()=>handleDecrement(data.id)}>-</button>
                    <div className='add-select'> {data.qty}</div>
                   <button className='btn' onClick={()=>handleIncrement(data.id)}>+</button>

                    </div>
                  
                </div>
               <p id='total'>Total:{data.qty*data.price}</p> 
                <button onClick={()=>{removeitemHandler(data.id)}}>Remove</button>
            
           </div>
  )
}
