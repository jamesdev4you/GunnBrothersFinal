import React from 'react';
import Box from '@mui/material/Box';
import NewsletterCTA from './NewsletterCTA';
import ContactCTA from './ContactCTA';

const ServicesCTA = () => {
  return (
    <Box
      sx={{
        width: '30%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        gap: '1em',
      }}
    >
      <NewsletterCTA />
      <ContactCTA />
    </Box>
  );
};

export default ServicesCTA;
