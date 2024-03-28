import React from 'react';
import Box from '@mui/material/Box';
import Navbar from '../Navbar/Navbar';
import Header from './header/Header';
import RequestServiceNow from './requestServiceNow/requestServiceNow';
import InfoSection from './infoSection/infoSection';
import HowCanWeHelp from './howCanWeHelp/howCanWeHelp';
import FAQ from './faq/faq';

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
      }}
    >
      <Navbar />
      <Header />
      <RequestServiceNow />
      <InfoSection />
      <HowCanWeHelp />
      <FAQ />
    </Box>
  );
};

export default Home;
