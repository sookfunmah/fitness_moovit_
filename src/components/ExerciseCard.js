import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography} from "@mui/material";
import postDataToAirtable from "../utils/postDataToAirtable";

const ExerciseCard = ({ exercise }) => {
  const handleFavorite = async () => {
    try{
      await postDataToAirtable ({name : exercise.name})
      console.log ( 'exercise added to fav successfully')
    } catch(error){
      console.error('Error in sending data to fav list',error)
      alert("Failed to add exercise to favorites. Please try again later.")
    }
  }

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} Loading="lazy" />

      <Stack>
        <Button>{exercise.bodyPart}</Button>
        <Button>{exercise.target}</Button>
      </Stack>
      <Typography>{exercise.name}</Typography>

      
    </Link>
  );
};

export default ExerciseCard;
