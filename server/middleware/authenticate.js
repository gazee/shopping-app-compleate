const jwt =require('jsonwebtoken');
const UserModel=require('../models/user.model');

const Authenticate=async (req,res,next)=>{
try {
    //get the token from cokies
    const token=req.cookies.jwttoken;
    const varifytoken=jwt.verify(token,process.env.SECRET_KEY);
    //now varifiedtoken get full data aboute that user||now check varified token user detail exist in db
    const rootUser=await UserModel.findOne({_id:varifytoken._id,"tokens.token":token});

    if(!rootUser){throw new Error("user not found")}

    req.token=token;
    req.rootUser=rootUser;
    req.userID=rootUser._id;

    next()

} catch (error) {
    res.status(401).send("unAutherised user,Token not provided");
    console.log(error);
}
}

module.exports=Authenticate;