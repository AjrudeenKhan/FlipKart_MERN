
// import * as actionTypes2 from '../constants/product2Constant'
// const intitialState = {
//   products2:[],
//   error:null,
//   loading:false,

// }

//  export const getProducts2Reducer = (state=intitialState,action) =>{
  
//     switch (action.type) {
//       case actionTypes2.GET_PRODUCTS2_SUCCESS:
//         return {
//           ...state, products2: action.payload,
//           loading: false,
//           error: null,
//         };
  
//       case actionTypes2.GET_PRODUCTS2_FAIL:
//         return {
//           ...state,
//           products2: [],
//           loading: false,
//           error: action.payload,
//         };
  
//       case actionTypes2.GET_PRODUCTS2_REQUEST:
//         return {
//           ...state,
//           loading: true,
//           error: null,
//         };
  
//       default:
//         return state;
//     }
//   };


 import * as actionTypes2 from '../constants/product2Constant'
 const initialState = {
   products2:[],
   error:null,
   loading:false,

 }
  

export const getProducts2Reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes2.GET_PRODUCTS2_SUCCESS:
      return {
        ...state,
        products2: action.payload,
        loading: false,
        error: null,
      };

    case actionTypes2.GET_PRODUCTS2_FAIL:
      return {
        ...state,
        products2: [],
        loading: false,
        error: action.payload,
      };

    case actionTypes2.GET_PRODUCTS2_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    default:
      return state;
  }
};

  


