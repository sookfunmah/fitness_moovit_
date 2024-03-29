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
    <Box id="favlist">
      <Typography variant="h4" sx={{margin:'20px' ,color : '#392A48'}}>Favorite Exercises</Typography>
      <ul style={{marginLeft:'100px',marginBottom:'100px',display:'grid', gridTemplateColumns: "repeat(2, 1fr)", listStyleType: "none", gap:'100px',justifyContent:"center"}}>
        {favoriteExercises.map((exercise) => (
          <li key={exercise.id}>

            <ul style={{ listStyleType: "none", marginBottom:'20px', display: 'flex',flexDirection: 'column',alignItems: 'center',textAlign: 'center',}}>
              <img
                src={exercise.fields.gifUrl}
                alt={exercise.fields.name}
                style={{ width: "180px", height: "auto" }}
              >
              </img>
              <br />
              <Typography variant="h7" sx={{color:'#4E387E',fontWeight:'bold', textTransform:"capitalize"}}> {exercise.fields.name}</Typography>
             <br/>
              <Typography variant="h7" sx={{color:'#4E387E',textTransform:"capitalize",textAlign:"center"}}>Target : {exercise.fields.bodyPart}</Typography>
              
              <br/>

              <Button
                onClick={() => handleDeleteExercise(exercise.id)}
                style={{
                  margin: "5px",
                  color: "red",
                  background: "#d7d1de",
                  fontSize: "14px",
                  borderRadius: "20%",
                  padding: "2px 50px",
                  textTransform: "capitalize",
                  textDecoration: "none", 
                  fontWeight:'bold'
                }}
                // style={{ color: "red" , fontSize:'20px', fontWeight:'bold' ,marginLeft:'20px'}}
              >
                REMOVE
              </Button>
            
            </ul>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FavoriteExercises;
