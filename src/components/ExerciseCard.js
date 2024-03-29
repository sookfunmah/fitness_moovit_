import React from "react";
import { Link } from "react-router-dom";
import { Button,Stack,Typography } from "@mui/material";



const ExerciseCard = ({ exercise }) => {
  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />






<Stack direction="row">
        <button
          component="span" 
          style={{
            marginLeft: "21px",
            color: "#fff",
            background: "#392A48",
            fontSize: "14px",
            borderRadius: "20px",
            padding: "6px 12px",
            textTransform: "capitalize",
            textDecoration: "none", 
          }}
        >
          {exercise.bodyPart}
        </button>
        <button
          component="span" 
          style={{
            marginLeft: "21px",
            color: "#fff",
            background: "#3E2F84",
            fontSize: "14px",
            borderRadius: "20px",
            padding: "6px 12px",
            textTransform: "capitalize",
            textDecoration: "none", 
          }}
        >
          {exercise.target}
        </button>

        <Typography
          component="span" 
          sx={{
            marginLeft: "21px",
            color: "#000",
            fontWeight: "bold",
            fontSize: "20px",
            textTransform: "capitalize",
            marginTop: "11px",
            textDecoration: "none", 
          }}
        >
          {exercise.name}
        </Typography>
      </Stack>




    </Link>
  );
};

export default ExerciseCard;
