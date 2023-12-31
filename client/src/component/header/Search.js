import React from 'react'
import { InputBase,Box,styled, ListItem,List } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getProducts} from '../../redux/actions/productAction'
import { Link } from 'react-router-dom';

const SearchContainer = styled(Box)`
background:#fff;
width:38%;
border-radius:2px;
margin-left:10px;
display:flex;
`
const InputSearchbase = styled(InputBase)`
padding-left:20px;
width:100%
font-size:unset;
`
const SearchIconWrapper = styled(Box)`
color:blue;
paddding:5px
`

const ListWrapper = styled(List)`
  position: absolute;
  background:#FFFFFF;
  color:#000;
  margin-top:36px

`

function Search() {
  const [text, setText] = useState('');

  const {products} = useSelector(state=>state.getProducts);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())

  },[dispatch])


  const getText = (text) =>{
    setText(text)

  } 
  return (
    <SearchContainer>
      <InputSearchbase 
      placeholder='search for products,brands, and more'
      onChange={(e)=>getText(e.target.value)}
      value={text}
      />
      <SearchIconWrapper>
        <SearchIcon/>
      </SearchIconWrapper>
      {
        text && 
        <ListWrapper>
          {
            products.filter(product=>product.title.longTitle.toLowerCase().includes(text.toLowerCase())).map(product=>(
              <ListItem>
                <Link
                 to={`/product/${product.id}`}
                 onClick={()=>setText('')} 
                 style={{color:'inherit'}}
                 >
                {product.title.longTitle}
                </Link>
              </ListItem>
            ))
          }
        </ListWrapper>
      }
    </SearchContainer>
  )
}

export default Search
