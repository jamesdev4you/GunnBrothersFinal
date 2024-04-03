import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function BlogForm() {
  return (
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
          backgroundColor: 'white',
          marginBottom: '3em',
          marginTop: '3em',
        }}
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
          color: 'white',
          fontWeight: 'bold',
          marginBottom: '1em',
        }}
      >
        Subscribe to get updates
      </Typography>
      <Box
        sx={{
          width: '80%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          height: {
            xl: '100px',
            lg: '100px',
            md: '100px',
            sm: 'auto',
            xs: 'auto',
          },
          flexDirection: {
            xl: 'row',
            lg: 'row',
            md: 'row',
            sm: 'column',
            xs: 'column',
          },
          gap: {
            xl: '0px',
            lg: '0px',
            md: '0px',
            sm: '1em',
            xs: '1em',
          },
        }}
      >
        <TextField
          // eslint-disable-next-line react/jsx-props-no-multi-spaces
          label='Email'
          color='primary'
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '20%',
              sm: '80%',
              xs: '80%',
            },
            '& label.Mui-focused': {
              color: 'gold',
            },
            '& .MuiFormLabel-root': {
              color: 'white',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'gold',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'gold',
              },
            },
            '& .MuiInputBase-root': {
              color: 'white',
            },
          }}
        />
        <TextField
          // eslint-disable-next-line react/jsx-props-no-multi-spaces
          label='First Name'
          color='primary'
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '20%',
              sm: '80%',
              xs: '80%',
            },
            '& label.Mui-focused': {
              color: 'gold',
            },
            '& .MuiFormLabel-root': {
              color: 'white',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'gold',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'gold',
              },
            },
            '& .MuiInputBase-root': {
              color: 'white',
            },
          }}
        />

        <TextField
          // eslint-disable-next-line react/jsx-props-no-multi-spaces
          label='Last Name'
          color='primary'
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '20%',
              sm: '80%',
              xs: '80%',
            },
            '& label.Mui-focused': {
              color: 'gold',
            },
            '& .MuiFormLabel-root': {
              color: 'white',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'white',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: 'gold',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'white',
              },
              '&:hover fieldset': {
                borderColor: 'white',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'gold',
              },
            },
            '& .MuiInputBase-root': {
              color: 'white',
            },
          }}
        />
        <Button
          variant='contained'
          color='secondary'
          sx={{
            alignSelf: 'center',
            minWidth: '140px',
            height: '55px',
          }}
        >
          Subscribe
        </Button>
      </Box>
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
          marginBottom: '3em',
          marginTop: '3em',
        }}
      />
    </>
  );
}

export default BlogForm;
