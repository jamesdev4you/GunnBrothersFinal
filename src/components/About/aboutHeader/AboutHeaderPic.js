import React from 'react';
import Box from '@mui/material/Box';
import Laptop from '../../../assets/pictures/laptop.png';

const AboutHeaderPic = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: { xl: '50%', lg: 'auto', md: 'auto', sm: '90%', xs: '100%' },
        height: {
          xl: '50%',
          lg: 'auto',
          md: 'auto',
          sm: 'auto',
          xs: 'auto',
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
          backgroundImage: `url(${Laptop})`,
          width: {
            xl: '600px',
            lg: '250px',
            md: '200px',
            sm: '200px',
            xs: '200px',
          },
          height: {
            xl: '600px',
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
  );
};

export default AboutHeaderPic;
