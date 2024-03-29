import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import { blue } from "@mui/material/colors";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "28px", xs: "60px" }, ml: { sm: "40px" } }}
      position="relative"
      p="8px"
    >
      <Typography color="purple" fontWeight="800" fontSize="26px">
        Fitness Moovit Club
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "40px", xs: "30px" } }}
      >
        Move it,  Sweat it <br />Tone it!
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercise
      </Typography>

      <Button variant="contained" href="#exercises" color="secondary">
        Explore Exercise
      </Button> <br/>
      <br />
       
      <img src={HeroBannerImage} alt="banner" style={{width:'1400px',height:"900px"}}/>
     
      
    </Box>
  );
};

export default HeroBanner;
