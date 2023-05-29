import mongoose from "mongoose";
const productSchema=new mongoose.Schema({
name:{
    type:String,
    required:["true","please provide a product name"];
    trim:true,
    maxlength:[120,"product name should not be max than 120 chars"]
},
price:{
    type:Number,
    trim:true,
    maxlength:[120,"product name should not be max than 120 chars"]
}
photos:[{
    secure_url:{
        type:String,
        required:true
    }
}],
stock:{
    type:String,
    default:0
},
sold:{
    type:Number,
    default:0 
}
CollectionId:{
    ref:"collection"
}
},{timestamps:true})
export default mongoose.model("Product", productSchema)