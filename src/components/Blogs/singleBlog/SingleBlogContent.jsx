/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import imageUrlBuilder from '@sanity/image-url';
import { useNavigate } from 'react-router';
import client from '../../../sanityClient';

const placeholderImageUrl = 'https://placehold.co/600x400';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function SingleBlogContent(props) {
  const navigate = useNavigate();
  return (
    <>
      <Typography
        variant='h5'
        sx={{
          width: {
            xl: '80%',
            lg: '80%',
            md: '80%',
            sm: '90%',
            xs: '95%',
          },
          textAlign: 'center',
          color: 'primary.main',
          fontWeight: 'bold',
          margin: '1em 0em .5em',
        }}
      >
        {props.SingleBlogContent[0]?.categories[0]?.title}
      </Typography>
      <Typography
        variant='h3'
        sx={{
          width: {
            xl: '80%',
            lg: '80%',
            md: '80%',
            sm: '90%',
            xs: '95%',
          },
          textAlign: 'center',
          color: 'primary.main',
          margin: '.1em 0em .6em',
        }}
      >
        {props.SingleBlogContent[0]?.title}
      </Typography>
      <Box
        sx={{
          height: '40vh',
          width: {
            xl: '70%',
            lg: '70%',
            md: '70%',
            sm: '90%',
            xs: '90%',
          },
          // eslint-disable-next-line no-underscore-dangle
          backgroundImage: `url(${
            // eslint-disable-next-line no-underscore-dangle
            props.SingleBlogContent[0]?.mainImage?.asset?._ref
              ? // eslint-disable-next-line max-len, no-underscore-dangle
                urlFor(props.SingleBlogContent[0].mainImage.asset._ref).url() // Ensure this method call is correct based on your imageUrlBuilder setup
              : placeholderImageUrl // Fallback URL or keep as an empty string
          })`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          marginBottom: '2em',
          borderRadius: '10px',
          borderSize: '2px',
          borderStyle: 'solid',
          borderColor: 'info.main',
        }}
      />
      {props.SingleBlogContent[0]?.body?.map((item) => (
        <Box
          sx={{
            width: {
              xl: '70%',
              lg: '70%',
              md: '70%',
              sm: '90%',
              xs: '90%',
            },
          }}
        >
          <Box
            sx={{
              width: '5%',
              maxWidth: '10px',
              height: '1px',
              backgroundColor: 'primary.main',
              marginRight: 'auto',
              marginTop: '.5em',
              marginBottom: '.5em',
            }}
          />
          <Typography
            variant='h6'
            sx={{
              textAlign: 'left',
              color: 'primary.main',
              fontWeight: 'bold',
              marginBottom: '.5em',
            }}
          >
            {item.children[0].text}
          </Typography>
        </Box>
      ))}
      <Box
        sx={{
          height: '1px',
          width: {
            xl: '80%',
            lg: '80%',
            md: '80%',
            sm: '90%',
            xs: '95%',
          },
          backgroundColor: 'white',
          marginBottom: '3em',
          marginTop: '3em',
        }}
      />
      <Typography
        variant='h5'
        sx={{
          width: {
            xl: '70%',
            lg: '70%',
            md: '70%',
            sm: '90%',
            xs: '90%',
          },
          textAlign: 'left',
          color: 'primary.main',
          fontWeight: 'bold',
          marginBottom: '1em',
        }}
      >
        Top Stories!{' '}
      </Typography>
      {props.TopStories.map((item) => (
        <Box
          sx={{
            width: {
              xl: '70%',
              lg: '70%',
              md: '70%',
              sm: '90%',
              xs: '90%',
            },
            height: {
              xl: '55vh',
              lg: '55vh',
              md: '55vh',
              sm: '55vh',
              xs: '55vh',
            },
            marginBottom: '4em',
            borderRadius: '15px',
            flexDirection: 'column',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'center',
            borderSize: '2px',
            borderStyle: 'solid',
            borderColor: 'primary.main',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
            backgroundColor: '#224776',
          }}
        >
          <Box
            sx={{
              height: '85%',
              width: '100%',
              // eslint-disable-next-line no-underscore-dangle
              backgroundImage: `url(${
                // eslint-disable-next-line no-underscore-dangle
                item.mainImage?.asset?._ref
                  ? // eslint-disable-next-line max-len, no-underscore-dangle
                    urlFor(item.mainImage.asset._ref).url() // Ensure this method call is correct based on your imageUrlBuilder setup
                  : placeholderImageUrl // Fallback URL or keep as an empty string
              })`,
              backgroundSize: 'cover',
              backgroundRepeat: 'none',
              backgroundPosition: 'center',
              borderBottomSize: '2px',
              borderBottomStyle: 'solid',
              borderBottomColor: 'primary.main',
              borderTopRightRadius: '15px',
              borderTopLeftRadius: '15px',
            }}
          />
          <Box
            sx={{
              height: '15%',
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              gap: '1em',
              backgroundColor: 'primary.main',
              borderBottomRightRadius: '13px',
              borderBottomLeftRadius: '13px',
            }}
          >
            <Typography
              variant='h6'
              sx={{
                marginLeft: {
                  xl: '1em',
                  lg: '1em',
                  md: '.4em',
                  sm: '1em',
                  xs: '.7em',
                },
                color: 'white',
                fontWeight: 'bold',
                width: '70%',
              }}
            >
              {item.title ? <>{item.title} </> : 'loading...'}
            </Typography>
            <Button
              variant='contained'
              color='secondary'
              sx={{
                marginLeft: 'auto',
                marginRight: '1em',
                width: '150px',
                height: '35px',
                color: 'primary.main',
              }}
              onClick={() => navigate(`/blog/${item.object[1].slug.current}`)}
            >
              Read Today
            </Button>
          </Box>
        </Box>
      ))}
    </>
  );
}

export default SingleBlogContent;
