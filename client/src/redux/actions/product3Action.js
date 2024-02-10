

import axios from "axios";

import * as actionTypesThree from '../constants/product3Constant';

//const URL = 'http://localhost:8000';

export const getProductsThree = () => async (dispatch) => {
  try {
    //const response = await axios.get(`${URL}/productss`);
    const response = await axios.get(`https://flip-kart-mern.vercel.app/productss`);
    console.log(response.data)
    // Check if the response status is in the 2xx range to confirm a successful request.
    if (response.status >= 200 && response.status < 300) {
      dispatch({ type: actionTypesThree.GET_PRODUCTSTHREE_SUCCESS, payload: response.data });
    } else {
      // Handle non-2xx status codes as errors
      dispatch({ type: actionTypesThree.GET_PRODUCTSTHREE_FAIL, payload: `Request failed with status: ${response.status}` });
    }
  } catch (error) {
    // Handle Axios request errors (e.g., network issues)
    dispatch({ type: actionTypesThree.GET_PRODUCTSTHREE_FAIL, payload: error.message });
  }
};