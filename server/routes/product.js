var express = require('express');
var router = express.Router();
const Product=require('../models/product.model');

//add product
router.post('/', function(req, res, next) {
    console.log(req.body)
    const{name,image,category,description,price,countInstock,qty}=req.body;
    let ProductObj=new Product({
      name,image,category,description,price,countInstock,qty
    });

    ProductObj.save((err,ProductObj)=>{
      //here save is a callback methord 
    if(err){
      res.send({status:500,message:"unable to add product",err:err})
    }else{
      res.send({status:200,message:"product added successfully",productDetails:ProductObj});
      // in productDetails customerDetails name data is saved in data base
    }    
    })
  
  });

  //get product
router.get('/list', function(req, res, next) {
    Product.find(function(err,productListResponse){
      if(err){
        res.send({status:500,message:"unable to find customer product"})
      }else{
        const recordCount=productListResponse.length;
        // res.send({status:200,recordCount:recordCount,results:productListResponse});
        res.status(200).send(productListResponse)
        
      } 
    })
});



  module.exports = router;