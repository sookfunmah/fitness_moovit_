import React, { useState, useEffect } from "react";
import { Box, Typography, Button } from "@mui/material";
import axios from "axios";

const RecordUrl = "https://api.airtable.com/v0/appvao7Efftfzq9wm/favlist";
const bearerToken =process.env.REACT_APP_BEARER_TOKEN;

const FavoriteExercises = () => {
  const [favoriteExercises, setFavoriteExercises] = useState([]);

  useEffect(() => {
    const fetchFavoriteExercises = async () => {
      try {
        // Fetch favorite exercises from Airtable
        const response = await axios.get(RecordUrl, {
          headers: {
            Authorization: bearerToken,
          },
        });
        setFavoriteExercises(response.data.records);
      } catch (error) {
        console.error("Error fetching favorite exercises:", error);
      }
    };

    fetchFavoriteExercises();
  }, []);

  // Function to handle exercise deletion from the favorite list
  const handleDeleteExercise = async (exerciseId) => {
    try {
      await axios.delete(`${RecordUrl}/${exerciseId}`, {
        headers: {
          Authorization: bearerToken,
        },
      });
      // Filter out the deleted exercise from the favorite list
      setFavoriteExercises((prevExercises) =>
        prevExercises.filter((exercise) => exercise.id !== exerciseId)
      );
      console.log(
        `Exercise with ID ${exerciseId} deleted from the favorite list.`
      );
    } catch (error) {
      console.error(
        `Error deleting exercise with ID ${exerciseId} from the favorite list:`,
        error
      );
    }
  };

  return (
    <Box id="favoritelist">
      <Typography variant="h5">Favorite Exercises</Typography>
      <ul>
        {favoriteExercises.map((exercise) => (
          <li key={exercise.id}>
            <ul>
              <img
                src={exercise.fields.gifUrl}
                alt={exercise.fields.name}
                style={{ width: "100px", height: "auto" }}
              ></img>
              <br />
              Name : {exercise.fields.name}
              <br />
              Target : {exercise.fields.bodyPart}
              <Button
                onClick={() => handleDeleteExercise(exercise.id)}
                style={{ color: "red" }}
              >
                X
              </Button>
            </ul>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FavoriteExercises;
