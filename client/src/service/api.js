import axios from 'axios';

//const URL = 'http://localhost:8000';

export const authenticateSignup = async (data)=>{
    try{
      // return await axios.post(`${URL}/signup`,data);
       return await axios.post(`https://flip-kart-mern.vercel.app/signup`,data);

    } catch(error){
        console.log("Error while calling signup api",error.response.data);
    }
};
export const authenticateLogin = async (data)=>{
    
    try{
       return await axios.post(`${URL}/login`,data);

    } catch(error){
        console.log("Error while calling login api",error);
        return error.response;
    }
};

export const payUsingPayment = async (data) =>{
    try{
        let response = await axios.post(`${URL}/payment`,data);
        return response.data;

    }catch(error){
        console.log("Error while calling payment api",error);
    }

}








