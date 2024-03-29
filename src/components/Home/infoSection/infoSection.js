import React from 'react';
import Box from '@mui/material/Box';
import InfoImageSection from './infoImageSection';
import InfoTextSection from './infoTextSection';

const InfoSection = () => {
  return (
    <Box
      sx={{
        width: { xl: '80%', lg: '80%', md: '90%', sm: '80%', xs: '90%' },
        height: 'auto',
        flexDirection: {xl: 'row', lg: 'row', md: 'row', sm: 'column', xs: 'column'},
        display: 'flex',
        alignItems: {xl: 'start', lg: 'start', md: 'start', sm: 'center', xs: 'center'},
        justifyContent: {xl: 'space-between', lg: 'space-between', md: 'space-between', sm: 'start', xs: 'start'},
        gap: {xl: '0em', lg: '0em', md: '0em', sm: '9em', xs: '9em'},
      }}
    >
      <InfoImageSection />
      <InfoTextSection />
    </Box>
  );
};

export default InfoSection;
