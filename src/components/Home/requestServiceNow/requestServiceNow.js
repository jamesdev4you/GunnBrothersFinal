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
        height: { xl: '22vh', lg: '22vh', md: '18vh' },
        backgroundColor: 'primary.main',
        display: { xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none' },
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: '2em',
        paddingBottom: '2em',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Snowflake})`,
          width: {
            xl: '200px',
            lg: '150px',
            md: '100px',
            sm: '200px',
            xs: '200px',
          },
          height: {
            xl: '200px',
            lg: '150px',
            md: '100px',
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
          variant='h3'
          sx={{ color: 'secondary.main', marginBottom: 'auto' }}
        >
          Request Service Today
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: {
              xl: 'flex',
              lg: 'flex',
              md: 'none',
              sm: 'none',
              xs: 'none',
            },
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: { xl: '1.5em', lg: '0em' },
          }}
        >
          <MyHoverButton children='Emergency Call' />
          <MyHoverButton children='Price Estimate' />
          <MyHoverButton children='Choose Service' />
        </Box>
        <Box
          sx={{
            width: '100%',
            height: 'auto',
            display: {
              xl: 'none',
              lg: 'none',
              md: 'flex',
              sm: 'none',
              xs: 'none',
            },
            alignItems: 'center',
            justifyContent: 'space-around',
            marginBottom: { xl: '3em', lg: '0em' },
          }}
        >
          <MyHoverButton children='Call Today' />
        </Box>
      </Box>
      <Box
        sx={{
          backgroundImage: `url(${Snowflake})`,
          width: {
            xl: '200px',
            lg: '150px',
            md: '100px',
            sm: '200px',
            xs: '200px',
          },
          height: {
            xl: '200px',
            lg: '150px',
            md: '100px',
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
