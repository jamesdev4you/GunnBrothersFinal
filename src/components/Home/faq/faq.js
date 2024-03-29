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
        width: { xl: '80%', lg: '70%', md: '90%', sm: '80%', xs: '90%' },
        marginTop: { xl: '0px', lg: '0px', md: '0px', sm: '2em', xs: '2em' },
      }}
    >
      <Typography variant='h1' sx={{ fontWeight: 'bold', textAlign: 'center' }}>
        Frequently Asked Questions
      </Typography>
      <FAQGrid />
    </Box>
  );
};

export default FAQ;
