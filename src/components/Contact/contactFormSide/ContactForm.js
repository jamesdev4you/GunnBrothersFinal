import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ContactForm = () => {
  return (
    <Box
      sx={{
        width: '60%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h1'>Contact Us Today</Typography>
    </Box>
  );
};

export default ContactForm;
