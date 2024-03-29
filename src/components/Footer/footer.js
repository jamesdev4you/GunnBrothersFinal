import React from 'react';
import { Typography, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import '../../index.css';
import '../../navlink.css';

const Footer = () => {


  return (
    <Box sx={{ width: '100%', height: '100%', backgroundColor: 'primary.main' }}>
      <Box
        sx={{
          width: '90%',
          height: 'auto',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'start',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
              color: 'secondary.main'
            }}
            variant='h5'
          >
            {' '}
            Pages{' '}
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Ubuntu',
              color: 'secondary.main'
            }}
          >
            <NavLink to='/' className='nav_link'>
              {' '}
              Home{' '}
            </NavLink>
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Appointment
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/team' className='nav_link'>
              Team
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/gallery' className='nav_link'>
              Gallery
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
              color: 'secondary.main'
            }}
            variant='h5'
          >
            {' '}
            Services{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Hair
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Nails
            </NavLink>{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            {' '}
            <NavLink to='/appointment' className='nav_link'>
              Facials
            </NavLink>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
              color: 'secondary.main'
            }}
            variant='h5'
          >
            {' '}
            Contact{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu' }}>
            <a
              href='tel:7274879698'
              style={{ color: 'white', textDecoration: 'none' }}
            >
              813-813-8131
            </a>
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'secondary.main' }}>
            {' '}
            jamesdev4you@gmail.com
          </Typography>
        </Box>
        <Box
          sx={{
            width: {
              xl: '20%',
              lg: '18%',
              md: '50%',
              sm: '50%',
              xs: '90%',
            },
            height: '90%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
            padding: '30px',
          }}
        >
          <Typography
            sx={{
              fontFamily: 'Birds',
              marginBottom: '20px',
              borderBottom: '1px solid black',
              color: 'secondary.main'
            }}
            variant='h5'
          >
            {' '}
            Hours{' '}
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'secondary.main' }}>
            {' '}
            Mon: 12:00pm - 12:00am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'secondary.main' }}>
            {' '}
            Tues: 12:00pm - 12:00am          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'secondary.main' }}>
            {' '}
            Wed: 12:00pm - 12:00am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'secondary.main' }}>
            {' '}
            Thurs: 12:00pm - 12:00am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'secondary.main' }}>
            {' '}
            Fri: 12:00pm - 12:00am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'secondary.main' }}>
            {' '}
            Sat: 12:00pm - 12:00am
          </Typography>
          <Typography sx={{ fontFamily: 'Ubuntu', color: 'secondary.main' }}>
            {' '}
            Sun: 12:00pm - 12:00am
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;