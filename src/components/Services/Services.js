import React from 'react';
import Box from '@mui/material/Box';
import NavBar from '../Navbar/Navbar';
import ServicesHeader from './ServicesHeader/ServicesHeader';
import RequestServiceNow from '../Home/requestServiceNow/requestServiceNow';
import ServicesInfo from './ServicesInfo/ServicesInfo';
import HowCanWeHelp from '../Home/howCanWeHelp/howCanWeHelp';
import Footer from '../Footer/footer';

const Services = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        backgroundColor: 'secondary.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: { xl: '11em', lg: '8em', md: '7em', sm: '6em', xs: '6em' },
        position: 'relative',
        paddingTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '5em' },
      }}
    >
      <NavBar />
      <ServicesHeader />
      <RequestServiceNow />
      <ServicesInfo />
      <HowCanWeHelp />
      <Footer />
    </Box>
  );
};

export default Services;
