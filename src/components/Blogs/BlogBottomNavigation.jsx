/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { useNavigate } from 'react-router';

function BlogBottomNavigation(props) {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        width: '100%',
        position: 'fixed',
        bottom: { xs: '0px', sm: '0px' },
        left: '0',
        right: '0',
        display: {
          xs: 'inline',
          sm: 'inline',
          md: 'inline',
          lg: 'none',
          xl: 'none',
        },
        zIndex: '1',
        borderTop: '1px solid white',
      }}
    >
      <BottomNavigation showLabels sx={{ backgroundColor: '#224675' }}>
        {props.HeaderNavigationMenu.map((item) => (
          <BottomNavigationAction
            onClick={() =>
              navigate(
                `/blog/category/${item.object[0].categories[0].slug.current}`
              )
            }
            label={item?.name}
            icon={item?.icon}
            sx={{
              '& .MuiBottomNavigationAction-label': {
                color: 'white',
                '&:hover': {
                  color: '#B8DBD9',
                },
              },
            }}
          />
        ))}
      </BottomNavigation>
    </Box>
  );
}

export default BlogBottomNavigation;
