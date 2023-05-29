import mongoose from "mongoose"
export default mongoose.model("Coupon", couponSchema)
const couponSchema=new mongoose.Schema({
    code:{
        type:String,
        required:[true,"please provide a coupon code"]
    },
    discount:{
        type:Number,
        default:0
    }
    active:{
        type:Boolean,
        default:true
    }
},{timestamps:true})