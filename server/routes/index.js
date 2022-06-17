var express = require('express');
var router = express.Router();
const Authenticate=require('../middleware/authenticate');
const userModel = require('../models/user.model');
const UserModel=require('../models/user.model');

/*to check user is authenticated or not */
router.get('/profile',Authenticate, function(req, res) {
  console.log("hello profile page");
    res.send(req.rootUser)
  });
 
//to check user is authenticated or not for varifying protected routes
router.get('/auth',Authenticate, function(req, res) {
  console.log("auth");
  res.send(req.rootUser)
  });

//
router.patch('/profile', async function(req, res) {
  
  const obj=await req.body.data;
  const obj2=await req.body.cart;
  const userId = await req.body.data._id ;
    
   //console.log(obj2 ,"cart");
    await userModel.updateOne({_id:userId},{$set:{cart:obj2}});
    res.status(200).send("updated ")
  
  });

  

module.exports = router;