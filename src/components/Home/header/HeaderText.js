import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { MyNormalButton } from '../../styledComponents';

const HeaderText = () => {
  return (
    <Box
      sx={{
        width: { xl: '50%', lg: '50%', md: '60%', sm: '90%', xs: '100%' },
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: {
          xl: 'start',
          lg: 'start',
          md: 'start',
          sm: 'center',
          xs: 'center',
        },
        justifyContent: 'start',
      }}
    >
      <Typography
        variant='h1'
        sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'none' } }}
      >
        The Gunn Brothers
      </Typography>
      <Typography
        variant='h2'
        sx={{ fontWeight: 'bold', textAlign: { xs: 'center', sm: 'none' } }}
      >
        of Tampa Bay
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          textAlign: {
            xl: 'left',
            lg: 'left',
            md: 'left',
            sm: 'center',
            xs: 'center',
          },
          marginTop: '1em',
          marginBottom: '1em',
          fontWeight: 'bold',
        }}
      >
        Find your all for one place to gain buzz and traction online! Try out
        Hive's AI features for free today!
      </Typography>
      <Box
        sx={{
          display: {
            xl: 'flex',
            lg: 'flex',
            md: 'flex',
            sm: 'none',
            xs: 'none',
          },
          width: '100%',
          justifyContent: 'space-between',
        }}
      >
        <MyNormalButton children='Learn More' />
        <MyNormalButton children='Request Service' />
      </Box>
      <Box
        sx={{
          display: {
            xl: 'none',
            lg: 'none',
            md: 'none',
            sm: 'flex',
            xs: 'flex',
          },
          width: '100%',
          justifyContent: {
            xl: 'start',
            lg: 'start',
            md: 'start',
            sm: 'center',
            xs: 'center',
          },
        }}
      >
        <MyNormalButton children='Learn More' />
      </Box>
    </Box>
  );
};

export default HeaderText;
