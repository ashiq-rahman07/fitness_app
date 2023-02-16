import { Box, Button, Typography } from '@mui/material'
import { display, padding } from '@mui/system'
import React from 'react'
import HeroBannerImg from '../assets/images/banner.png'

const HeroBanner = () => {
  return (
    <Box sx={{
       mt:{lg: '212px', xs: '70px'},
       ml:{sm: '50px'} 
    }}
    position="relative"
    p="20px"
    >
        <Typography color="#FF2625"
            fontWeight="600" fontSize="26px"
        >
            Fitness Club
        </Typography>
        <Typography fontWeight={700} 
            sx={{
                fontSize: {lg: '44px', xs: '40px'}
            }}
            mb="23px"
            mt="30px"
        >
            Sweet, Smile <br /> and Repeat
        </Typography>
        <Typography fontSize='22px' lineHeight='35px' mb={4}>
            Cheack out the most effective exercise
        </Typography>
        <Button variant='contained'
            color='error'
            href='#excercises'
            sx={{
                backgroundColor: '#ff2625',
                padding: '10px'
            }}
         >Explore Exercise</Button>
        <Typography
            fontWeight={600}
            color="#ff2625"
            fontSize="200px"
            sx={{
                opacity: 0.1,
                display: { lg: 'block', xs: 'none'}
            }}
        >
            Excercise
        </Typography>
         <img src={HeroBannerImg} alt="banner"
            className='hero-banner-img' 
         />
    </Box>
  )
}

export default HeroBanner