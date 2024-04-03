/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Carousel from 'react-material-ui-carousel';
// eslint-disable-next-line import/no-extraneous-dependencies
import imageUrlBuilder from '@sanity/image-url';
import { useNavigate } from 'react-router';
import Logo from '../../assets/pictures/logoBlack.png';
// eslint-disable-next-line no-unused-vars
import client from '../../sanityClient';

const placeholderImageUrl = 'https://placehold.co/600x400';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function BlogHeader(props) {
  const navigate = useNavigate();
  return (
    <>
      <CardMedia
        component='img'
        src={Logo}
        sx={{
          width: {
            xl: '200px',
            lg: '200px',
            md: '200px',
            sm: 'none',
            xs: 'none',
          },
          height: {
            xl: '200px',
            lg: '200px',
            md: '200px',
            sm: 'none',
            xs: 'none',
          },
          display: {
            xl: 'flex',
            lg: 'flex',
            md: 'flex',
            sm: 'none',
            xs: 'none',
          },
          '&:hover': {
            cursor: 'pointer',
          },
        }}
        onClick={() => navigate('/blog')}
      />
      <Typography
        variant='h2'
        sx={{
          width: {
            xl: '80%',
            lg: '80%',
            md: '80%',
            sm: '90%',
            xs: '95%',
          },
          textAlign: 'center',
          color: 'white',
          fontWeight: 'bold',
        }}
      >
        <span style={{ color: '#ffbe0aff' }}>Des</span>
        Blogs
      </Typography>
      <Typography
        variant='h4'
        sx={{
          width: {
            xl: '80%',
            lg: '80%',
            md: '80%',
            sm: '90%',
            xs: '95%',
          },
          textAlign: 'center',
          color: 'white',
          marginBottom: '.5em',
        }}
      >
        Learn everything about unlocking phones.
      </Typography>
      <Carousel
        animation='slide'
        indicators
        timeout={500}
        navButtonsAlwaysVisible
        fullHeightHover={false}
        sx={{
          width: {
            xl: '70%',
            lg: '70%',
            md: '70%',
            sm: '90%',
            xs: '95%',
          },
          flexGrow: 1,
          margin: 'auto',
          mt: 5,
          borderRadius: '10px',
        }}
      >
        {props.HeaderCarouselItems.map((item) => (
          <Box
            sx={{
              position: 'relative',
              // eslint-disable-next-line no-underscore-dangle
              backgroundImage: `url(${
                // eslint-disable-next-line no-underscore-dangle
                item?.mainImage?.asset?._ref
                  ? // eslint-disable-next-line max-len, no-underscore-dangle
                    urlFor(item.mainImage.asset._ref).url() // Ensure this method call is correct based on your imageUrlBuilder setup
                  : placeholderImageUrl // Fallback URL or keep as an empty string
              })`,
              backgroundSize: 'cover',
              backgroundRepeat: 'none',
              backgroundPosition: 'center',
              color: '#fff',
              justifyContent: 'center',
              alignItems: 'center',
              height: '55vh',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '10px',
              border: '2px solid white',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              p: 4,
            }}
            elevation={10}
          >
            <Box
              sx={{
                backgroundColor: '#224675ff',
                borderRadius: '15px',
                border: '3px solid #ffbe0aff',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '30%',
                width: {
                  xl: 'auto',
                  lg: 'auto',
                  md: 'auto',
                  sm: '80%',
                  xs: '80%',
                },
                padding: '1em',
              }}
            >
              <Typography
                variant='h5'
                sx={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}
              >
                {item.title ?? 'Loading...'}
              </Typography>
              <Button
                variant='contained'
                color='secondary'
                sx={{ mt: 2, alignSelf: 'center' }}
                onClick={() => navigate(`/blog/${item.slug.current}`)}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        ))}
      </Carousel>
    </>
  );
}

export default BlogHeader;
