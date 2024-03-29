import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Facebook } from '../../../assets/svg/facebook.svg';
import { ReactComponent as X } from '../../../assets/svg/x.svg';
import { ReactComponent as Blog } from '../../../assets/svg/blog.svg';
import { ReactComponent as CustomerService } from '../../../assets/svg/customer-support.svg';
import { ReactComponent as Campaign } from '../../../assets/svg/campaign.svg';
import { ReactComponent as Email } from '../../../assets/svg/email.svg';
import Typography from '@mui/material/Typography';

const gridOptions = [
  {
    logo: Facebook,
    text: 'Facebook',
    viewBox: '0 0 512 512',
    key: 1,
  },
  {
    logo: X,
    text: 'Twitter',
    viewBox: '0 0 512 512',
    key: 2,
  },
  {
    logo: Blog,
    text: 'Blogs',
    viewBox: '0 0 512 512',
    key: 3,
  },
  {
    logo: CustomerService,
    text: 'ChatBots',
    viewBox: '0 0 100 100',
    key: 4,
  },
  {
    logo: Campaign,
    text: 'Outreach',
    viewBox: '0 0 512 512',
    key: 5,
  },
  {
    logo: Email,
    text: 'Email',
    viewBox: '0 0 512 512',
    key: 6,
  },
];

const HowCanGrid = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <Grid
      container
      rowSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
      columnSpacing={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 3 }}
    >
      {gridOptions.map((item) => (
        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
          <Box
            key={item.key}
            onMouseEnter={() => setHovered(item.key)}
            onMouseLeave={() => setHovered(null)}
            sx={{
              height: {
                xl: '10vh',
                lg: '30vh',
                md: '30vh',
                sm: '15vh',
                xs: '15vh',
              },
              backgroundColor: 'primary.main',
              borderColor: 'info.main',
              borderRadius: '15px',
              borderWidth: '3px',
              borderStyle: 'solid',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: {
                xl: 'row',
                lg: 'row',
                md: 'row',
                sm: 'row',
                xs: 'row',
              },
              alignItems: 'center',
              justifyContent: {
                xl: 'center',
                lg: 'center',
                md: 'center',
                sm: 'center',
                xs: 'center',
              },
              gap: '1em',
            }}
          >
            <SvgIcon
              viewBox={item.viewBox}
              component={item.logo}
              sx={{
                transition: 'all .2s ease-in-out',
                height: {
                  xs: '30px',
                  sm: '60px',
                  md: hovered === item.key ? '50px' : '40px',
                  lg: hovered === item.key ? '100px' : '120px',
                  xl: hovered === item.key ? '50px' : '70px',
                },

                width: {
                  xs: '30px',
                  sm: '60px',
                  md: hovered === item.key ? '50px' : '40px',
                  lg: hovered === item.key ? '100px' : '120px',
                  xl: hovered === item.key ? '50px' : '30px',
                },
                color: hovered === item.key ? 'info.main' : 'secondary.main',
              }}
            />
            <Typography
              variant='h3'
              sx={{
                color: hovered === item.key ? 'info.main' : 'secondary.main',
                fontWeight: 'bold',
              }}
            >
              {item.text}
            </Typography>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default HowCanGrid;
