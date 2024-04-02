import React from 'react';
import Box from '@mui/material/Box';
import AboutHeaderText from './AboutHeaderText';
import AboutHeaderPic from './AboutHeaderPic';

const AboutHeader = () => {
  return (
    <Box
      sx={{
        width: { xl: '70%', lg: '80%', md: '90%', sm: '100%', xs: '100%' },
        height: {
          xl: '65vh',
          lg: '80%',
          md: '80%',
          sm: '90%',
          xs: '50%',
        },
        display: 'flex',
        flexDirection: {
          xl: 'row',
          lg: 'row',
          md: 'row',
          sm: 'column-reverse',
          xs: 'column-reverse',
        },
        justifyContent: {
          xl: 'space-between',
          lg: 'space-between',
          md: 'space-between',
          sm: 'center',
          xs: 'center',
        },
        alignItems: {
          xl: 'center',
          lg: 'start',
          md: 'start',
          sm: 'center',
          xs: 'center',
        },
        gap: {
          xl: '0em',
          lg: '3em',
          md: '1em',
          sm: '2em',
          xs: '2em',
        },
      }}
    >
      <AboutHeaderText />
      <AboutHeaderPic />
    </Box>
  );
};

export default AboutHeader;
