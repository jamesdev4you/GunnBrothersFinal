/* eslint-disable prefer-template */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function BlogSidebar(props) {
  const navigate = useNavigate();
  const [change, setChange] = React.useState(false);
  console.log(change);
  return (
    <Box
      sx={{
        width: {
          xs: '0%',
          sm: '0%',
          md: '0%',
          lg: '18%',
          xl: '15%',
        },
        height: '100vh',
        position: 'sticky',
        left: '0',
        top: '0',
      }}
    >
      <Box
        sx={{
          backgroundColor: 'primary.main',
          borderRightSize: '2px',
          borderRightStyle: 'solid',
          borderRightColor: 'white',
          width: {
            xs: '0%',
            sm: '0%',
            md: '0%',
            lg: change === true ? '100%' : '40%',
            xl: change === true ? '100%' : '40%',
          },
          transition: 'ease-in-out .2s',
          height: '100vh',
          left: '0',
          top: '0',
          display: {
            xs: 'none',
            sm: 'none',
            md: 'none',
            lg: 'flex',
            xl: 'flex',
          },
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column',
        }}
        onClick={() => setChange(!change)}
      >
        <Typography
          variant='h5'
          sx={{
            '&:hover': { cursor: 'pointer', color: 'info.main' },
            transition: 'ease-in-out .2s',
            fontWeight: 'bold',
            textAlign: 'center',
            color: 'white',
            marginTop: '5em',
            paddingBottom: '1em',
            borderBottom: '1px solid white',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '.3em',
          }}
        >
          {change === true ? (
            <KeyboardArrowDownIcon
              sx={{
                width: '40px',
                height: '40px',
                marginRight: 'auto',
                marginLeft: '.5em',
              }}
            />
          ) : (
            <KeyboardArrowRightIcon
              sx={{
                width: '40px',
                height: '40px',
                margin: 'auto',
              }}
            />
          )}
        </Typography>
        {props.HeaderNavigationMenu.map((item) => (
          <Box
            sx={{
              color: 'white',
              cursor: 'pointer',
              '&:hover': { color: '#B8DBD9' },
              transition: 'ease-in-out .05s',
              gap: '15px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'start',
              width: '100%',
              height: '5em',
              borderBottom: '1px solid white',
            }}
            onClick={() =>
              navigate(
                `/blog/category/${item.object[0].categories[0].slug.current}`
              )
            }
          >
            <Typography
              variant='h6'
              sx={{
                textAlign: 'left',
                marginLeft: '1em',
                display: change === true ? 'inline' : 'none',
                transition: 'ease-in-out 1s',
              }}
            >
              {item.name}
            </Typography>
            <div
              style={{
                margin: change === true ? '0px' : 'auto',
                transition: 'ease-in-out .1s',
              }}
            >
              {item?.icon}
            </div>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default BlogSidebar;
