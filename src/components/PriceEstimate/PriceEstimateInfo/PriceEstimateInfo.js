import React from 'react';
import Box from '@mui/material/Box';
import PriceEstimateFxn from '../PriceEstimateImport/PriceEstimateFxn';
import PriceEstimateText from './PriceEstimateText';

const PriceEstimateInfo = () => {
  return (
    <Box
      sx={{
        width: '80%',
        height: 'auto',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'space-around',
      }}
    >
      <PriceEstimateFxn />
      <PriceEstimateText />
    </Box>
  );
};

export default PriceEstimateInfo;
