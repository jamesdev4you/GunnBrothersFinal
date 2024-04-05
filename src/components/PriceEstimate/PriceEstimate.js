import React from 'react';
import Box from '@mui/material/Box';
import NavBar from '../Navbar/Navbar';
import PriceEstimateInfo from './PriceEstimateInfo/PriceEstimateInfo';
import AboutHeader from '../About/aboutHeader/AboutHeader';
import AboutSignUp from '../About/aboutSignUp/AboutSignUp';
import Footer from '../Footer/footer';

const PriceEstimate = () => {
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
      <AboutHeader />
      <AboutSignUp />
      <PriceEstimateInfo />
      <Footer />
    </Box>
  );
};

export default PriceEstimate;
