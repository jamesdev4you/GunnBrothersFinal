/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useNavigate } from 'react-router';
import Logo from '../../../assets/pictures/logoBlack.png';
// eslint-disable-next-line no-unused-vars

function CategoryBlogHeader(props) {
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
          fontWeight: 'bold',
        }}
      >
        {props.HeaderText[0]?.categories[0]?.title}
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
          color: 'primary.main',
          marginBottom: '1em',
        }}
      >
        {props.HeaderText[0]?.categories[0]?.description}
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
          backgroundColor: 'primary.main',
          marginBottom: '3em',
        }}
      />
    </>
  );
}

export default CategoryBlogHeader;
