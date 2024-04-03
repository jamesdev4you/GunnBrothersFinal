import React from 'react';
import Box from '@mui/material/Box';
import NewsletterInfoText from './NewsletterInfoText';
import NewsletterInfoPic from './NewsletterInfoPic';

const NewsletterInfo = () => {
  return (
    <Box
      sx={{
        width: { xl: '70%', lg: '80%', md: '90%', sm: '100%', xs: '100%' },
        height: {
          xl: '60vh',
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
          xl: 'start',
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
      <NewsletterInfoPic />
      <NewsletterInfoText />
    </Box>
  );
};

export default NewsletterInfo;
