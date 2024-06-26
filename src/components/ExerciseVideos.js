// import React from 'react'
// import { Box,Stack,Typography } from '@mui/material'


// const ExerciseVideos = ({exerciseVideos,name}) => {
//   return (
//  <Box sx={{marginTop:{lg:'200px',xs :'20px'}}} p="20" >
//     <Typography variant='h3' mb='33px'>
//         Watch <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span>  Exercise videos

//     </Typography>
//     <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
//      sx={{
//         flexDirection:{lg:'row',xs:"column" },
//         gap:{lg:'80px' ,xs :'50px'},
       
    

//      }}
//     >

      


//         {exerciseVideos?.slice(0,4).map((item,index)=>(
//             <a
//             key={index}
//             className='exercise-videos'
//             href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
//             target='_blank'
//             rel='noreferrer'
//             >
//                 <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
//                 <Box>
//                     <Typography  sx={{textDecoration:'none',color:"black"}} >
//                         {item.video.title}
//                     </Typography>
//                     <Typography variant='h6' color="#000" fontWeight="bold" >
//                       {item.video.channelName}
//                     </Typography>
//                 </Box>

//             </a>
//         ))}
     



//     </Stack>

//  </Box>
//   )
// }

// export default ExerciseVideos

import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Box,Stack,Typography } from '@mui/material'

const ExerciseVideos = ({exerciseVideos,name}) => {
    const {pathname}= useLocation();

    useEffect(()=>{
        window.scrollTo(0,0);

    },[pathname])
  return (
 <Box sx={{marginTop:{lg:'200px',xs :'20px'}}} >
    <Typography variant='h3' mb='33px' sx={{px:{xs:"20px"}}}>
        Watch{" "} <span style={{color:'#ff2625', textTransform:'capitalize'}}>{name}</span>  exercise videos

    </Typography>
    <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
     sx={{
        flexDirection:{lg:'row'},
        gap:{lg:'80px' ,xs :'0'},
        px:{xs:"20px"}
     }}
    >
        {exerciseVideos?.slice(0,4).map((item,index)=>(
            <a
            key={index}
            className='exercise-videos'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            >
                <img width={300} src={item.video.thumbnails[0].url} alt={item.video.title}/>
                <Box sx={{width: 250}}>
                    <Typography  sx={{textDecoration:'none',color:"black"}} >
                        {item.video.title}
                    </Typography>
                    <Typography variant='h6' color="#000" fontWeight="bold" >
                      {item.video.channelName}
                    </Typography>
                </Box>

            </a>
        ))}

    </Stack>

 </Box>
  )
}

export default ExerciseVideos
