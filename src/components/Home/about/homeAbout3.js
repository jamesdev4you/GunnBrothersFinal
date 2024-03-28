import React, { useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import MarketingBee from '../../../assets/pictures/marketingbee.png';
import '../../../../src/font.css';
import beeCursor from '../../../assets/pictures/cursor.png';
import { useAnimation, motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../../../index.css';

const HomeAbout3 = () => {
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
          md: '0px',
          sm: '0px',
          xs: '25px',
        },
        marginBottom: {
          xl: '0px',
          lg: '0px',
          md: '0px',
          sm: '0px',
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
          background: `url(${MarketingBee})`,
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
          More Information
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
              xs: '14px',
            },
          }}
        >
          Quick Wheels expertly moves vehicles across the USA. Specializing in
          personal transport, we ensure your car's safe, efficient journey.
          Choose Quick Wheels for reliable, stress-free vehicle relocation.
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
              xs: '14px',
            },
          }}
        >
          Quick Wheels delivers efficient vehicle journeys across the USA. We
          specialize in moving personal cars quickly and safely. Choose us for a
          reliable, smooth transport experience. Your car is in expert hands
          with Quick Wheels.
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

export default HomeAbout3;