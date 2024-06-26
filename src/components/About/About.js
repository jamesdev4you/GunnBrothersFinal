import React from 'react';
import Box from '@mui/material/Box';
import NavBar from '../Navbar/Navbar';
import AboutHeader from './aboutHeader/AboutHeader';
import AboutSignUp from './aboutSignUp/AboutSignUp';
import AboutBlogs from './aboutBlogs/AboutBlogs';
import FAQ from '../Home/faq/faq';
import Footer from '../Footer/footer';

const About = () => {
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
        gap: { xl: '7em', lg: '8em', md: '7em', sm: '6em', xs: '6em' },
        position: 'relative',
        paddingTop: { xl: '0px', lg: '0px', md: '0px', sm: '0px', xs: '5em' },
      }}
    >
      <NavBar />
      <AboutHeader />
      <AboutSignUp />
      <AboutBlogs />
      <FAQ />
      <Footer />
    </Box>
  );
};

export default About;
