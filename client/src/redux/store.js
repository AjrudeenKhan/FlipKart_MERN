// import {createStore,combineReducers, applyMiddleware} from 'redux';

// import {composeWithDevTools} from 'redux-devtools-extension';
// import thunk from 'redux-thunk';
// import {getProductDetailsReducer, getProductsReducer} from './reducers/productReducer';
// import {getProducts2Reducer} from './reducers/product2Reducer'
// import {cartReducer} from './reducers/cartReducer';

// const reducer = combineReducers({
//     getProducts:getProductsReducer,
//     getProductDetails:getProductDetailsReducer,
//     cart:cartReducer,
//     getProducts2:getProducts2Reducer
  
// });

//   const middleware = [thunk];

// const store = createStore (
//     reducer,
//     composeWithDevTools(applyMiddleware(...middleware))

    
// );

// export default store;

import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { getProductDetailsReducer, getProductsReducer } from './reducers/productReducer';
import { getProducts2Reducer } from './reducers/product2Reducer';
import { getProduct3Reducer } from './reducers/product3Reducer';
import { cartReducer } from './reducers/cartReducer';

const rootReducer = combineReducers({
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
  cart: cartReducer,
  getProducts2: getProducts2Reducer,
  getProduct3:getProduct3Reducer
});

const middleware = [thunk];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;