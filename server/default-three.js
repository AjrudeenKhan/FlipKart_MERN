
import { productsThree } from "./constant/data-three.js";
import ProductThree from "./model/product-three-schema.js";

const DefaultDataThree = async() =>{
    try{

        await ProductThree.insertMany(productsThree)
        console.log('Data Sucessfully Imported')
      //  console.log(productsThree)

    }catch(error){
        console.log('Error While inserting default data',error.message)

    }

}
export default DefaultDataThree