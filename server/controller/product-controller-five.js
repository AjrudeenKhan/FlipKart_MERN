

import Product from "../model/product-schema5.js";

export const getProductsFive = async (request,response) =>{
    try{
        const productsFive = await Product.find({});
        console.log(productsFive)
        response.status(200).json(productsFive);

    }catch(error){
        response.status(500).json({message:error.message});

    }
}