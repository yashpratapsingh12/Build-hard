import React from "react";
import { Link } from "react-router-dom";

import { useEffect, useState } from "react";
import { Box,Button,Stack,TextField,Typography } from "@mui/material";
import { fetchData,exerciseOptions } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";


const SearchExercises=({exercises,setExercises,bodyPart,setBodyPart})=>{

    const[search,setSearch]= useState("");

 

    const [bodyParts,setBodyParts]= useState([]);


    useEffect(()=>{
     
        const fetchExercisesData= async()=>{
            const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)

            setBodyParts([ 'all',...bodyPartsData])
        }

        fetchExercisesData();


    },[])

    const handleSearch= async()=>{
        if(search){
            const exerciseData= await fetchData('https://exercisedb.p.rapidapi.com/exercises?offset=0&limit=1300',exerciseOptions);

           

        
            
     
  

        const searchedExercises = exerciseData.filter(
            (item) => item.name.toLowerCase().includes(search)
                   || item.target.toLowerCase().includes(search)
                   || item.equipment.toLowerCase().includes(search)
                   || item.bodyPart.toLowerCase().includes(search),
          );

            setSearch("");
            setExercises(searchedExercises);

            // console.log(exercises);

            

      
            
        
        }
        if(window.innerWidth>1200){
            window.scrollTo({top:1800,left:100,behavior:"smooth"})

        }
        else{

            window.scrollTo({top:1250,left:100,behavior:"smooth"})


        }

        

        

       


    }

    return (
     <Stack alignItems="center" mt="37px"
      justifyContent="center" p="20px"
     >
        <Typography fontWeight="700"
        sx={{fontSize:{lg:"44px",xs:"30px"}}}mb="50px" textAlign="center">
            Awesome exercises you <br/>
            should know 
        </Typography>
            {/* <Link to={`/exercises/${exercises.id}`}> */}
        <Box position="relative" mb="72px">
            <TextField
            sx={{
                input:{
                    fontWeight:"700",
                    border:"none",
                    borderRadius:"4px",


                },
                width:{lg:"800px",xs:"350px"},
                backgroundColor:'#fff',
                borderRadius:"40px"
                
            }}
             height="76px"
             value={search}
             onChange={(e)=>setSearch(e.target.value.toLowerCase())}
             onKeyDown={(e)=>{
                if(e.key==="Enter"){
                    handleSearch()
                }
             }}
             placeholder="Search  exercises"
             type="text"


            />
            <Button className="search-btn"
             sx={{
                bgcolor:"#ff2623",
                color:"#fff",
                textTransform:"none",

                width:{lg:"175px",xs:"80px"},
                fontSize:{lg:"20px",xs:"14px"},
                height:"56px",
                position:"absolute",
                right:"0"


                
             }} 
             onClick={handleSearch}
             
            >
                Search

            </Button>
        </Box>
            {/* </Link> */}
        <Box sx={{position:"relative",width:"100%",p:"20px"}}>

            <HorizontalScrollbar data={bodyParts}
              bodyPart={bodyPart} setBodyPart={setBodyPart}

              isBodyParts
            
            ></HorizontalScrollbar>

        </Box>

     </Stack>
    )
}

export default SearchExercises;
