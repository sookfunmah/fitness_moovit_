import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";
import { blue } from "@mui/material/colors";

const HeroBanner = () => {
  return (
    <Box
      sx={{ mt: { lg: "80px", xs: "60px" }, ml: { sm: "40px" } }}
      position="relative"
      p="10px"
    >
      <Typography color="#FF2323" fontWeight="800" fontSize="26px">
        Fitness CLub
      </Typography>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Sweat, Smile <br /> Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Check out the most effective exercise
      </Typography>
      <Button variant="contained" href="#exercises" color="error">
        Explore Exercise
      </Button>
      <img src={HeroBannerImage} alt="banner"  />
    </Box>
  );
};

export default HeroBanner;
