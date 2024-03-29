import React from "react";
import { Box, Stack, Typography } from "@mui/material";

//youtube video feature
const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log("exerciseVideos:", exerciseVideos)
  

  return (
    <Box>
      <Typography variant="h4" fontWeight='bold' style={{marginBottom:'80px'}}>
        Similar  {" "}
        <span style={{ color: "Purple", textTransform: "capitalize" }}>
        {name}
        </span>{" "}
        exercise videos 
      </Typography>
      <Stack
        justifyContent="flex-start"
        flexWrap="wrap"
        alignItems="center"
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "110px", xs: "0" },
        }}
      >
{/* Display youtube videos */}
        {exerciseVideos?.slice(0,6).map((item,index) => (
          <a 
          key = {index}
          className = "exercise-video"
          href = {`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target = "blank"
          rel = "noreferrer"
          >
            <img src = {item.video.thumbnails[0].url} alt={item.video.title} style={{height:'250px', width:'400px'}}/>
            <Box sx={{marginBottom:'80px'}}>
              <Typography sx={{ fontSize: { lg: '14px', xs: '8px' } }} fontWeight={400} color="#000">
                {item.video.title}
              </Typography>

              <Typography fontSize="14px" color="#000">
                {item.video.channelName}
              </Typography>
       
            </Box>
          </a> 

        ))}
      </Stack> 
    </Box>
  );
};

export default ExerciseVideos;
