
// import axios from "axios";
// import * as actionTypes2 from '../constants/product2Constant';

// const URL = 'http://localhost:8000';

// export const getProducts = () => async (dispatch) => {
//   try {
//     const response = await axios.get(`${URL}/products2`);
//     // Check if the response status is in the 2xx range to confirm a successful request.
//     if (response.status >= 200 && response.status < 300) {
//       dispatch({ type: actionTypes2.GET_PRODUCTS2_SUCCESS, payload: response.data });
//     } else {
//       // Handle non-2xx status codes as errors
//       dispatch({ type: actionTypes2.GET_PRODUCTS2_FAIL, payload: `Request failed with status: ${response.status}` });
//     }
//   } catch (error) {
//     // Handle Axios request errors (e.g., network issues)
//     dispatch({ type: actionTypes2.GET_PRODUCTS2_FAIL, payload: error.message });
//   }
// };

import axios from "axios";
import * as actionTypes2 from '../constants/product2Constant';

 // const URL = 'http://localhost:8000';

export const getProductsTwo = () => async (dispatch) => {
  try {
    // const response = await axios.get(`${URL}/product`);
     const response = await axios.get(`https://flip-kart-mern-back.vercel.app//product`);
    
    // Check if the response status is in the 2xx range to confirm a successful request.
    if (response.status >= 200 && response.status < 300) {
      dispatch({ type: actionTypes2.GET_PRODUCTS2_SUCCESS, payload: response.data });
    } else {
      // Handle non-2xx status codes as errors
      dispatch({ type: actionTypes2.GET_PRODUCTS2_FAIL, payload: `Request failed with status: ${response.status}` });
    }
  } catch (error) {
    // Handle Axios request errors (e.g., network issues)
    dispatch({ type: actionTypes2.GET_PRODUCTS2_FAIL, payload: error.message });
  }
};