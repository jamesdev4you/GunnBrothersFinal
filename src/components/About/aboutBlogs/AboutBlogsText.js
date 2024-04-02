import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutBlogsText = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '70%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1em',
      }}
    >
      <Typography
        variant='h1'
        sx={{ width: '100%', textAlign: 'center', fontWeight: 'bold' }}
      >
        Check Out Our Blogs
      </Typography>
      <Typography variant='h6' sx={{ width: '60%', textAlign: 'center' }}>
        lorem ipsum lorem ipsum lorem ipsum ipsum lorem ipsum lorem ipsum lorem
        lorem lorem ipsum lorem
      </Typography>
    </Box>
  );
};

export default AboutBlogsText;
