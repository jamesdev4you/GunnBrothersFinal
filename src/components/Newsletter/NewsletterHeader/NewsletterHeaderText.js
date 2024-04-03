import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MyNormalButton } from '../../styledComponents';

const NewsletterHeaderText = () => {
  return (
    <Box
      sx={{
        height: '50%',
        width: '40%',
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        flexDirection: 'column',
      }}
    >
      <Box>
        <Typography
          variant='h1'
          sx={{
            fontWeight: 'bold',
            textAlign: { xs: 'center', sm: 'left' },
            width: '100%',
          }}
        >
          Newsletters That
        </Typography>
        <Typography
          variant='h1'
          sx={{
            fontWeight: 'bold',
            textAlign: { xs: 'center', sm: 'left' },
            width: '100%',
          }}
        >
          Save You Money
        </Typography>
      </Box>
      <Typography
        variant='h6'
        sx={{
          textAlign: {
            xl: 'left',
            lg: 'left',
            md: 'left',
            sm: 'center',
            xs: 'center',
          },
          marginTop: '1em',
          marginBottom: '1em',
          fontWeight: 'bold',
          width: '100%',
        }}
      >
        Receive Updates Weekly
      </Typography>
      <TextField
        variant='filled'
        label='Email'
        InputProps={{
          style: {
            backgroundColor: 'white',
            '& .MuiFormLabel-root': {
              color: 'red',
            },
          },
        }}
        sx={{ width: '100%', marginBottom: '1em' }}
      />
      <MyNormalButton children='Sign Up' />
    </Box>
  );
};

export default NewsletterHeaderText;
