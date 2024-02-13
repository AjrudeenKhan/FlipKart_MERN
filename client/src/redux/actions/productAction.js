
// import axios from "axios"

// import * as actionTypes from '../constants/productConstant';


// const URL  = 'http://localhost:8000';

// export const getProducts = () => async (dispatch) =>{
//     try{

//         const {data} = await axios.get(`${URL}/products`); // response isliye nhi likha kquki response ke obj me se sirf humhe data chahiye mai response obj ko janta hu woh hi config, data, status, message and all
//         // console.log(response);
//         dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})


//     }catch(error){
//         dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})
//     }
// }


// /* 

// let obj = {
//     config:{},
//     data: [];
//     header: [],
//     staus:200,
//     mesage: ''

//     obj.data
//     {data} = obj

// }
// */
import axios from "axios";
import * as actionTypes from '../constants/productConstant';

//const URL = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => {
  try {
   // const response = await axios.get(`${URL}/products`);
    const response = await axios.get(`https://flip-kart-mern-5mxo.vercel.app/products`);
     console.log(response.data)
    // Check if the response status is in the 2xx range to confirm a successful request.
    if (response.status >= 200 && response.status < 300) {
      dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: response.data });
    } else {
      // Handle non-2xx status codes as errors
      dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: `Request failed with status: ${response.status}` });
    }
  } catch (error) {
    // Handle Axios request errors (e.g., network issues)
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.message });
  }
};

export const getProductDetails=(id) =>async (dispatch) =>{
  try{
    dispatch({type:actionTypes.GET_PRODUCT_DETAILS_REQUEST});
   // const {data} = await axios.get(`${URL}/product/${id}`)
    const {data} = await axios.get(`https://flip-kart-mern-5mxo.vercel.app/products/${id}`)

    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload:data });

  }catch(error){
   dispatch ({ type:actionTypes.GET_PRODUCT_DETAILS_FAIL,payload:error.message})

  }

}
