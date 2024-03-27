import React, {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import{Box,Button} from '@mui/material'
import axios from 'axios'
import {exerciseOptions,fetchData, youtubeOptions} from '../utils/fetchData'
import Detail from '../components/Detail'
import ExerciseVideos from '../components/ExerciseVideos'
import postDataToAirtable from '../utils/postDataToAirtable'
import Exercises from '../components/Exercises'

const AirtableUrl = 'https://api.airtable.com/v0/appvao7Efftfzq9wm/favlist'
const bearerToken = process.env.REACT_APP_BEARER_TOKEN

const ExerciseDetail = () => {
  const [exerciseDetail,setExerciseDetail] = useState({})
  const [exerciseVideos,setExerciseVideos] = useState([])
  const [isFav,setIsFav]=useState(false) //State to track exercise is fav
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

// fetch data from airtable and compare if it is a fav
    useEffect(()=>{
      // const AirtableUrl = 'https://api.airtable.com/v0/appvao7Efftfzq9wm/favlist'
      // const bearerToken = process.env.REACT_APP_BEARER_TOKEN
      
      const checkIfFav = async () =>{
        try {
          const response = await axios.get (AirtableUrl,{
            headers:{
              Authorization : bearerToken,
            }
          })
          const FavoriteExercises = response.data.records;
          const isFavorite = FavoriteExercises.some(exercise => exercise.fields.id ===exerciseDetail.id)
          setIsFav(isFavorite)
        } catch (error){
          console.error('Error checking if exercise is favorite:', error)
        }
      }
     
        checkIfFav()
     
      
    },[ExerciseDetail])



  //Function to handle adding to favorite list
  const handleAddFavorites = async () => {
    try {
      const response = await axios.get(AirtableUrl,{
        headers:{
          Authorization:bearerToken,
        }
      })

      const favoriteExercises = response.data.records
      const isDuplicate = favoriteExercises.some((exercise)=>exercise.fields.id ===exerciseDetail.id)
      if(isDuplicate){
      alert('Exercise is already in favorites list!');
      return;
      } 
      await postDataToAirtable ({
        name:exerciseDetail.name,
        id:exerciseDetail.id,
        bodyPart:exerciseDetail.bodyPart,
        gifUrl:exerciseDetail.gifUrl,
        equipment:exerciseDetail.equipment,
        })
        console.log("gifUrl:",exerciseDetail.gifUrl)
      alert ('Exercise added to favorite list successfully')
    } catch (error){
      console.error ( 'Error adding exercise to favorite',error)
      alert('FAiled to add exercise into fav')
    }
  }

  //Function to remove exercise from Airtable
  const removeDataFromAirtable = async (exerciseId) => {
  // const AirtableUrl = 'https://api.airtable.com/v0/appvao7Efftfzq9wm/favlist'
  // const bearerToken = process.env.REACT_APP_BEARER_TOKEN
  try{
    await axios.delete (`AirtableUrl/${exerciseId}`,{
      headers:{
        Authorization:bearerToken,
      }
    })
    console.log(`exercise w ID ${exerciseId} removed from Airtable`)
  } catch(error){
    if(error.response && error.response.status === 404){
      console.error (`Exercise with ID ${exerciseId} not found in Airtable list`)
    } else {
      console.error ( 'error removing exercise in Airtable',error)
    }
    
  }
  }
   

  return (
    <Box>

        {/* "Fav" Button */}
      <Button onClick={handleAddFavorites}>Add To Favorite</Button>

      <Detail exerciseDetail={exerciseDetail} />

      <ExerciseVideos exerciseVideos={exerciseVideos} name = {exerciseDetail.name}/>
      
    </Box>
  )


}

export default ExerciseDetail