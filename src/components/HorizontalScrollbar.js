import React, { useContext } from 'react'
import { Box,Typography } from '@mui/material'
import BodyPart from './BodyPart'
import ExerciseCard from '../components/ExerciseCard'
import { ScrollMenu } from 'react-horizontal-scrolling-menu'
import { VisibilityContext } from 'react-horizontal-scrolling-menu'
import LeftArrowIcon from '../assets/icons/left-arrow.png'
import RightArrowIcon from '../assets/icons/right-arrow.png'

const LeftArrow=()=>{
    const {scrollPrev} = useContext(VisibilityContext)

    return (

<Typography onClick={()=>scrollPrev() }className='right-arrow'>

    <img src={LeftArrowIcon} alt='left-arrow'/>

</Typography>


)

}


const RightArrow=()=>{
    const {scrollNext} = useContext(VisibilityContext)

    return (

<Typography onClick={()=>scrollNext() }className='left-arrow'>

    <img src={RightArrowIcon} alt='right-arrow'/>

</Typography>


)
}

const HorizontalScrollbar = ({data,bodyPart,setBodyPart ,isBodyParts}) => {

  return (
  

    <ScrollMenu  LeftArrow={LeftArrow}
     RightArrow={RightArrow}
    >
        {data.map((item)=> (
        
        <Box
          key={item.id||item}
          itemId={item.id||item}
          title={item.id||item}

          sx={{m:{lg:"0 40px" ,xs:"0,10px"}}}
        > 
 
   {isBodyParts ?   <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> :
     
     <ExerciseCard exercise={item}/>
   }
    

        </Box>
        
     
        ))}
      
    </ScrollMenu>
    


    
  )
}

export default HorizontalScrollbar
