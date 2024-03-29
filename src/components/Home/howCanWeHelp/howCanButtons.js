import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MyHoverButton } from '../../styledComponents';

const HowCanButtons = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '12vh',
        display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' },
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        border: '3px solid #B8DBD9',
        borderBottomRightRadius: '60px',
      }}
    >
      <MyHoverButton children='Request Appointment' />
      <Box
        sx={{
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h3'
          sx={{
            color: 'secondary.main',
            fontWeight: 'bold',
            textAlign: 'center',
          }}
        >
          Emergency?
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: 'secondary.main', textAlign: 'center' }}
        >
          813-813-8131
        </Typography>
      </Box>
    </Box>
  );
};

export default HowCanButtons;
