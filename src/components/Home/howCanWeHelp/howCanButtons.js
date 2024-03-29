import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { MyHoverButton } from '../../styledComponents';

const HowCanButtons = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '8em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'black',
        border: '3px solid #B8DBD9',
        borderBottomRightRadius: '60px',
        paddingBottom: '15px',
      }}
    >
      <MyHoverButton children='Request Appointment' />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant='h3'
          sx={{ color: 'secondary.main', fontWeight: 'bold' }}
        >
          Emergency?
        </Typography>
        <Typography variant='h6' sx={{ color: 'secondary.main' }}>
          813-813-8131
        </Typography>
      </Box>
    </Box>
  );
};

export default HowCanButtons;
