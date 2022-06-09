import React, { useContext, useState } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Product from '../../components/product/Product';
import { AuthContext, FirebaseContext } from '../../store/FirebaseContext';
import './admin.css';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadBytesResumable, uploadString } from "firebase/storage";
import { setDoc, doc } from "firebase/firestore";
import firebase from '../../firebase/config';
export const Admin = () => {
    const titleRef=useRef()
    const imageRef=useRef()
    const PriceRef=useRef()
    const descriptionRef=useRef()
    const QtyRef=useRef()
    const countRef=useRef()
    const categoryRef=useRef()

    let navigate=useNavigate();
    const[image,setImage]=useState(null);
    const{user}=useContext(AuthContext);
    const {firebase}=useContext(FirebaseContext);
    const [progress,setProgress]=useState(0);

    const addHandler=async ($event)=>{
        $event.preventDefault();
        //console.log($event)
        const enteredtitle=titleRef.current.value;
        const enteredimage=imageRef.current.value;
        const enteredcategory=categoryRef.current.value;
        const enteredPrice=PriceRef.current.value;
        const entereddesc=descriptionRef.current.value;
        //const entredOty=QtyRef.current.value;
        const entredcount=countRef.current.value;

        let product={"name":enteredtitle,"image":enteredimage,"category":enteredcategory,"description":entereddesc,"price":enteredPrice,"countInstock":entredcount,qty:1}
       
        console.log(product)
        
        const res=await fetch("/product",{
            method:"post",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(product)
        })

        const data=await res.json();
        console.log(data);
        if(data.status===500||!data){
            window.alert(data.message)
            console.log(data.err);
        }else{
            window.alert(data.message)
            console.log("product added successfully");
            //navigate("/"); 
        }
        //to clear input filed
        $event.target.reset();

    };
    // const uploadFile=()=>{
    //     if(!image){
    //         console.log("not entred")
    //     }
    //     console.log("entred")
    //     const storage = getStorage(firebase);
    //     const imageRef=ref(storage,`images/${image.name}`);
    //     uploadBytes(imageRef,image).then(()=>{console.log("success")})
        
    // }
  return (
      <div className='viewport-admin'>
          <div className="centerDiv">
      
      <form method="POST" >
          <div>
                  <label htmlFor="fname">Product Title</label>
                      <br />
              <input type="text" id='fname' ref={titleRef}  className="input" placeholder='Product Title'/>
          </div>

          <div>
              <label htmlFor="image">Enter product image</label>
                      <br />
              <input type="url" id='image' ref={imageRef}  className="input" placeholder='Enter product image'/>
          </div>
          
          <div>
              <label htmlFor="category">Enter category</label>
                      <br />
              <input type="text" id='category' ref={categoryRef}  className="input" placeholder='Enter category'/>
          </div>

          <label htmlFor="desc">write description</label>
                      <br />
          <textarea name='' id="desc" ref={descriptionRef}  className="input" id='desc' cols='30' rows='10 '   placeholder='description'  >
  
          </textarea>

          <div>
          <label htmlFor="price">Price</label>
                      <br />
              <input  className="input" id='price' type="text" ref={PriceRef} placeholder='Price'/>
          </div>
          
          <div>
          <label htmlFor="countInstock">countInstock</label>
                      <br />
              <input  className="input" id='countInstock' type="text" ref={countRef} placeholder='countInstock'/>
          </div>
          {/* <div>
          <label htmlFor="qty">Qty</label>
                      <br />
              <input  className="input" id='qty' type="text" ref={QtyRef} placeholder='qty'/>
          </div> */}
          </form>
          <br />
            {/* <img alt="Posts" width="200px" height="200px" src={image?URL.createObjectURL(image):""}></img> */}
            <form method="POST" >
              <br />
              {/* <input onChange={(e)=>{setImage(e.target.files[0]);}} type="file" /> */}
              {/* <br /><p>progress{progress}% </p> */}
              <button className="uploadBtn" onClick={addHandler}>Add</button>
            </form>
          
         
  </div>
  

      </div>

      )
}
