import React, { useState } from 'react'
import Box from '@mui/material/Box';
import SvgIcon from '@mui/material/SvgIcon';
import { ReactComponent as Facebook } from '../../../assets/svg/facebook.svg';
import { ReactComponent as X } from '../../../assets/svg/x.svg';
import { ReactComponent as Blog } from '../../../assets/svg/blog.svg';
import { ReactComponent as CustomerService } from '../../../assets/svg/customer-support.svg';
import { ReactComponent as Campaign } from '../../../assets/svg/campaign.svg';
import { ReactComponent as Email } from '../../../assets/svg/email.svg';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import beeCursor from '../../../assets/pictures/cursor.png';



const HeaderOptions = () => {
    const [value, setValue] = useState(0);


    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const [hovered, setHovered] = useState(null);
    const circleOptions = [
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

  return (
    <Box
      sx={{
        width: {xl: '80%', lg: '80%', md: '90%', sm: '100%', xs: '100%'},
        height: 'auto',
        paddingTop: {xs: '6em', sm: '4em'},
        paddingBottom: '2em',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        
      }}
    >
      {circleOptions.map(({ logo, text, viewBox, key }) => (
        <Box
          key={key}
          onMouseEnter={() => setHovered(key)}
          onMouseLeave={() => setHovered(null)}
          sx={{
            height: 'auto',
            width: 'auto',
            display: {
              xs: 'none',
              sm: 'none',
              md: 'flex',
              lg: 'flex',
              xl: 'flex',
            },
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            '&:hover': {
              cursor: `url(${beeCursor}), auto`,

            },
          }}
        >
          <Typography
            variant='subtitle1'
            sx={{
              marginTop: '.3em',
              fontWeight: 'bold',
              letterSpacing: '1px',
              lineHeight: '50px',
              transition: 'all .1s ease-in-out',
              
              zIndex: '100',
              color: 'primary.main',
            }}
          >
            {text}
          </Typography>
          <Box
            sx={{
              height: { md: '80px', lg: '80px', xl: '90px' },
              width: { md: '80px', lg: '80px', xl: '90px' },
              backgroundColor: 'primary.main',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all .1s ease-in-out',
              
              boxShadow:
                hovered === key
                  ? 'rgba(0, 0, 0, 0.2) 0px 18px 50px -10px'
                  : 'none',
            }}
          >
            <SvgIcon
              viewBox={viewBox}
              component={logo}
              sx={{
                transition: 'all .2s ease-in-out',
                height: {
                  xs: '30px',
                  sm: '60px',
                  md: hovered === key ? '50px' : '40px',
                  lg: hovered === key ? '40px' : '35px',
                  xl: hovered === key ? '40px' : '35px',
                },

                width: {
                  xs: '30px',
                  sm: '60px',
                  md: hovered === key ? '50px' : '40px',
                  lg: hovered === key ? '40px' : '35px',
                  xl: hovered === key ? '40px' : '35px',
                },
                color: hovered === key ? 'info.main' : 'secondary.main',
              }}
            ></SvgIcon>
          </Box>
          
        </Box>
      ))}
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label='icon label tabs example'
        variant='scrollable'
        scrollButtons
        allowScrollButtonsMobile
        sx={{
          [`& .MuiTabs-scrollButtons`]: {
            color: 'secondary.main',
            '&.Mui-disabled': { opacity: 0.3 },
          },
          '& .MuiTab-root': {
            color: 'secondary.main',
          },
          '& .Mui-selected': {
            color: 'secondary.main', // Ensures selected tab text is also white
          },
          '& .MuiTabs-indicator': {
            backgroundColor: 'error.main', // Changes the indicator color to white
          },

          display: {
            xs: 'flex',
            sm: 'flex',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
          width: '100%',
          alignItems: 'center',
          gap: {xs: '0em', sm: '4em'},
          justifyContent: 'center',
          backgroundColor: 'primary.main',
          paddingTop: {
            xs: '.5em',
            sm: '.5em',
            md: 'none',
            lg: 'none',
            xl: 'none',
          },
          
        }}
      >
        {circleOptions.map(({ logo, text, viewBox, key }) => (
          <Tab
            key={key}
            icon={
              <SvgIcon
                viewBox={viewBox}
                component={logo}
                sx={{
                  transition: 'all .1s ease-in-out',
                  height: {
                    xs: '50px',
                    sm: '60px',
                  },
                  width: {
                    xs: '50px',
                    sm: '60px',
                  },
                  color: 'secondary.main',
                
                }}
              />
            }
            label={text}
            sx={{
              '& .MuiTab-root': {
                color: 'seconday.main !important', // Overrides the color property more forcefully
              },
              "&.Mui-selected": {
                color: "info.main"
              },
              marginRight: '15px',
            }}
          />
        ))}
      </Tabs>
    </Box>
    );
}

export default HeaderOptions