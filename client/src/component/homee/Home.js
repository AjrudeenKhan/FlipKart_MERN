import React, { useEffect } from 'react'
import Navbar from './Navbar';
import Banner from './Banner';
import Slidee from './Slidee'
import Slidee2 from './Slidee2'
import Slide3 from './Slide3'
import MidSlide from './MidSlide'
import MidSection from './MidSection';
import {Box,styled} from '@mui/material'
import {getProducts} from '../../redux/actions/productAction';
import { getProducts2 } from '../../redux/actions/product2Action';
import {useDispatch,useSelector} from 'react-redux'
const Component = styled(Box)`
padding:10px; 
background: #F2F2F2
`
function Home() {

  const {products} = useSelector(state=>state.getProducts);
  // const {products2} = useSelector(state=>state.getProducts2)
  //console.log(products2)
 // console.log(products)

// const getProducts =  useSelector(state=>state.getProducts);
// const {products} = getProducts; // getProducts.Products=> humne iski wajahye obj des. use krr liya
  const dispatch = useDispatch();


  useEffect(()=>{
   dispatch( getProducts());
  //  dispatch( getProducts2());
  



  },[dispatch])
  return (
    <>
   <Navbar/>
   
   <Component>
   <Banner/>
   <MidSlide products={products} title='Deal of the Day' timer={true}/>
   <MidSection/>
    <Slidee products={products} title="Discount for you" timer={false}/> 
    <Slidee2 title="Fashion" timer={false}/>
    <Slide3 title='Trending Offers' timer={false}/>
  {/* <Slidee2 products2={products2}tital='Discount for you' timer={true} /> */}
   {/* <Slidee products={products} title="Deals For you" timer={false}/>
   <Slidee products={products} title="Top selection" timer={false}/>
   <Slidee products={products} title="Recommended Item" timer={false}/>
   <Slidee products={products} title="Trending Offers" timer={false}/>
   <Slidee products={products} title="Season's top picks" timer={false}/>
   <Slidee products={products} title="Top Deals on Accessories" timer={false}/> */}
   </Component>
    </>
  )
}
export default Home
