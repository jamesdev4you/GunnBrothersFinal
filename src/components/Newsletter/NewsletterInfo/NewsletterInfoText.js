import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { MyNormalButton } from '../../styledComponents';

const NewsletterInfoText = () => {
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
          Blogs, Specials, and Deals
        </Typography>
        <Typography
          variant='h4'
          sx={{
            textAlign: { xs: 'center', sm: 'left' },
            width: '100%',
          }}
        >
          All Included In Weekly Newsletters
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
          width: '100%',
        }}
      >
        lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
        lorem ipsum lorem ipsum lorem ipsum
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          textAlign: {
            xl: 'left',
            lg: 'left',
            md: 'left',
            sm: 'center',
            xs: 'center',
          },
          width: '100%',
        }}
      >
        • A bunch of blank promises
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          textAlign: {
            xl: 'left',
            lg: 'left',
            md: 'left',
            sm: 'center',
            xs: 'center',
          },
          width: '100%',
        }}
      >
        • Biggest profits ever
      </Typography>
      <Typography
        variant='subtitle1'
        sx={{
          textAlign: {
            xl: 'left',
            lg: 'left',
            md: 'left',
            sm: 'center',
            xs: 'center',
          },
          width: '100%',
          marginBottom: '1em',
        }}
      >
        • Tons and millions in gold
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

export default NewsletterInfoText;
