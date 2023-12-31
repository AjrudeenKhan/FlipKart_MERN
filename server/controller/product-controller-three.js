
// import Product3 from "../model/product-schema3.js"

// export const getProducts3 = async(request,response) =>{
    

//     try{

//         const products3 = await Product3.find({})
//         console.log(products3)
//         response.status(200).json(products3);
         
//      }catch(error){
//          response.status(500).json({message:error.message});
 
//      }
        
//     }

// import ProductThree from "../model/product-three-schema.js";

// export const getProductsThree = async (request, response) => {
//     try {
//         const productThree = await ProductThree.find({});
//         console.log("Fetched Products3:", productThree); // Log fetched datas
//         if (!productThree) {
//             return response.status(404).json({ message: "No products found." });
//         }

//         response.status(200).json(productThree);
//     } catch (error) {
//         console.error("Error fetching Products2:", error); // Log any errors
//         response.status(500).json({ message: error.message });
//     }
// };

// import ProductThree from "../model/product-three-schema.js";

// export const getProductsThree = async (request, response) => {
//     try {
//         // Check database for data using the ProductThree model
//         const productThree = await ProductThree.find({});
        
//         // Log fetched data for debugging purposes
//         console.log("Fetched Products3:", productThree);

//         // Check if data was found
//         if (productThree.length === 0) { // Checking if the array is empty
//             return response.status(404).json({ message: "No products found." });
//         }

//         // If data is found, send it in the response
//         response.status(200).json(productThree);
//     } catch (error) {
//         // Log any errors that occur during the process
//         console.error("Error fetching Products3:", error);
//         response.status(500).json({ message: error.message });
//     }
// };

// import ProductThree from "../model/product-three-schema.js";

// export const getProductsThree = async (request, response) => {
//     try {
//         console.log("Attempting to fetch products...");
//         console.log("Request details:", request.headers, request.body); // Log request details
//         // Check database for data using the ProductThree model
//         const productThree = await ProductThree.find({});
        
//         // Log fetched data for debugging purposes
//         console.log("Fetched Products3:", productThree);

//         // Check if data was found
//         if (!productThree || productThree.length === 0) {
//             console.log("No products found.");
//             return response.status(404).json({ message: "No products found." });
//         }

//         // If data is found, send it in the response
//         console.log("Products found:", productThree.length);
//         response.status(200).json(productThree);
//     } catch (error) {
//         // Log any errors that occur during the process
//         console.error("Error fetching Products3:", error);
//         response.status(500).json({ message: error.message });
//     }
// };

import ProductThree from "../model/product-three-schema.js";

export const getProductsThree = async (request, response) => {
    try {
        console.log("Attempting to fetch products...");
        console.log("Request details:", request.headers, request.body); // Log request details
        
        // Check database for data using the ProductThree model
        const productThree = await ProductThree.find({}).lean(); // Use lean() to get plain JavaScript objects
        
        // Log fetched data for debugging purposes
        console.log("Fetched Products3:", productThree);

        // Check if data was found
        if (!productThree || productThree.length === 0) {
            console.log("No products found.");
            return response.status(404).json({ message: "No products found." });
        }

        // If data is found, send it in the response
        console.log("Products found:", productThree.length);
        response.status(200).json(productThree);
    } catch (error) {
        // Log any errors that occur during the process
        console.error("Error fetching Products3:", error);
        response.status(500).json({ message: "Error fetching products." });
    }
};



    

