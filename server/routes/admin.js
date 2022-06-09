var express = require('express');
var router = express.Router();
const User=require('../models/user.model');
const Product=require('../models/product.model');
const Authenticate=require('../middleware/authenticate');

/* GET users listing. */
router.post('/register',  function(req, res, next) {
  console.log(req.body)
  let UserObj=new User({
    //username,email,password,phone
        username:req.body.username,
        email:req.body.email,
        phone:req.body.phone,
        password:req.body.password,
        isAdmin:false
    
  });
  //console.log(req.body.username)

  UserObj.save((err,UserObj)=>{
    //here save is a callback methord 
  if(err){
    res.send({status:500,message:"unable to add user",err:err})
  }else{
    res.send({status:200,message:"user added successfully",userDetails:UserObj});
    // in customerDetails name data is saved in data base
  }    
  })

});

router.get('/register', Authenticate,function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/list', function(req, res, next) {

  User.find(function(err,userListResponse){
    if(err){
      res.send({status:500,message:"unable to find customer user"})
    }else{
      const recordCount=userListResponse.length;
      res.send({status:200,recordCount:recordCount,results:userListResponse});
      
    } 
  })
  
});

// router.post('/product', function(req, res, next) {
//   console.log(req.body)
//   const{name,image,description,price}=req.body;
//   let ProductObj=new Product({
   
//     name,image,description,price

//     // name:"Arrows shirt",
//     // image:"https://louisphilippe.imgix.net/img/app/product/5/587682-5354686.jpg?auto=format",
//         // category:"men clothings",
//     // description:"men clothes Lp shirt",
//     // price:2100,
//         // countInstock:23,
//         // rating:4,
//         // numReviews:3,

//   });
  

//   ProductObj.save((err,ProductObj)=>{
//     //here save is a callback methord 
//   if(err){
//     res.send({status:500,message:"unable to add product",err:err})
//   }else{
//     res.send({status:200,message:"product added successfully",productDetails:ProductObj});
//     // in productDetails customerDetails name data is saved in data base
//   }    
//   })

// });

module.exports = router;
