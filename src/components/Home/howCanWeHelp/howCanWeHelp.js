import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import HowCanGrid from './howCanGrid';
import HowCanButtons from './howCanButtons';

const HowCanWeHelp = () => {
  return (
    <Box
      sx={{
        width: '60%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        justifyContent: 'space-between',
        gap: '2em',
      }}
    >
      <Typography
        variant='h1'
        sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}
      >
        How Can We Help You?
      </Typography>
      <HowCanGrid />
      <HowCanButtons />
    </Box>
  );
};

export default HowCanWeHelp;
