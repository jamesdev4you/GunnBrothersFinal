import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ContactForm from './ContactForm';

const ContactFormSide = () => {
  return (
    <Box
      sx={{
        width: '40%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'center',
      }}
    >
      <Typography variant='h1' sx={{ fontWeight: 'bold', textAlign: 'left' }}>
        Contact Us Today
      </Typography>
      <Typography
        variant='h2'
        sx={{ marginBottom: '.5em', fontWeight: 'bold', textAlign: 'left' }}
      >
        And We’ll See You Tomorrow
      </Typography>
      <Typography variant='h5' sx={{ width: '90%', marginBottom: '.3em' }}>
        lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem
        lorem lorem ipsum lorem{' '}
      </Typography>
      <ContactForm />
    </Box>
  );
};

export default ContactFormSide;
