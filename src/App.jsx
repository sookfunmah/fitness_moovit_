import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";

import "./App.css";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Exercises from "./components/Exercises";
import FavoriteExercises from "./components/FavoriteExercises";

const App = () => (

  <Box sx={{backgroundColor:'white', minHeight:'10vh'}}>


<Navbar />
    
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto" >
 

    <Routes>
     
      <Route path="/" element={<Home />} />
      <Route path="/exercise/:id" element={<ExerciseDetail />} />
      <Route path="/favlist" element={<FavoriteExercises/>} />
     
    </Routes>
    
    
  </Box>
  </Box>
);


export default App;
