import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FAQGrid from './faqgrid';

const FAQ = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '3em',
        width: { xl: '80%', lg: '80%', md: '90%', sm: '100%', xs: '100%' },
      }}
    >
      <Typography variant='h1' sx={{ fontWeight: 'bold' }}>
        Frequently Asked Questions
      </Typography>
      <FAQGrid />
    </Box>
  );
};

export default FAQ;
