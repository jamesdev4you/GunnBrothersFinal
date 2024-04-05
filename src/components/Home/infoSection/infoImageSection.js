import React from 'react';
import Box from '@mui/material/Box';
import Technician from '../../../assets/pictures/technican.jpg';
import { Typography } from '@mui/material';
import { MyHoverButton } from '../../styledComponents';

const InfoImageSection = () => {
  return (
    <>
      <Box
        sx={{
          height: {
            xl: '60vh',
            lg: '60vh',
            md: '50vh',
            sm: '70vh',
            xs: '70vh',
          },
          width: { xl: '40%', lg: '40%', md: '45%', sm: '80%', xs: '100%' },
          boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
          backgroundImage: `url(${Technician})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            width: '90%',
            height: '8em',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: 'primary.main',
            position: 'absolute',
            bottom: '-80px',
            left: '-3px',
            borderSize: '3px',
            borderStyle: 'solid',
            borderColor: 'secondary.main',
            borderBottomRightRadius: '60px',
            paddingBottom: '15px',
          }}
        >
          <Typography
            variant='h4'
            sx={{ color: 'secondary.main', marginTop: '5px' }}
          >
            100% Satisfaction
          </Typography>
          <MyHoverButton children='Request Service' />
        </Box>
      </Box>
    </>
  );
};

export default InfoImageSection;
