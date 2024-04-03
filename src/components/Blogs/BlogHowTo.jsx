/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

function BlogHowTo(props) {
  const [change, setChange] = React.useState(false);
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
        }}
      >
        {props.HowToData[0].title}
      </Typography>
      <Typography
        variant='h6'
        sx={{
          width: {
            xl: '60%',
            lg: '60%',
            md: '60%',
            sm: '90%',
            xs: '95%',
          },
          textAlign: 'center',
          color: 'white',
          margin: '1em 0em',
        }}
      >
        {props.HowToData[0].firstP}
      </Typography>
      <Typography
        variant='h6'
        sx={{
          width: {
            xl: '60%',
            lg: '60%',
            md: '60%',
            sm: '90%',
            xs: '95%',
          },
          textAlign: 'center',
          color: 'white',
          margin: '1em 0em',
          display: change === true ? 'inline' : 'none',
        }}
      >
        {props.HowToData[0].secondP}
      </Typography>
      <Typography
        variant='h4'
        sx={{
          color: 'white',
          cursor: 'pointer',
          '&:hover': { color: 'gold', borderBottom: '1px solid gold' },
          transition: 'ease-in-out .35s',
          borderBottom: '1px solid white',
        }}
        onClick={() => setChange(!change)}
      >
        {change ? 'Read Less' : 'Read More'}
      </Typography>
    </>
  );
}

export default BlogHowTo;
