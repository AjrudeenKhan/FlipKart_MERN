import mongoose from "mongoose";
const productSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true,
    },
    url:String,
    title:Object,
    price:Object,
    quantity:Number,
    description:String,
    discount:String,
    tagline:String,
});

const Product2 = mongoose.model('productt',productSchema);

export default Product2;