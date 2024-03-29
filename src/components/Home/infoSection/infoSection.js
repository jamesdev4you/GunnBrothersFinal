import React from 'react';
import Box from '@mui/material/Box';
import InfoImageSection from './infoImageSection';
import InfoTextSection from './infoTextSection';

const InfoSection = () => {
  return (
    <Box
      sx={{
        width: { xl: '80%', lg: '80%', md: '90%', sm: '100%', xs: '100%' },
        height: 'auto',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-between',
      }}
    >
      <InfoImageSection />
      <InfoTextSection />
    </Box>
  );
};

export default InfoSection;
