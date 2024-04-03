import React from 'react';
import Box from '@mui/material/Box';
import AboutBlogsText from './AboutBlogsText';
import AboutBlogsGrid from './AboutBlogsGrid';

const AboutBlogs = () => {
  return (
    <Box
      sx={{
        width: { xl: '60%', lg: '80%', md: '90%', sm: '100%', xs: '100%' },
        height: {
          xl: 'auto',
          lg: '80%',
          md: '80%',
          sm: '90%',
          xs: '50%',
        },
        display: 'flex',
        flexDirection: 'column',
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
          xl: '3em',
          lg: '3em',
          md: '1em',
          sm: '2em',
          xs: '2em',
        },
      }}
    >
      <AboutBlogsText />
      <AboutBlogsGrid />
    </Box>
  );
};

export default AboutBlogs;
