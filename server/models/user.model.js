// <!--mongoose-->
const mongoose =require('mongoose');
const bcrypt=require('bcrypt');
const jwt =require('jsonwebtoken');
const { token } = require('morgan');
//create a Schema
const Schema =mongoose.Schema
const userSchema =new Schema({

    username:String,
    // { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone:  { type: String, required: true ,unique:true },
    password:{ type: String, required: true },
    isAdmin: String,
    // { type: Boolean, required: true, default: false },
    tokens:[
      {
        token:{
          type:String,
          // required:true
  
        }
      }
    ],
    cart:[]
  
},{
    timestamps: true,
  }
  
);

//we are hashing the password
userSchema.pre('save',async function (next){
  if(this.isModified('password')){
     this.password=await bcrypt.hash(this.password,12);
  }
  next();
})

//we are generating token
userSchema.methods.generateAuthToken=async function(){
  try {
     let token_p=jwt.sign({_id:this._id},process.env.SECRET_KEY);
     this.tokens=this.tokens.concat({token:token_p});
     await this.save();
     return token_p;
  } catch (error) {
    console.log(error);
  }
}

module.exports = mongoose.model('user',userSchema)

