// import * as actionType from '../constants/productConstant'

// const initialState = {
//     products:[],
// }
// export const getProductsReducer = (state = initialState, action) =>{
//     switch(action.type){
//         case actionType.GET_PRODUCTS_SUCCESS:
//             return {products: action.payload}

//         case actionType.GET_PRODUCTS_FAIL:
//             return {error: action.payload}

//         default :  return state;
//     }
// }
import * as actionTypes from '../constants/productConstant';

const initialState = {
  products: [],
  loading: false,
  error: null,
};

export const getProductsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        ...state, products: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        ...state,
        products: [],
        loading: false,
        error: action.payload,
      };

    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};

export const getProductDetailsReducer = (state = { product: {}}, action) => {
    
  switch(action.type){
      case actionTypes.GET_PRODUCT_DETAILS_REQUEST:
          return { loading: true }
      case actionTypes.GET_PRODUCT_DETAILS_SUCCESS:
          return { loading: false, product: action.payload }
      case actionTypes.GET_PRODUCT_DETAILS_FAIL:
          return {
              loading: false,
              error: action.payload
          }
      case actionTypes.GET_PRODUCT_DETAILS_RESET: 
          return {
              product: {}
          }
      default:
          return state
  }
}




