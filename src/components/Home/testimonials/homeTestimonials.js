import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as LeftArrow } from '../../../assets/svg/left-arrow.svg';
import { ReactComponent as RightArrow } from '../../../assets/svg/right-arrow.svg';
import { MyHoverButton } from '../../styledComponents';
import Technician from '../../../assets/pictures/technican.jpg';
import Snowflake from '../../../assets/pictures/snowflake.png';


const HomeTestimonials = () => {
  return (
    <Box
    sx={{
      width: { xl: '80%', lg: '80%', md: '90%', sm: '80%', xs: '100%' },
      height: { xl: '60vh', lg: '60vh', md: '60vh', sm: 'auto', xs: 'auto' },
      display: 'flex',
      flexDirection: { xl: 'row', lg: 'row', md: 'row', sm: 'column', xs: 'column' },
      backgroundColor: 'primary.main',
      borderBottomLeftRadius: '80px',
      borderBottomRightRadius: { xl: '0px', lg: '0px', md: '0px', sm: '80px', xs: '80px' },
      position: 'relative',
    }}
  >
            <Box
        sx={{
          height: {xl: '60vh', lg: '40vh', md: '40vh', sm: '40vh'},
          width: '100%',
          backgroundImage: `url(${Technician})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          display: {xl: 'none', lg: 'none', md: 'none', sm: 'flex', xs: 'flex'},
        }}
      />
    <Box sx={{margin: '3em', gap: '1em', display: 'flex', flexDirection: 'column', alignItems: 'start', justifyContent: 'center', width: '50%'}}>
        <Typography variant='h2' sx={{color: 'secondary.main'}}>
            Testimonials
        </Typography>
        <Typography variant='p' sx={{color: 'secondary.main'}}>
        Our Comfort Specialists are available to help, no matter the time of day. If you're in need of emergency services, we've got you covered 24/7.
        </Typography>
        <Typography variant='p' sx={{color: 'secondary.main'}}>
        “Bottom line up front: I came away impressed by both the company and assigned technician. It’s refreshing to have a company do exactly what was promised and do it in a timely fashion. As for the ...”
        </Typography>
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '.5em'}}>
        <SvgIcon
              viewBox='0 0 25 25'
              component={LeftArrow}
              sx={{
                transition: 'all .2s ease-in-out',
                height: {
                  xs: '30px',
                  sm: '60px',
                  md: '40px',
                  lg: '35px',
                  xl: '35px',
                },
                color: 'white',
                width: {
                  xs: '30px',
                  sm: '60px',
                  md: '40px',
                  lg: '35px',
                  xl: '35px',
                },

              }}
          />
          <Typography variant='p' sx={{color: 'white'}}>
            <sup>1</sup>&frasl;<sub>5</sub>
          </Typography>
          <SvgIcon
              viewBox='0 0 25 25'
              component={RightArrow}
              sx={{
                transition: 'all .2s ease-in-out',
                height: {
                  xs: '30px',
                  sm: '60px',
                  md: '40px',
                  lg: '35px',
                  xl: '35px',
                },
                color: 'white',
                width: {
                  xs: '30px',
                  sm: '60px',
                  md: '40px',
                  lg: '35px',
                  xl: '35px',
                },

              }}
          />
        </Box>
        <MyHoverButton children='Emergency Call' />
        <Box
        sx={{
          height: {xl: '60vh', lg: '40vh', md: '40vh', sm: '40vh'},
          width: '35%',
          backgroundImage: `url(${Technician})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          right: '10px',
          bottom: '-20px',
          display: {xl: 'flex', lg: 'flex', md: 'flex', sm: 'none', xs: 'none'},
        }}
      />
      <Box
        sx={{
          height: {xl: '60vh', lg: '40vh', md: '40vh', sm: '40vh'},
          width: '30%',
          backgroundImage: `url(${Snowflake})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'absolute',
          left: '30%',
          bottom: '20%',
          opacity: '.2'
        }}
      />
    </Box>
    </Box>
  )
}

export default HomeTestimonials