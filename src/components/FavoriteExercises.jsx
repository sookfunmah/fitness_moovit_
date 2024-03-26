// import React from 'react'
// import { Box, Typography } from '@mui/material'

// const FavoriteList = (favoriteExercise) => {
//   return (
//     <Box>
//         <Typography variant="h2">
//             Fav Exercises
//         </Typography>

//         {favoriteExercise.length > 0 ? (
//             <ul>
//                 {favoriteExercise.map(exercise => (
//                     <li key={exercise.id}>
//                         <Typography>{exercise.name}</Typography> 
//                     </li>
//                 ))}
//             </ul>
//         ) : (
//             <Typography>No Fav exercise added yet</Typography>
//         )}
//     </Box>
//   )
// }

// export default FavoriteList;



// FavoriteExercises.jsx

import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import postDataToAirtable from "../utils/postDataToAirtable";
import axios from "axios";

const RecordUrl = 'https://api.airtable.com/v0/appvao7Efftfzq9wm/favlist'
const bearerToken = 'Bearer patDcFKAE6lSV2xY9.0138e6e7433458bb2de1e7c120b705cb40aef21b318f87d74bcec8dd11a45020'

const FavoriteExercises = () => {
  const [favoriteExercises, setFavoriteExercises] = useState([]);

  useEffect(() => {
    const fetchFavoriteExercises = async () => {
      try {
        // Fetch favorite exercises from Airtable
        const response = await axios.get(
          RecordUrl,
          {
            headers: {
              Authorization: bearerToken
            }
          }
        );
        setFavoriteExercises(response.data.records);
      } catch (error) {
        console.error("Error fetching favorite exercises:", error);
      }
    };

    fetchFavoriteExercises();
  }, []);

  return (
    <Box>
      <Typography variant="h5">Favorite Exercises</Typography>
      <ul>
        {favoriteExercises.map((exercise) => (
          <li key={exercise.id}>{exercise.fields.name}</li>
        ))}
      </ul>
    </Box>
  );
};

export default FavoriteExercises;



