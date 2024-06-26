import React from 'react';
import Box from '@mui/material/Box';
import NavBar from '../Navbar/Navbar';
import ContactFormSide from './contactFormSide/ContactFormSide';
import ContactInfo from './contactInfo/ContactInfo';
import Footer from '../Footer/footer';

const Contact = () => {
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
      <Box
        sx={{
          width: '90%',
          height: 'auto',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-around',
        }}
      >
        <ContactInfo />
        <ContactFormSide />
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
