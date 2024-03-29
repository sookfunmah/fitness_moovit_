import React, {useState} from 'react'
import {Box} from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises, { SearchExercise } from '../components/SearchExercises'
import FavoriteExercises from '../components/FavoriteExercises.jsx'
import axios from 'axios'


const Home = () => {
  const[bodyPart,setBodyPart]= useState("all")
  const [exercises,setExercises] = useState([])
  
  return (
    <Box sx={{backgroundColor:'cream'}}>
      <HeroBanner />
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />
      <Exercises 
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart}
      
       />
      
      <FavoriteExercises />

      

      
    </Box>
  )
}

export default Home