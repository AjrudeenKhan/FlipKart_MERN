
// import Product2 from "../model/product-schema2.js";
// export const getProducts2 = async (request,response) =>{
//     try{
//         const products2 = await Product2.find({})
//         console.log(products2)
        
        
//         response.status(200).json(products2);



//     }catch(error){
//         response.status(500).json({message:error.message});

//     }

// }

import Product2 from "../model/product-schema2.js";

export const getProducts2 = async (request, response) => {
    try {
        const products2 = await Product2.find({id:'product1'});
        console.log("Fetched Products2:", products2); // Log fetched data

        if (!products2) {
            return response.status(404).json({ message: "No products found." });
        }

        response.status(200).json(products2);
    } catch (error) {
        console.error("Error fetching Products2:", error); // Log any errors
        response.status(500).json({ message: error.message });
    }
};
