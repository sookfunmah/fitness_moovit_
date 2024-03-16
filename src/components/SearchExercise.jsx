import React from "react";
import { useEffect, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions,fetchData } from "../utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

export const SearchExercise = () => {
  const [search, setSearch] = useState("");
  const [exercises,setExercises] = useState([])
  const [bodyParts,setBodyParts] = useState([])

  useEffect(()=>{
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData ("https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);
      
      setBodyParts(["all", ...bodyPartsData])
    }

    fetchExercisesData();
  },[])



  const handleSearch = async ()=>{
    if (search){
      const exercisesData = await fetchData
      ('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      
     const searchedExercises = exercisesData.filter(
      (exercise) => exercise.name.toLowerCase().includes(search)
      ||exercise.target.toLowerCase().includes(search)
      ||exercise.equipment.toLowerCase().includes(search)
      ||exercise.bodyPart.toLowerCase().includes(search)
     )
      setSearch("")
      console.log(exercisesData)
      setExercises(searchedExercises)
      
      
    }
  }

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises To know
      </Typography>
      <Box position="relative" mb="30px">
        <TextField
          sx={{
            input: {
              fontWeight: "700px",
              border: "none",
              borderRadius: "4px",
            },
            width: { lg: "1170px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercise"
          type="text"
        />

      <Button
        className="search-btn"
        sx={{
          bgcolor: "#FF2625",
          color: "#fff",
          textTransform: "none",
          width: { lg: "175px", xs: "80px" },
          height: "56px",
        }}
        onClick = {handleSearch}
      >
        Search
      </Button>
      </Box>
      <Box>
        <HorizontalScrollbar data={bodyParts}/>
      </Box>
    </Stack>
  );
};
