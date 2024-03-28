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
        width: '60%',
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
