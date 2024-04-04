import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import client from '../../sanityClient';
import Box from '@mui/material/Box';
import NavBar from '../Navbar/Navbar';
import ServicesHeader from '../Services/ServicesHeader/ServicesHeader';
import RequestServiceNow from '../Home/requestServiceNow/requestServiceNow';
import ServicesInfo from '../Services/ServicesInfo/ServicesInfo';
import HowCanWeHelp from '../Home/howCanWeHelp/howCanWeHelp';
import Footer from '../Footer/footer';

const ServicesCategoty = () => {
  const { slug } = useParams();

  const [singleCategory, setSingleCategory] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const singleCategory = `*[_type == "services" && slug.current == "thermostat"] {headerTitle, headerDesc, headerImage, slug, body}`;

      Promise.all([
        client.fetch(singleCategory),
        // eslint-disable-next-line max-len
      ])
        .then(([singleCategoryData]) => {
          setSingleCategory(singleCategoryData);
        })
        .catch((error) => console.error(error));
    };

    fetchPosts(singleCategory);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slug]);

  console.log('yo', singleCategory);

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

export default ServicesCategoty;
