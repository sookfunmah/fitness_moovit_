import React , {useState,useEffect} from 'react'
import Pagination from '@mui/material/Pagination'
import {Box,Stack,Typography} from '@mui/material'
import { exerciseOptions , fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({ exercises, setExercises, bodyPart }) => {
  console.log("Exercise: " , exercises)

  const [currentPage,setCurrentPage] =useState (1);
  const exercisesPerPage =9;
  const paginate = (e,value) =>{
    setCurrentPage(value)
    window.scrollTo({top:1800,behaviour:'smooth'})
  }

  useEffect(()=>{
    const fetchExercisesData = async ()=>{
      let exercisesData = [];
      if(bodyPart ==="all"){
        exercisesData = await fetchData ('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      }else{
        exercisesData = await fetchData (`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
      }
      setExercises(exercisesData)
      }
      fetchExercisesData()
  },[bodyPart])

  return (
    <Box id="exercises">
      <Typography>Showing Results</Typography>
      <Stack>
       {exercises.map ((exercise , index)=>(
        <ExerciseCard key={index} exercise={exercise}/>
       ))}
      </Stack>
      <Stack>
        {exercises.length > 9 && (
          <Pagination
          color = "standard"
          shape = "rounded"
          defaultPage={1}
          count = {Math.ceil(exercises.length/9)}
          page = {currentPage}
          onChange = {paginate}
          size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
