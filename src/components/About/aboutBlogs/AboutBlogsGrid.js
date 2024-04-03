import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Technician from '../../../assets/pictures/technican.jpg';
import { Typography } from '@mui/material';

const BlogGridItems = [
  {
    title: 'How to Unlock Your Phone Quickly Without Wasting Your Money.',
    picture: Technician,
  },
  {
    title: 'How to Unlock Your Phone Quickly Without Wasting Your Money.',
    picture: Technician,
  },
  {
    title: 'How to Unlock Your Phone Quickly Without Wasting Your Money.',
    picture: Technician,
  },
  {
    title: 'How to Unlock Your Phone Quickly Without Wasting Your Money.',
    picture: Technician,
  },
  {
    title: 'How to Unlock Your Phone Quickly Without Wasting Your Money.',
    picture: Technician,
  },
  {
    title: 'How to Unlock Your Phone Quickly Without Wasting Your Money.',
    picture: Technician,
  },
];

const AboutBlogsGrid = () => {
  return (
    <Box sx={{ width: '100%', height: 'auto' }}>
      <Grid container spacing={2}>
        {BlogGridItems.map((item) => (
          <Grid item xs={4}>
            <Box
              sx={{
                height: '38vh',
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${item.picture})`,
                  width: '95%',
                  height: '70%',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'none',
                  backgroundPosition: 'center',
                  borderRadius: {
                    xl: '5px',
                    lg: '15px',
                    md: '15px',
                    sm: '0px',
                    xs: '0px',
                  },
                }}
              />
              <Typography variant='h6' sx={{ color: 'white', width: '90%' }}>
                {item.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutBlogsGrid;
