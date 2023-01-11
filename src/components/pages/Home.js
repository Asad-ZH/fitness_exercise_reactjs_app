import React, {useState} from "react";
import { Box } from "@mui/material";

import HeroBanner from "../HeroBanner";
import Exercises from "../Exercises";
import SearchExercise from "../SearchExercise";

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  const [isLoading, setLoading]  = useState (false)



  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
        setLoading={setLoading}
      />
      <Exercises
        setExercises={setExercises}
        exercises={exercises}
        bodyPart={bodyPart}
        isLoading = {isLoading}
      />
    </Box>
  );
};

export default Home;
