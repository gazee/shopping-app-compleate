var express = require('express');
var router = express.Router();
const UserModel=require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
const { route } = require('express/lib/application');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//login
router.post('/login', async (req, res)=> {
  try{
    const {email,password}=req.body;
    console.log(req.body);
    if(!email||!password){
      res.status(400).json({message:"pls fill the field"})
    }
    const userLogin=await UserModel.findOne({email:email});
     // console.lig(userLogin)
     if(userLogin){
        const isMatch=await bcrypt.compare(password,userLogin.password);
      
        //generating jwt token
        const token=await userLogin.generateAuthToken();
        //console.log(token);

        res.cookie("jwttoken",token,{
          expires:new Date(Date.now()+2589200000),
          httpOnly:true
        })

        if(!isMatch){
          res.status(400).json({error:"invalid user pass"});
        }
        res.status(200).json({message:"user login succsesfully",result:userLogin});
     }else{
      res.status(400).json({error:"invalid user el"});
     }
    
  }catch(err){
    console.log(err);
  }
});

//signup
router.post('/register', async function(req, res, next) {
  console.log(req.body)
  let {username,email,password,phone}=req.body
  if(!username||!email||!password||!phone){
    return res.status(422).json({error:"pls fill the required fields"});
  }
  //by promise method
  // UserModel.findOne({email:email})
  // .then((userExist)=>{
  //   if(userExist){
  //     res.status(422).json({error:"user already exist"});
  //   }
  //     let UserObj=new UserModel({
  //       username,email,password,phone
  //           // username:req.body.username,
  //           // email:req.body.email,
  //           // phone:req.body.phone,
  //           // password:req.body.password,
  //           // isAdmin:false
  //    });
      
  //     UserObj.save().then(()=>{
  //       res.status(200).json({message:"user Registration succsesfull"})
  //     })
  //     .catch((err)=>res.status(500).json({error:"failed to register"}))
  // })

  // .catch((err)=>console.log(err));

  //by asynch awaite method
  try {
    const userExist=await UserModel.findOne({email:email});
  
    if(userExist){
      res.status(422).json({error:"user already exist"});
    }
    const UserObj=new UserModel({ username,email,password,phone });
      //hash midleware
     await UserObj.save();
    
     res.status(200).json({message:"user Registration succsesfull"});
      
     
  } catch (error) {
    console.log(error);
  }
  //// 

});


router.get('/userlist', function(req, res, next) {
  UserModel.find(function(err,userListResponse){
    if(err){
      res.send({status:500,message:"unable to find  user"})
    }else{
      const recordCount=userListResponse.length;
      res.send({status:200,recordCount:recordCount,results:userListResponse});
      
    } 
  })
});

//LogOut
router.get('/logout',(req,res)=>{
  console.log("my logout page");
  res.clearCookie('jwttoken',{path:"/"});
  res.status(200).send("User logOut ")
})

module.exports = router;
