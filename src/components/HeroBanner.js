import React from "react";

import { Box,Stack, Typography,Button} from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png"

const HeroBanner=()=>{
    return (
      
        <Box sx={{
            mt:{lg:'212px',xs:'70px'},
            ml:{sm:'50px'}

        }}>
            <Typography color="#FF2625"
            fontWeight='600'
            fontSize='26px'
            ml="20px"
            >
                Build Hard
            </Typography>
            <Typography fontWeight={700}
             sx={{fontSize:{lg:'44px',xs:'40px'} ,ml:{lg:0,xs:"20px",sm:"20px"}}  }
             mb="23px"
             mt="30px"

           
             
            >
                Sweat ,smile <br/> and repeat
            </Typography>
            <Typography fontSize='22px'
             lineHeight="35px"
             mb={4}
             ml="20px"
            >
                Check out the most effective exercises
            </Typography>
            <Button variant="contained"
            color="error"
            href="#exercises"
            sx={{backgroundColor:'#ff2625',padding:'10px',ml:{lg:0,xs:"90px", sm:"230px"}}}
            
            >
                Explore exercises
            </Button>
            <Typography
              fontWeight={600}
              color="#ff2625"
              sx={{ opacity:0.1,
              display:{lg:"block",xs:"none"}
            }}
            fontSize="200px"
            >
                Exercises
            </Typography>
              
                
            <img src={HeroBannerImage} alt="banner"
              className="hero-banner-img"
            />
        </Box>
    )

    
};

export default HeroBanner;
