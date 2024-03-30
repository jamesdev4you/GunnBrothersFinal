import * as React from 'react';
import HeaderText from './HeaderText';
import HeaderImg from './HeaderImg';
import HeaderOptions from './HeaderOptions';
import Box from '@mui/material/Box';

const Header = () => {
  return (
    <Box
      sx={{
        width: { xl: '70%', lg: '100%', md: '100%', sm: '100%', xs: '100%' },
        height: {
          xl: '60vh',
          lg: '28em',
          md: '25em',
          sm: '45em',
          xs: '90vh',
        },
        gap: {
          xl: '0px',
          lg: '0px',
          md: '0px',
          sm: '0px',
          xs: '0px',
        },
        display: 'flex',
        justifyContent: {
          xl: 'start',
          lg: 'start',
          md: 'center',
          sm: 'center',
          xs: 'center',
        },
        alignItems: {
          xl: 'space-between',
          lg: 'space-between',
          md: 'space-between',
          sm: 'center',
          xs: 'center',
        },
        flexDirection: 'column',
        paddingTop: { xs: '0px', sm: '1em', md: '0em' },
      }}
    >
      <Box
        sx={{
          width: { xl: '80%', lg: '80%', md: '90%', sm: '100%', xs: '100%' },
          height: {
            xl: '65vh',
            lg: '80%',
            md: '80%',
            sm: '90%',
            xs: '50%',
          },
          display: 'flex',
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column-reverse',
            xs: 'column-reverse',
          },
          justifyContent: {
            xl: 'space-between',
            lg: 'space-between',
            md: 'space-between',
            sm: 'center',
            xs: 'center',
          },
          alignItems: {
            xl: 'start',
            lg: 'start',
            md: 'start',
            sm: 'center',
            xs: 'center',
          },
          gap: {
            xl: '0em',
            lg: '3em',
            md: '1em',
            sm: '2em',
            xs: '2em',
          },
        }}
      >
        <HeaderText />
        <HeaderImg />
      </Box>
      <HeaderOptions />
    </Box>
  );
};

export default Header;
