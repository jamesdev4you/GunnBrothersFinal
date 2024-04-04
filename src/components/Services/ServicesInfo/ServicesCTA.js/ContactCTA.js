import React from 'react';
import Box from '@mui/material/Box';
import Technician from '../../../../assets/pictures/technican.jpg';
import Typography from '@mui/material/Typography';
import { MyHoverButton } from '../../../styledComponents';

const ContactCTA = () => {
  return (
    <Box
      sx={{
        width: '20vw',
        height: '40vh',
        backgroundColor: 'primary.main',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        gap: '.5em',
        padding: '1em',
        borderRadius: '15px',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px',
        borderWidth: '3px',
        borderStyle: 'solid',
        borderColor: 'info.main',
      }}
    >
      <Box
        sx={{
          backgroundImage: `url(${Technician})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'none',
          backgroundPosition: 'center',
          width: '98%',
          height: '50%',
        }}
      />
      <Typography
        variant='h5'
        sx={{
          width: '100%',
          textAlign: 'center',
          color: 'secondary.main',
          fontWeight: 'bold ',
        }}
      >
        Set up Appointment
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          width: '80%',
          textAlign: 'center',
          color: 'secondary.main',
        }}
      >
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </Typography>
      <MyHoverButton children='Set Appointment' />
    </Box>
  );
};

export default ContactCTA;
