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
          backgroundColor: 'primary.main',
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
          color: 'primary.main',
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
          color='secondary'
          sx={{
            width: {
              xl: '20%',
              lg: '20%',
              md: '20%',
              sm: '80%',
              xs: '80%',
            },
            '& label.Mui-focused': {
              color: '#B8DBD9',
            },
            '& .MuiFormLabel-root': {
              color: 'black',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'black',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#B8DBD9',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#B8DBD9',
              },
            },
            '& .MuiInputBase-root': {
              color: 'black',
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
              color: '#B8DBD9',
            },
            '& .MuiFormLabel-root': {
              color: 'black',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'black',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#B8DBD9',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#B8DBD9',
              },
            },
            '& .MuiInputBase-root': {
              color: 'black',
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
              color: '#B8DBD9',
            },
            '& .MuiFormLabel-root': {
              color: 'black',
            },
            '& .MuiFormLabel-root.Mui-focused': {
              color: 'black',
            },
            '& .MuiInput-underline:after': {
              borderBottomColor: '#B8DBD9',
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: 'black',
              },
              '&:hover fieldset': {
                borderColor: 'black',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#B8DBD9',
              },
            },
            '& .MuiInputBase-root': {
              color: 'black',
            },
          }}
        />
        <Button
          variant='contained'
          color='primary'
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
          backgroundColor: 'primary.main',
          marginBottom: '3em',
          marginTop: '3em',
        }}
      />
    </>
  );
}

export default BlogForm;
