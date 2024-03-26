
import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import{Box,Button} from '@mui/material'

import {exerciseOptions,fetchData,fetctData, youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'

import postDataToAirtable from '../utils/postDataToAirtable'

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail] = useState({})
  const [exerciseVideos,setExerciseVideos] = useState([])
  const {id} = useParams()
  
  useEffect(()=>{
    const fetchExercisesData = async() => {
      
    const exerciseDbUrl = "https://exercisedb.p.rapidapi.com"
    const youtubeSearchUrl =  "https://youtube-search-and-download.p.rapidapi.com"

    const exerciseDetailData = await fetchData (`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
    console.log("exercise detail data:",{ exerciseDetailData})
    setExerciseDetail(exerciseDetailData)

    const exerciseVideosData = await fetchData (`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,youtubeOptions)
      setExerciseVideos(exerciseVideosData.contents)
  }
    fetchExercisesData()
  },[id])

  const handleAddToFavorites = async () => {
    try {
      await postDataToAirtable({ 
        name: exerciseDetail.name,
        id:exerciseDetail.id,
        bodyPart:exerciseDetail.bodyPart
       });

      alert('Exercise added to favorites successfully!');
    } catch (error) {
      console.error('Error adding exercise to favorites:', error);
      alert('Failed to add exercise to favorites. Please try again later.');
    }
  };

  return (
    <Box>

        {/* "Fav" Button */}
      <Button onClick={handleAddToFavorites}>Add to Favorites</Button>

      <Detail exerciseDetail={exerciseDetail} />

      <ExerciseVideos exerciseVideos={exerciseVideos} name = {exerciseDetail.name}/>
      
    </Box>
  )


}

export default ExerciseDetail