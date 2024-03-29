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
        gap: '6em',
        position: 'relative'
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
          height: {xl: '60vh', lg: '60vh'},
          width: '30%',
          backgroundImage: `url(${Snowflake})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          left: '-20%',
          bottom: '40%',
          opacity: '.2'
        }}
      />
            <Box
        sx={{
          height: {xl: '60vh', lg: '60vh'},
          width: '30%',
          backgroundImage: `url(${Snowflake})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          right: '-20%',
          bottom: '30%',
          opacity: '.2'
        }}
      />
                  <Box
        sx={{
          height: {xl: '60vh', lg: '60vh'},
          width: '30%',
          backgroundImage: `url(${Snowflake})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          left: '-20%',
          bottom: '10%',
          opacity: '.2'
        }}
      />
           <Box
        sx={{
          height: {xl: '60vh', lg: '60vh'},
          width: '30%',
          backgroundImage: `url(${Snowflake})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          right: '-15%',
          bottom: '65%',
          opacity: '.2'
        }}
      />
    </Box>
  );
};

export default Home;
