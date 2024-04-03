/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import Logo from '../../../assets/pictures/logoBlack.png';
// eslint-disable-next-line no-unused-vars

function SingleBlogHeader() {
  const navigate = useNavigate();

  return (
    <>
      <CardMedia
        component='img'
        src={Logo}
        sx={{
          width: {
            xl: '250px',
            lg: '250px',
            md: '250px',
            sm: 'none',
            xs: 'none',
          },
          height: {
            xl: '250px',
            lg: '250px',
            md: '250px',
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
          marginBottom: '1em',
        }}
      >
        Learn everything about unlocking phones.
      </Typography>
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
          marginBottom: '1em',
          marginTop: '1em',
        }}
      />
    </>
  );
}

export default SingleBlogHeader;
