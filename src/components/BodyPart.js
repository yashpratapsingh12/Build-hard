import React from 'react'
import { Stack,Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png'
const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
  <Stack 
  
  type='button'
  alignItems='center'
  justifyContent='center'
  className='bodyPart-card'
  sx={{

    borderTop: bodyPart === item ?'4px solid #ff2625':'',
    backgroundColor:'#fff',
    borderBottonLeftRadius:"20px",
    width:"270px",
    height:"280px",
    cursor:"pointer",
    gap:"47px"


  }}
    onClick={()=>{
      setBodyPart(item);
      
      if(window.innerWidth>1200){
        window.scrollTo({top:1800,left:100,behavior:"smooth"})

    }
    else{

        window.scrollTo({top:1250,left:100,behavior:"smooth"})


    }
    }}



  
  >
    <img src={Icon} alt='Dumbell'  style={{width:'40px',height:'40px' }}/>
    <Typography fontSize='24px' fontWeight='bold' color="#3A1212" textTransform="capitalize">{item}</Typography>
  </Stack>
  )
}

export default BodyPart;
