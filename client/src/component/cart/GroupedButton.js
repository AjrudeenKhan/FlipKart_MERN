
import React from 'react'
import {Box, Button,styled,ButtonGroup} from '@mui/material';

const Component = styled(ButtonGroup)`
   
    margin-top:30px
  
`
const StyledButton = styled(Button)`
    border-radius:50%;
`


const GroupedButton =() => {
  return (
    <Component>
      <StyledButton>-</StyledButton>
      <StyledButton>1</StyledButton>
      <StyledButton>+</StyledButton>
        

    </Component>
  )
}

export default GroupedButton
