

import * as actionTypesThree from '../constants/product3Constant';

const initialState ={
    productsThree:[],
    error:null,
    loading:false
}

export const getProduct3Reducer = (state = initialState,action) =>{
    
  switch (action.type) {
    case actionTypesThree.GET_PRODUCTSTHREE_SUCCESS:
      return {
        ...state, productsThree: action.payload,
        loading: false,
        error: null,
      };

    case actionTypesThree.GET_PRODUCTSTHREE_FAIL:
      return {
        ...state,
        productsThree: [],
        loading: false,
        error: action.payload,
      };

    case actionTypesThree.GET_PRODUCTSTHREE_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};

 