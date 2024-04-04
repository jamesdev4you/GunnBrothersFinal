import React from 'react';
import Box from '@mui/material/Box';
import Technician from '../../../../assets/pictures/technican.jpg';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { MyNormalButton } from '../../../styledComponents';

const NewsletterCTA = () => {
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
        Join Our Newsletter
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{ width: '80%', textAlign: 'center', color: 'secondary.main' }}
      >
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
      </Typography>
      <TextField
        variant='filled'
        label='Email'
        InputProps={{
          endAdornment: <MyNormalButton children='Join' />,
          style: {
            backgroundColor: 'white',
            '& .MuiFormLabel-root': {
              color: 'red',
            },
          },
        }}
      />
    </Box>
  );
};

export default NewsletterCTA;
