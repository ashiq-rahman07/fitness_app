import { Box } from '@mui/material'
import React from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SeachExercises from '../components/SeachExercises'

const Home = () => {
  return (
    <Box>
      <HeroBanner/>
      <SeachExercises/>
      <Exercises/>
    </Box>
  )
}

export default Home