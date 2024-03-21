
import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import{Box} from '@mui/material'

import {exerciseOptions,fetchData,fetctData} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercise from '../components/SimilarExercise'

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail] = useState({})
  const {id} = useParams()
  
  useEffect(()=>{
    const fetchExercisesData = async() =>{
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
      const youtubeSearchUrl =  "https://youtube-search-and-download.p.rapidapi.com"

    const exerciseDetailData = await fetchData (`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
    console.log({exerciseDetailData})
    setExerciseDetail(exerciseDetailData)
}
    fetchExercisesData()
  },[id])

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideo />
      <SimilarExercise />
    </Box>
  )


}

export default ExerciseDetail