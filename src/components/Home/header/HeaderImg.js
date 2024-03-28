import React from 'react'
import Box from '@mui/material/Box';
import Technician from '../../../assets/pictures/tech.png';

const HeaderImg = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xl: '40%', lg: '800px', md: '800px', sm: '90%', xs: '100%' },
        height: {
          xl: '350px',
          lg: '250px',
          md: '200px',
          sm: '200px',
          xs: '200px',
        },
        backgroundColor: {
          xl: 'none',
          lg: 'none',
          md: 'none',
          sm: 'none',
          xs: 'none',
        },
        borderRadius: '15px',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Technician})`,
          width: {
            xl: '350px',
            lg: '250px',
            md: '200px',
            sm: '200px',
            xs: '200px',
          },
          height: {
            xl: '350px',
            lg: '250px',
            md: '200px',
            sm: '200px',
            xs: '200px',
          },
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          borderRadius: {
            xl: '15px',
            lg: '15px',
            md: '15px',
            sm: '0px',
            xs: '0px',
          },


        }}
      />
    </Box>
  )
}

export default HeaderImg