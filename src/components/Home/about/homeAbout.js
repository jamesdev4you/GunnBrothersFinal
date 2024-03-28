import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import WorkingBees from '../../../assets/pictures/workingbees.png';
import '../../../../src/font.css'
import beeCursor from '../../../assets/pictures/cursor.png';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../../index.css';

const HomeAbout = () => {

  const controls = useAnimation();
  const [ref, inView] = useInView();
  const squareVariants = {
    visible: { opacity: 1, transition: { duration: 1.5 } },
    hidden: { opacity: 0 },
  };

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  

  return (
    <motion.div
        className='stylesFlexBox'
        animate={controls}
        variants={squareVariants}
        initial='hidden'
        ref={ref}
      >
    <Box
      sx={{
        backgroundColor: 'warning.main',
        height: {
          xl: '60vh',
          lg: '60vh',
          md: 'auto',
          sm: 'auto',
          xs: 'auto',
        },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: {
          xl: 'row',
          lg: 'row',
          md: 'column',
          sm: 'column',
          xs: 'column',
        },
        gap: {
          xl: '15em',
          lg: 'none',
          md: '6em',
          sm: 'none',
          xs: '45px',
        },
        marginTop: {
          xl: '0px',
          lg: '0px',
          md: '25px',
          sm: '25px',
          xs: '25px',
        },
      }}
    >
      <Box
        sx={{
          height: {
            xl: '400px',
            lg: '400px',
            md: '400px',
            sm: '400px',
            xs: '250px',
          },
          width: {
            xl: '400px',
            lg: '400px',
            md: '400px',
            sm: '400px',
            xs: '250px',
          },
          background: `url(${WorkingBees})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          boxShadow:
            'rgba(0, 0, 0, 0.4) 5px 5px, rgba(0, 0, 0, 0.3) 10px 10px, rgba(0, 0, 0, 0.2) 15px 15px, rgba(0, 0, 0, 0.1) 20px 20px, rgba(0, 0, 0, 0.05) 25px 25px',
        }}
      />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column',
          height: {
            xl: '400px',
            lg: '400px',
            md: 'auto',
            sm: 'auto',
            xs: 'auto',
          },
          width: {
            xl: '30vw',
            lg: '30vw',
            md: '80%',
            sm: '80%',
            xs: '80%',
          },
          gap: '1em',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            textAlign: 'left',
            width: '100%',
            fontFamily: 'Birds',
            fontSize: { xl: '24px', lg: '28px', md: '24px' },
          }}
        >
          More About Quick Wheels
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            width: '100%',
            fontSize: {
              xl: '22px',
              lg: '16px',
              md: '14px',
              sm: '18px',
              xs: '18px',
            },
          }}
        >
          Quick Wheels: Effortlessly transport your vehicle across the USA with
          us. Reliable, speedy, and secure – we make moving your car worry-free.
          Trust Quick Wheels for a smooth, efficient journey.
        </Typography>
        <Typography
          sx={{
            textAlign: 'left',
            width: '100%',
            fontSize: {
              xl: '22px',
              lg: '16px',
              md: '14px',
              sm: '18px',
              xs: '18px',
            },
          }}
        >
          Your go-to for stress-free vehicle transport across the USA.
          Specializing in personal cars, we ensure fast, secure, and reliable
          relocation. Trust us to move your vehicle effortlessly.{' '}
        </Typography>
        <Button
          href='tel:14159423491'
          variant='contained'
          sx={{
            backgroundColor: 'black',
            color: 'white',
            marginRight: 'auto',
            '&:hover': { color: 'gold' },
            cursor: `url(${beeCursor}), auto`,
          }}
        >
          {' '}
          Start Today!
        </Button>
      </Box>
    </Box>
    </motion.div>
  );
        };
    

export default HomeAbout;