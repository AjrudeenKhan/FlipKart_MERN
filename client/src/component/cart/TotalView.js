import React, { useEffect } from 'react'
import {Box,Typography,styled} from '@mui/material'
import { useState } from 'react'

const Header = styled(Box)`
    padding:15px 24px;
    background:#fff;
    border-bottom:1px solid #f0f0f0;
`

const PriceDetails = styled(Typography)`
    color:#878787;

`
const Container = styled(Box)`
    padding:15px 24px;
    & > p  {
        margin-bottom:20px;
        font-size:14px;
    }
    & > h6 {
        margin-bottom:20px;

    }
`
const Price = styled(Box)`
    float:right;   
`
const Discount = styled(Typography)`
     color:green;
     font-weight:500
     
`

const TotalView = ({cartItems}) => {

    const[price,SetPrice] = useState(0);
    const[discount,SetDiscount] = useState(0)

    useEffect(()=>{
        totalAmount();
    },[cartItems])

    const totalAmount = () =>{
        let price= 0, discount=0;
        cartItems.map(item=>{
            price += item.price.mrp;
            discount += (item.price.mrp -item.price.cost);
    })
    SetPrice(price);
    SetDiscount(discount)
    }
  return (
    <Box>
        <Header >
            <PriceDetails>PRICE DETAILS</PriceDetails>
        </Header >
        <Container>
            <Typography>Price ({cartItems?.length} item)
            <Price component='span'>₹{price}</Price>
             </Typography>
            <Typography>Discount
            <Price component='span'>-₹{discount}</Price>
             </Typography>
            <Typography>Delivery Charges
            <Price component='span'>₹40</Price>
             </Typography>
            <Typography variant='h6'>Total Amount
            <Price component='span'>₹{price-discount+40}</Price>
             </Typography>
             <Discount>You will save ₹{discount-40} on this order </Discount>
            
        </Container>
    </Box>
    
    
  )
}

export default TotalView
