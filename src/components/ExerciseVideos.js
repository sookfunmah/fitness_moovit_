import React from "react";
import { Box, Stack, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {

  console.log("exerciseVideos:", exerciseVideos)
  

  return (
    <Box>
      <Typography variant="h3">
        Watch{" "}
        <span style={{ color: "#ff0000", textTransform: "capitalize" }}>
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
        {exerciseVideos?.slice(0,3).map((item,index) => (
          <a 
          key = {index}
          className = "exercise-video"
          href = {`https://wwww.youtube.com/watch?v=${item.video.videoId}`}
          target = "blank"
          rel = "noreferrer"
          >
            <img src = { item.video.thumbnails[0].url} alt={item.video.title} />
          </a> 

        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
