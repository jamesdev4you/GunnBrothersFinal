import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { MyNormalButton } from '../../styledComponents';

const ContactForm = () => {
  return (
    <Box
      sx={{
        width: '80%',
        height: 'auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '1em',
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <TextField
            variant='filled'
            label='First Name'
            InputProps={{
              style: {
                backgroundColor: 'white',
                '& .MuiFormLabel-root': {
                  color: 'red',
                },
              },
            }}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            variant='filled'
            label='Last Name'
            InputProps={{
              style: {
                backgroundColor: 'white',
                '& .MuiFormLabel-root': {
                  color: 'red',
                },
              },
            }}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          {' '}
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
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          {' '}
          <TextField
            variant='filled'
            label='Phone Number'
            InputProps={{
              style: {
                backgroundColor: 'white',
                '& .MuiFormLabel-root': {
                  color: 'red',
                },
              },
            }}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='Message'
            multiline
            rows={4}
            margin='dense'
            InputProps={{
              style: {
                backgroundColor: 'white',
                '& .MuiFormLabel-root': {
                  color: 'red',
                },
              },
            }}
            sx={{ width: '100%' }}
          />
        </Grid>
        <Grid item xs={12} sx={{}}>
          <MyNormalButton children='Submit' />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactForm;
