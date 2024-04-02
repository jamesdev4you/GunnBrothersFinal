import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import { NavLink } from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Logo from '../../assets/pictures/logoWhite.png';
import '../../navlink.css';
import '../../index.css';
import { Outlet } from 'react-router-dom';
import { MyHeaderButton } from '../styledComponents';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

const drawerWidth = 240;
const navItems = [
  { text: 'Home', href: '/' },
  {
    text: 'About',
    href: '/about',
    dropdownItems: [
      { text: 'ABOUT', href: '/about' },
      { text: 'Blogs', href: '/blog' },
      { text: 'Newsletter', href: '/newsletter' },
      { text: 'FAQ', href: '/faq' },
    ],
  },
  {
    text: 'Services',
    href: '/services',
    dropdownItems: [
      { text: 'SERVICES', href: '/services' },
      { text: 'Air Conditioning', href: '/airconditioning' },
      { text: 'Heating', href: '/heating' },
      { text: 'Thermostat', href: '/thermostat' },
      { text: 'Ductwork', href: '/ductwork' },
      { text: 'Insulation', href: '/insulation' },
    ],
  },
  { text: 'Contact', href: '/contact' },
  { text: 'Estimate', href: '/priceestimate' },
];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log('help jesus', event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: 'primary.main' }}
    >
      <img src={Logo} alt='yooo' style={{ height: '145px', width: '150px' }} />
      <List sx={{ backgroundColor: 'primary.main' }}>
        {navItems.map((item) => (
          <ListItem key={item.text} sx={{ margin: '15px 0px' }} disablePadding>
            <NavLink
              style={{
                textDecoration: 'none',
                color: 'white',
                fontSize: '20px',
                marginRight: 'auto',
                marginLeft: '1em',
              }}
              to={item.href}
            >
              {item.text}
            </NavLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <AppBar component='nav'>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            edge='start'
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'block', md: 'block', lg: 'none' } }}
          >
            <MenuIcon sx={{ color: 'secondary.main' }} />
          </IconButton>
          <Box
            sx={{
              display: 'block',
              height: '100px',
              width: '100px',
              marginLeft: {
                xs: 'auto',
                sm: 'auto',
                md: 'auto',
                lg: '0px',
                xl: '0px',
              },
              backgroundImage: `url(${Logo})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '&:hover': {
                cursor: 'pointer',
              },
            }}
          />
          <Box
            sx={{
              display: {
                xs: 'none',
                sm: 'none',
                md: 'none',
                lg: 'flex',
                xl: 'flex',
              },
              marginLeft: {
                xs: 'none',
                sm: 'none',
                md: '80px',
                lg: '15%',
                xl: '25%',
              },
              margin: 'auto',
              gap: '3em',
            }}
          >
            {navItems.map((item, index) => (
              <ListItem
                key={item.text}
                sx={{ margin: '15px 0px' }}
                disablePadding
              >
                {item.dropdownItems ? (
                  <>
                    <PopupState variant='popover' popupId='demo-popup-menu'>
                      {(popupState) => (
                        <React.Fragment>
                          <Button
                            variant='contained'
                            {...bindTrigger(popupState)}
                            sx={{
                              '&.MuiButton-root': {
                                color: 'white',
                                '&:hover': {
                                  color: '#B8DBD9',
                                  textDecoration: 'underline',
                                },
                              },
                            }}
                          >
                            {item.text}
                          </Button>
                          <Menu
                            id={item.text}
                            {...bindMenu(popupState)}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: '0px',
                            }}
                            sx={{
                              '& .MuiPaper-root': {
                                backgroundColor: 'black',
                              },
                            }}
                          >
                            {item.dropdownItems.map((dropdownItem) => (
                              <MenuItem
                                key={dropdownItem.text}
                                onClick={popupState.close}
                                sx={{
                                  backgroundColor: 'black',
                                  paddingTop: '0px',
                                  marginLeft: '1px',
                                  marginBottom: '15px',
                                }}
                              >
                                <NavLink
                                  to={dropdownItem.href}
                                  className='menu_link'
                                >
                                  {dropdownItem.text}
                                </NavLink>
                              </MenuItem>
                            ))}
                          </Menu>
                        </React.Fragment>
                      )}
                    </PopupState>
                  </>
                ) : (
                  <Button variant='contained'>
                    <NavLink
                      key={item.href}
                      className='menu_link'
                      to={item.href}
                    >
                      {item.text}
                    </NavLink>
                  </Button>
                )}
              </ListItem>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: 'none', sm: 'none', md: 'none', lg: 'flex' },

              gap: '1em',
              marginLeft: {
                xl: 'none',
                lg: 'none',
                md: 'auto',
                sm: 'auto',
                xs: 'auto',
              },
            }}
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
              }}
            >
              <MyHeaderButton children='#555-555-5555' />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', sm: 'none', md: 'none', lg: 'block' },
              }}
            >
              <MyHeaderButton children='Request Appointment' />
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component='nav'>
        <Drawer
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              backgroundColor: 'primary.main',
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Outlet />
    </Box>
  );
}
