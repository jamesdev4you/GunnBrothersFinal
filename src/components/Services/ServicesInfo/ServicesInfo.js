import React from 'react';
import Box from '@mui/material/Box';
import ServicesTextInfo from './ServicesTextInfo';
import ServicesCTA from './ServicesCTA.js/ServicesCTA';

const ServicesInfo = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        width: '70%',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
      }}
    >
      <ServicesTextInfo />
      <ServicesCTA />
    </Box>
  );
};

export default ServicesInfo;
