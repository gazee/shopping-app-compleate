const mongoose =require ("mongoose");
//const { MONGO_URL } =require ("../link/mongodbLink");

const URL=process.env.DATABASE;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,

})
.then(()=>{
   console.log("mongoose is connected");

}).catch((err)=>{
    console.log(err);

})
// mongoose.connection.on("error", (err) => {
//   console.log("err", err);
// });
// mongoose.connection.on("connected", (err, res) => {
//   console.log("mongoose is connected");
// });