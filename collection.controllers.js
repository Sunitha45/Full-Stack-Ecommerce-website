import collection from "../model/collectionSchema.js"
import asyncHandler from "../service/asyncHandler.js"
import CustomError from "../utilis/CustomError.js"

export const createCollection=asyncHandler(async(req,res)=>{
    const {name}=req.body
    if(!name){
        throw new CustomError("collection name is required",400)
    }
    const collection=await collection.create({
        name
    })
    res.status(200).json({
        success:true,
        message:"collection was created successfully",
        collection
    })
})

//update collection

   
    export const UpdateCollection=asyncHandler(async(req,res)=>{
        const {name}=req.body
        
    const{id:collectionId}=req.params
        if(!name){
           throw new CustomError("collection name is required",400) 
        }
      
        let UpdatedCollection=  await collection.findByIdAndUpdate(collectionId,
        {
            name
        },{
            new:true,
            runValidators:true
    })
    if(!UpdateCollection){
        throw new CustomError("Collection not found",400)
    }
    res.status(200).json({
        success:true,
        message:"Collection updated successfully",
        UpdateCollection
    })
    })

















