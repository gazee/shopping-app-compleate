const mongoose=require('mongoose')

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    image: { type: String, required: true },
     category: { type: String, required: true },
     description: { type: String, required: true },
    price: { type: Number, required: true },
     countInstock: { type: Number, required: true },
     qty:{type:Number,required:true}
    // rating: { type: Number, required: true },
    // numReviews: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);

