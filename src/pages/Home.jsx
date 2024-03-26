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

  //Fav List
  const [favoriteExercise,setFavoriteExercise]= useState([])

  const addToFavorite = async (exercise) => {
    setFavoriteExercise((prevFavorites) => [...prevFavorites, exercise]);
      try {
        const response = await axios.post(
          'https://api.airtable.com/v0/appvao7Efftfzq9wm/favlist',
          {
            fields:{
              name: exercise.name,
              id : exercise.id,
              bodyPart:exercise.bodyPart
            }
          },
          {
            headers:{
              Authorization : `pathKNiUaXzngxcXG.788506da455b528aed91a89ecd8e1345728b4ee0ee0ef9e22f1a6b267c3dfe7b`
            }
          }
        )
        console.log( ' fav exercise added',response.data)
      } catch(error){
        console.error('error adding fav',error)
      }
  }
  
  
  return (
    <Box>
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
      addToFavorite={addToFavorite}
       />

       {/*Display Fav list */}
       {/* <FavoriteExercises favoriteExercise = {favoriteExercise}/> */}
    </Box>
  )
}

export default Home