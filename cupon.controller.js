import coupon from "../models/coupon.schema.js"
import asyncHandler from "../service/CustomError.js"
import CustomError from "../utilis/CustomError.js"

export const createCoupon=asyncHandler(async(req,res)=>{
    const {code, discount}=req.body
     if(!code||!discount){
        throw new CustomError("code and discount are required",400)
        const coupon=await coupon.create({
            code,
            discount
        })
        res.status(200).json({
            success:true,
            message:"coupon created successfully",
            coupon
        })
     }











})