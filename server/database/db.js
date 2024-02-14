import mongoose from "mongoose"
export const Connection = async (username,password) =>{

     // const URL  = `mongodb+srv://${username}:${password}@web.yykwh4i.mongodb.net/`
     const URL = `mongodb+srv://${username}:${password}@web.yykwh4i.mongodb.net/`
   // try{
       // await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true})

       try {
        await mongoose.connect(URL, {
          useUnifiedTopology: true,
          useNewUrlParser: true,
        
          maxPoolSize: 10, // Adjust as needed based on your application's requirements
        });
    

        console.log("Database connected sucessfully")

    } catch(error){
        console.log("Error while connecting with the database",error.message)

    }
}

export default Connection;