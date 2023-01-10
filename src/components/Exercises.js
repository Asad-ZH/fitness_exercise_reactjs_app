import React, { useEffect, useState } from "react";
import Pagination from "@mui/material/Pagination";
import { Box, Stack, Typography } from "@mui/material";

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from "./ExerciseCard";
// import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/${bodyPart}`, exerciseOptions);
      }
      console.log("exercisesData" + exercisesData);
      setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);



  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      > 
      {console.log("jp;a" + exercises)}
        {exercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}

      </Stack>
    </Box>
  );
};

export default Exercises;
