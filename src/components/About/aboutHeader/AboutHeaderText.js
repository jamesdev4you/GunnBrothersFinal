import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MyNormalButton } from '../../styledComponents';

const AboutHeaderText = () => {
  return (
    <Box
      sx={{
        height: '50%',
        width: '40%',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        flexDirection: 'column',
      }}
    >
      <Typography
        variant='h1'
        sx={{
          fontWeight: 'bold',
          textAlign: { xs: 'center', sm: 'left' },
          width: '100%',
        }}
      >
        We Do Everything In
      </Typography>
      <Typography
        variant='h1'
        sx={{
          fontWeight: 'bold',
          textAlign: { xs: 'center', sm: 'left' },
          width: '100%',
        }}
      >
        HVAC & Insulation
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          textAlign: {
            xl: 'left',
            lg: 'left',
            md: 'left',
            sm: 'center',
            xs: 'center',
          },
          marginTop: '1em',
          marginBottom: '1em',
          fontWeight: 'bold',
          width: '100%',
        }}
      >
        Find your all for one place to gain buzz and traction online! Try out
        Hive's AI features for free today! Try out Hive's AI features for free
        today!
      </Typography>
      <MyNormalButton children='Learn More' />
    </Box>
  );
};

export default AboutHeaderText;
