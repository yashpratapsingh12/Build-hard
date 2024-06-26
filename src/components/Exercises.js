import React from 'react'
import { useState,useEffect } from 'react'
import { Pagination } from '@mui/material'
import Loader from './Loader'
import {Box,Typography,Stack} from '@mui/material'
import ExerciseCard from './ExerciseCard'
import { exerciseOptions,fetchData } from '../utils/fetchData'

const Exercises = ({exercises,setExercises,bodyPart}) => {
  // console.log(exercises);
  const[currentPage,setCurrentPage]= useState(1);
  const exercisesPerPage=9;

  const indexOfLastExercise= currentPage*exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise-exercisesPerPage;

  const currentExercises= exercises.slice(indexOfFirstExercise,indexOfLastExercise)


 const paginate =(e,value)=>{
  setCurrentPage(value);

  if(window.innerWidth>"1200"){

  

    window.scrollTo({top:1700,behavior:'smooth'})
  }
  else {
    console.log(window.innerWidth)
    window.scrollTo({top:1240,behavior:'smooth'})

  }
  // else{
  //   window.scrollTo({top:1240,behavior:'smooth'})


  // }


 }
 useEffect(()=>{
   
  const fetchExerciseData= async()=>{
    let exerciseData =[];
    if(bodyPart=='all'){
      exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1300',exerciseOptions);


    } else{
      exerciseData= await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?offset=0&limit=1300`,exerciseOptions);
    }
    setExercises(exerciseData);


  }

  fetchExerciseData();

 },[bodyPart])


  return (
 <Box id="exercises"
 sx={{mt:{lg:"110px"}}}
 mt="50px"
 p="20px"
 >
  <Typography variant='h3' mb="46px">
    
    Showing Results
    
     </Typography>
     <Stack direction="row" sx={{gap:{lg:'110px' ,xs:'50px'}}}
     flexWrap="wrap" justifyContent="center"
     
     >

      { currentExercises.length ? currentExercises.map((exercise,index)=>(
      <ExerciseCard key={index} exercise={exercise}/>
      )): <Loader/> }
     </Stack>
     <Stack mt='100px' alignItems='center'>
      {exercises.length>9 && (
       <Pagination
       color='standard'
       shape='rounded'
       defaultPage={1}
       count={Math.ceil(exercises.length/exercisesPerPage)}
       page={currentPage}
       onChange={paginate}
       size="large"
       
       />

      )}

     </Stack>

 </Box>
  )
}

export default Exercises
