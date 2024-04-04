import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Technician from '../../../assets/pictures/technican.jpg';

const ContactInfo = () => {
  return (
    <Box
      sx={{
        width: '35%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Technician})`,
          width: {
            xl: '100%',
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
          marginBottom: '1em',
        }}
      />
      <Typography
        variant='h2'
        sx={{ fontWeight: 'bold', marginBottom: '.3em' }}
      >
        What We'll Help With
      </Typography>
      <Typography variant='h5' sx={{ marginBottom: '.3em' }}>
        lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem
        lorem lorem ipsum lorem{' '}
      </Typography>
      <Typography variant='h5' sx={{ marginBottom: '.1em' }}>
        ● lorem ipsum
      </Typography>
      <Typography variant='h5' sx={{ marginBottom: '.1em' }}>
        ● lorem ipsum
      </Typography>
      <Typography variant='h5' sx={{ marginBottom: '.1em' }}>
        ● lorem ipsum
      </Typography>
      <Typography variant='h5' sx={{ marginBottom: '.1em' }}>
        ● lorem ipsum
      </Typography>
    </Box>
  );
};

export default ContactInfo;
