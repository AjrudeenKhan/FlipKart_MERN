
import mongoose from "mongoose";
const product3Schema = new mongoose.Schema({
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

const Product3 = mongoose.model('product3',product3Schema);

export default Product3;