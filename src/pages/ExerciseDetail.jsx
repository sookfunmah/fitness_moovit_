
import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import{Box} from '@mui/material'

import {exerciseOptions,fetctData} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideo from '../components/ExerciseVideo'
import SimilarExercise from '../components/SimilarExercise'

const ExerciseDetail = () => {
  return (
    <Box>
      <Detail />
      <ExerciseVideo />
      <SimilarExercise />
    </Box>
  )
}

export default ExerciseDetail