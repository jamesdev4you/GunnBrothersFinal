/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import imageUrlBuilder from '@sanity/image-url';
import { useNavigate } from 'react-router';
import client from '../../sanityClient';
// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-extraneous-dependencies

const placeholderImageUrl = 'https://placehold.co/600x400';

const builder = imageUrlBuilder(client);

function urlFor(source) {
  return builder.image(source);
}

function BlogSections(props) {
  const navigate = useNavigate();

  return (
    <>
      {props.SectionNavigationMenu.map((item) => (
        <>
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
              backgroundColor: 'primary.main',
              marginBottom: '3em',
              marginTop: '3em',
            }}
          />
          <Typography
            variant='h3'
            ref={item.ref}
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
            }}
          >
            {item.object &&
            item.object[0] &&
            item.object[0].categories[0] &&
            item.object[0].categories[0].title ? (
              <>{item.object[0].categories[0].title} </>
            ) : (
              'loading...'
            )}
          </Typography>
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
              margin: '1em 0em',
            }}
          >
            {item.object &&
            item.object[0] &&
            item.object[0].categories[0] &&
            item.object[0].categories[0].description ? (
              <>{item.object[0].categories[0].description} </>
            ) : (
              'loading...'
            )}
          </Typography>
          <Box
            sx={{
              width: {
                xl: '70%',
                lg: '70%',
                md: '70%',
                sm: '90%',
                xs: '95%',
              },
              height: '55vh',
              marginBottom: '4em',
              borderRadius: '15px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              justifyContent: 'center',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
              backgroundColor: 'white',
              borderSize: '2px',
              borderStyle: 'solid',
              borderColor: 'primary.main',
            }}
          >
            <Box
              sx={{
                height: '85%',
                width: '100%',
                // eslint-disable-next-line no-underscore-dangle
                backgroundImage: `url(${
                  // eslint-disable-next-line no-underscore-dangle
                  item.object[0]?.mainImage?.asset?._ref
                    ? // eslint-disable-next-line max-len, no-underscore-dangle
                      urlFor(item.object[0].mainImage.asset._ref).url() // Ensure this method call is correct based on your imageUrlBuilder setup
                    : placeholderImageUrl // Fallback URL or keep as an empty string
                })`,
                backgroundSize: 'cover',
                backgroundRepeat: 'none',
                backgroundPosition: 'center',
                borderTopRightRadius: '10px',
                borderTopLeftRadius: '10px',
                borderBottomSize: '2px',
                borderBottomStyle: 'solid',
                borderBottomColor: 'primary.main',
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
                  color: 'secondary.main',
                  fontWeight: 'bold',
                  width: '70%',
                }}
              >
                {item.object && item.object[0] && item.object[0].title ? (
                  <>{item.object[0].title} </>
                ) : (
                  'loading...'
                )}
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
                onClick={() => navigate(`/blog/${item.object[0].slug.current}`)}
              >
                Read Today
              </Button>
            </Box>
          </Box>

          <Box
            sx={{
              width: {
                xl: '70%',
                lg: '70%',
                md: '100%',
                sm: '100%',
                xs: '100%',
              },
              height: 'auto',
              paddingTop: '1em',
              display: 'flex',
              flexDirection: {
                xl: 'row',
                lg: 'row',
                md: 'column',
                sm: 'column',
                xs: 'column',
              },
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                width: {
                  xl: '48%',
                  lg: '48%',
                  md: '70%',
                  sm: '90%',
                  xs: '95%',
                },
                height: {
                  xl: '40vh',
                  lg: '40vh',
                  md: '40vh',
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
                backgroundColor: 'primary.main',
              }}
            >
              <Box
                sx={{
                  height: '85%',
                  width: '100%',
                  // eslint-disable-next-line no-underscore-dangle
                  backgroundImage: `url(${
                    // eslint-disable-next-line no-underscore-dangle
                    item.object[1]?.mainImage?.asset?._ref
                      ? // eslint-disable-next-line max-len, no-underscore-dangle
                        urlFor(item.object[1].mainImage.asset._ref).url() // Ensure this method call is correct based on your imageUrlBuilder setup
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
                    color: 'secondary.main',
                    fontWeight: 'bold',
                    width: '70%',
                  }}
                >
                  {item.object && item.object[1] && item.object[1].title ? (
                    <>{item.object[1].title} </>
                  ) : (
                    'loading...'
                  )}
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
                  onClick={() =>
                    navigate(`/blog/${item.object[1].slug.current}`)
                  }
                >
                  Read Today
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                width: {
                  xl: '48%',
                  lg: '48%',
                  md: '70%',
                  sm: '90%',
                  xs: '95%',
                },
                height: {
                  xl: '40vh',
                  lg: '40vh',
                  md: '40vh',
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
                backgroundColor: 'primary.main',
              }}
            >
              <Box
                sx={{
                  height: '85%',
                  width: '100%',
                  // eslint-disable-next-line no-underscore-dangle
                  backgroundImage: `url(${
                    // eslint-disable-next-line no-underscore-dangle
                    item.object[2]?.mainImage?.asset?._ref
                      ? // eslint-disable-next-line max-len, no-underscore-dangle
                        urlFor(item.object[2].mainImage.asset._ref).url() // Ensure this method call is correct based on your imageUrlBuilder setup
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
                  {item.object && item.object[2] && item.object[2].title ? (
                    // eslint-disable-next-line react/jsx-no-useless-fragment
                    <>{item.object[2].title}</>
                  ) : (
                    'loading...'
                  )}
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
                  onClick={() =>
                    navigate(`/blog/${item.object[2].slug.current}`)
                  }
                >
                  Read Today
                </Button>
              </Box>
            </Box>
          </Box>
        </>
      ))}
    </>
  );
}

export default BlogSections;
