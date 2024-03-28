import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Snowflake from '../../../assets/pictures/snowflake.png';
import { MyHoverButton } from '../../styledComponents';

const RequestServiceNow = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '20vh',
        backgroundColor: 'primary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2em',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Snowflake})`,
          width: {
            xl: '200px',
            lg: '250px',
            md: '200px',
            sm: '200px',
            xs: '200px',
          },
          height: {
            xl: '200px',
            lg: '250px',
            md: '200px',
            sm: '200px',
            xs: '200px',
          },
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          borderRadius: {
            xl: '15px',
            lg: '15px',
            md: '15px',
            sm: '0px',
            xs: '0px',
          },
        }}
      />
      <Box
        sx={{
          width: '70%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <Typography
          variant='h1'
          sx={{ color: 'secondary.main', marginBottom: 'auto' }}
        >
          Request Service Today
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: '3em',
          }}
        >
          <MyHoverButton children='Emergency Call' />
          <MyHoverButton children='Price Estimate' />
          <MyHoverButton children='Choose Service' />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${Snowflake})`,
          width: {
            xl: '200px',
            lg: '250px',
            md: '200px',
            sm: '200px',
            xs: '200px',
          },
          height: {
            xl: '200px',
            lg: '250px',
            md: '200px',
            sm: '200px',
            xs: '200px',
          },
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          borderRadius: {
            xl: '15px',
            lg: '15px',
            md: '15px',
            sm: '0px',
            xs: '0px',
          },
        }}
      />
    </Box>
  );
};

export default RequestServiceNow;
