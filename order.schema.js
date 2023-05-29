import mongoose from "mongoose"
const orderSchema=new mongoose.Schema({
    product:{
        type:[
            {
                productId:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"product"
                }
              count:Number,
              price:Number

            }
        ],
        required:true
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
  address:{
    type:Number,
    required:true
  }
  amount:{
    type:Number,
    required:true
  }
},{timestamps:true})
export default mongoose.model("Order", orderSchema)
















},{timestamps:true})
