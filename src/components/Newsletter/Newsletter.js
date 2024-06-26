import React from 'react';
import Box from '@mui/material/Box';
import NavBar from '../Navbar/Navbar';
import NewsletterHeader from './NewsletterHeader/NewsletterHeader';
import RequestServiceNow from '../Home/requestServiceNow/requestServiceNow';
import NewsletterInfo from './NewsletterInfo/NewsletterInfo';
import AboutBlogs from '../About/aboutBlogs/AboutBlogs';
import Footer from '../Footer/footer';

const Newsletter = () => {
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
      <NewsletterHeader />
      <RequestServiceNow />
      <NewsletterInfo />
      <AboutBlogs />
      <Footer />
    </Box>
  );
};

export default Newsletter;
