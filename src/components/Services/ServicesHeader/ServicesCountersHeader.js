import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ScrollTrigger from 'react-scroll-trigger';
import CountUp from 'react-countup';

const serviceCounters = [
  {
    start: 0,
    end: 1000,
    title: 'Customers',
    desc: 'lorem ipsum lorem ipsum lorem ipsum ipsum lorem',
  },
  {
    start: 0,
    end: 1000,
    title: 'Customers',
    desc: 'lorem ipsum lorem ipsum lorem ipsum ipsum lorem',
  },
  {
    start: 0,
    end: 1000,
    title: 'Customers',
    desc: 'lorem ipsum lorem ipsum lorem ipsum ipsum lorem',
  },
];

const ServicesCountersHeader = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '30vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {serviceCounters.map((item) => (
          <Box
            sx={{
              width: '24%',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography
              variant='h3'
              sx={{ width: '100%', textAlign: 'center' }}
            >
              {counterOn && (
                <CountUp
                  start={item?.start}
                  end={item?.end}
                  duration={2}
                  delay={0}
                />
              )}
              + {item.title}
            </Typography>
            <Typography
              variant='h6'
              sx={{ width: '100%', textAlign: 'center' }}
            >
              {item.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </ScrollTrigger>
  );
};

export default ServicesCountersHeader;
