import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Navbar/Navbar';
import Header from './header/Header';
import RequestServiceNow from './requestServiceNow/requestServiceNow';
import InfoSection from './infoSection/infoSection';
import HowCanWeHelp from './howCanWeHelp/howCanWeHelp';
import FAQ from './faq/faq';
import HomeTestimonials from './testimonials/homeTestimonials';
import Footer from '../Footer/footer';
import Snowflake from '../../assets/pictures/snowflake.png';

const Home = () => {
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
        gap: { xl: '11em', lg: '11em', md: '6em', sm: '3em', sx: '3em' },
        position: 'relative',
      }}
    >
      <Navbar />
      <Header />
      <RequestServiceNow />
      <InfoSection />
      <HowCanWeHelp />
      <FAQ />
      <HomeTestimonials />
      <Footer />
      <Box
        sx={{
          height: { xl: '30vh', lg: '20vh' },
          width: { xl: '12vw', lg: '15vw' },
          backgroundImage: `url(${Snowflake})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          left: { xl: '3%', lg: '0%' },
          bottom: '40%',
          opacity: '.3',
        }}
      />
      <Box
        sx={{
          height: { xl: '30vh', lg: '20vh' },
          width: { xl: '12vw', lg: '15vw' },
          backgroundImage: `url(${Snowflake})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          right: { xl: '5%', lg: '0%' },
          bottom: '30%',
          opacity: '.3',
        }}
      />
      <Box
        sx={{
          height: { xl: '30vh', lg: '20vh' },
          width: { xl: '12vw', lg: '15vw' },
          backgroundImage: `url(${Snowflake})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          left: { xl: '3%', lg: '0%' },
          bottom: '10%',
          opacity: '.3',
        }}
      />
      <Box
        sx={{
          height: { xl: '30vh', lg: '20vh' },
          width: { xl: '12vw', lg: '15vw' },
          backgroundImage: `url(${Snowflake})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          right: { xl: '5%', lg: '0%' },
          bottom: '65%',
          opacity: '.3',
        }}
      />
    </Box>
  );
};

export default Home;
