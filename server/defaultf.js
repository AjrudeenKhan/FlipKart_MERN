import  {productsTwo} from './constant/data2.js'
import Product from './model/product-schema5.js'
const DefaultDataFive = async()=>{
    try{
        
        await ProductFive.insertMany(productsTwo);
        console.log(productsTwo)
        
        console.log('Data imported sucessfully')

    }catch (error){
        console.log('Error while inserting default data',error.message)
    }

}

export default DefaultDataFive;