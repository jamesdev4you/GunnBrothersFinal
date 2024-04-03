import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from '../Navbar/Navbar';
import FAQGrid from '../Home/faq/faqgrid';
import Footer from '../Footer/footer';

const FAQ = () => {
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
      <Box
        sx={{
          width: '70%',
          backgroundColor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '5em',
        }}
      >
        <Typography
          variant='h1'
          sx={{
            fontWeight: 'bold',
            textAlign: 'center',
            width: '100%',
          }}
        >
          Frequently Asked Questions
        </Typography>
      </Box>

      <Box
        sx={{
          width: '70%',
          backgroundColor: 'secondary.main',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <FAQGrid />
      </Box>
      <Footer />
    </Box>
  );
};

export default FAQ;
