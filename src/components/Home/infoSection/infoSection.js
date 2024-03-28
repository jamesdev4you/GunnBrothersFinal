import React from 'react';
import Box from '@mui/material/Box';
import InfoImageSection from './infoImageSection';
import InfoTextSection from './infoTextSection';

const InfoSection = () => {
  return (
    <Box
      sx={{
        width: '60%',
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
