import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

const objectFAQ = [
  {
    key: 1,
    question: 'What does Gunn Brothers mean in your name?',
    answer: 'What does Gunn Brothers mean in your name',
  },
  {
    key: 2,
    question: 'What does Gunn Brothers mean in your name?',
    answer: 'What does Gunn Brothers mean in your name',
  },
  {
    key: 3,
    question: 'What does Gunn Brothers mean in your name?',
    answer: 'What does Gunn Brothers mean in your name',
  },
  {
    key: 4,
    question: 'What does Gunn Brothers mean in your name?',
    answer: 'What does Gunn Brothers mean in your name',
  },
  {
    key: 5,
    question: 'What does Gunn Brothers mean in your name?',
    answer: 'What does Gunn Brothers mean in your name',
  },
  {
    key: 6,
    question: 'What does Gunn Brothers mean in your name?',
    answer: 'What does Gunn Brothers mean in your name',
  },
];

const FAQGrid = () => {
  return (
    <Grid container rowSpacing={2} columnSpacing={2}>
      {objectFAQ.map((item) => (
        <Grid item xs={12}>
          <Box
            sx={{
              display: 'flex',
              height: {xl: '4em', lg: '4em', md: '4em', sm: '4em', xs: '6em'},
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: 'black',
              borderBottomRightRadius: '20px',
              padding: '1em',
              cursor: 'pointer',
              borderColor: 'info.main',
              borderWidth: '2px',
              borderStyle: 'solid',
            }}
          >
            <Typography variant='h5' sx={{ color: 'secondary.main' }}>
              {item.question}
            </Typography>
            <Typography
              variant='h5'
              sx={{ color: 'secondary.main', marginLeft: 'auto' }}
            >
              {'>'}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default FAQGrid;
