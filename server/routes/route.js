import express from 'express';

import { userSignUp, userLogIn } from '../controller/user-controller.js';
import { getProducts,getProductById} from '../controller/product-controller.js';
import{ getProductsThree} from '../controller/product-controller-three.js'
import { getProducts2 } from '../controller/product-controller2.js';
//import { getProducts3 } from '../controller/product-controller3.js';
import { getProductsFive } from '../controller/product-controller-five.js';
import { addPaymentGateway } from '../controller/payment-controller.js';


const router = express.Router();
router.post('/signup',userSignUp);
router.post('/login',userLogIn);
router.get('/products',getProducts);
router.get('/productThree',getProductsThree);
//router.get('/productsFiv',getProductsFive)
//router.get('/products2',getProducts2)
//router.get('/products3',getProducts3)
router.get('/product/:id',getProductById)
router.post('/payment',addPaymentGateway);



export default router;