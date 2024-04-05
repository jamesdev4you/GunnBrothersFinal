import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PriceEstimateText = () => {
  return (
    <Box
      sx={{
        width: { xl: '50%', lg: '50%', md: '50%', sm: '80%' },
        height: 'auto',
        display: 'flex',
      }}
    >
      <Box
        sx={{
          width: '90%',
          height: 'auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5em',
        }}
      >
        <Typography
          variant='h2'
          sx={{ textAlign: 'left', width: '100%', fontWeight: 'bold' }}
        >
          How Our Price Estimator Works
        </Typography>
        <Typography variant='h6' sx={{ textAlign: 'left', width: '100%' }}>
          At One Hour Air Conditioning & Heating® of Tampa, we give you more
          than promises. We back up our heating and AC repair services with a
          100% satisfaction guarantee. Our HVAC repair services team adheres to
          a strict code of ethics. This includes providing a high level of
          service, treating customers with honesty and respect, and offering
          fair pricing. Proudly serving and surrounding areas of Tampa Bay!
        </Typography>
        <Typography variant='h6' sx={{ textAlign: 'left', width: '100%' }}>
          Our Tampa HVAC company will always be respectful of your time, which
          is why we guarantee on-time arrivals: “Always On Time...Or You Don’t
          Pay A Dime!”®. Do you need help with AC repair, heating installations,
          or indoor air quality? Our Tampa HVAC repair team is ready to help you
          regain the comfort of your home.
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '8em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'black',
            border: '3px solid #B8DBD9',
            borderBottomRightRadius: '60px',
            paddingBottom: '15px',
          }}
        >
          <Typography
            variant='h6'
            sx={{
              color: 'secondary.main',
              marginTop: '5px',
              width: '80%',
              fontWeight: 'bold',
            }}
          >
            Call our emergency service hotline for instant service at
            813-813-8131
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            borderBottom: '2px solid #D9D9D9',
            display: 'flex',
          }}
        >
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            {' '}
            Continue Reading
          </Typography>
          <Typography
            variant='h5'
            sx={{ fontWeight: 'bold', marginLeft: 'auto' }}
          >
            {' '}
            +
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PriceEstimateText;
