import React from "react";
import { Box } from "@mui/material";

import HeroBanner from "../HeroBanner";
import Exercises from "../Exercises";
import SearchExercise from "../SearchExercise";

const Home = () => {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
      />
      <Exercises 
      />
    </Box>
  );
};

export default Home;
