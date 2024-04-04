import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const ServicesTextInfo = () => {
  return (
    <Box
      sx={{
        height: 'auto',
        width: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'start',
        gap: '1em',
      }}
    >
      <Typography
        variant='h3'
        sx={{ width: '90%', textAlign: 'left', fontWeight: 'bold' }}
      >
        {' '}
        Air Conditioning Services
      </Typography>
      <Typography variant='h4' sx={{ width: '90%', textAlign: 'left' }}>
        {' '}
        We Keep Customers Comfortable with Reliable AC Repair, Maintenance, &
        Installation!
      </Typography>
      <Typography variant='h6' sx={{ width: '90%', textAlign: 'left' }}>
        {' '}
        Your air conditioner has an important job: keeping you and your family
        comfortable indoors. When an air conditioner breaks down, it can be as
        expensive as it is frustrating. At One Hour Heating & Air Conditioning,
        our team takes the frustration out of air conditioning repair,
        installation, and maintenance.
      </Typography>
      <Typography variant='h6' sx={{ width: '90%', textAlign: 'left' }}>
        {' '}
        Every One Hour Heating & Air Conditioning location is independently
        owned and operated so you can be certain that you’re getting a local
        expert. We’ll arrive at your home on time and work with your needs,
        preferences, and budget to make sure that you’re completely satisfied
        with our work! Every job by One Hour Heating & Air Conditioning is
        backed with the UWIN Guarantee. We also value your time as much as we
        value our own. So, if we don’t arrive at your house when you expect,
        we’ll pay you back. With us, there’s no more waiting around all day for
        an HVAC technician to arrive at your home!
      </Typography>
      <Typography
        variant='h3'
        sx={{ width: '90%', textAlign: 'left', fontWeight: 'bold' }}
      >
        {' '}
        Why Trust The Gunn Brothers
      </Typography>
      <Typography variant='h6' sx={{ width: '90%', textAlign: 'left' }}>
        {' '}
        Your air conditioner has an important job: keeping you and your family
        comfortable indoors. When an air conditioner breaks down, it can be as
        expensive as it is frustrating. At One Hour Heating & Air Conditioning,
        our team takes the frustration out of air conditioning repair,
        installation, and maintenance.
      </Typography>
    </Box>
  );
};

export default ServicesTextInfo;
