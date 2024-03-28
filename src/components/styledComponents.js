import Button from '@mui/material/Button';
import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import '../font.css';
import { NavLink } from 'react-router-dom';
import '../navlink.css'
import beeCursor from '../assets/pictures/cursor.png';


const HeaderButton = styled(Button)(({ theme }) => ({
  fontSize: '11px',
  fontWeight: '900',
  letterSpacing: '2px',
  padding: '7px 50px 7px',
  outline: '0',
  cursor: `url(${beeCursor}), auto`,
  color: theme.palette.text.primary,
  position: 'relative',
  backgroundColor: 'white',
  userSelect: 'none',
  touchAction: 'manipulation',
  borderRadius: '13px',
  fontFamily: 'Birds',
  '&:after': {
    content: '""',
    backgroundColor: 'rgba(0,0,0,0)',
    border: `2px solid ${theme.palette.info.main}`,
    width: '100%',
    zIndex: '1',
    position: 'absolute',
    height: '100%',
    top: '4px',
    left: '4px',
    transition: '0.2s',
    borderRadius: '13px',
  },
  '&:hover:after': {
    border: `2px solid ${theme.palette.info.main}`,
    top: '0px',
    left: '0px',
  },
  '&:hover': {
    backgroundColor: theme.palette.background.paper,
  },
  [`@media (min-width: 768px)`]: {
    padding: '4px 30px 4px',
  },
}));

const NormalButton = styled(Button)(({ theme }) => ({
  fontSize: '12px',
  letterSpacing: '1px',
  padding: '7px 50px 7px',
  outline: '0',
  border: `1px solid ${theme.palette.error.main}`,
  cursor: `url(${beeCursor}), auto`,
  color: `${theme.palette.secondary.main}`,
  position: 'relative',
  backgroundColor: theme.palette.primary.main,
  borderRadius: '15px',
  transition: '0.3s all ease-in-out',
  fontFamily: 'Birds',
  '&:hover': {
    color: theme.palette.info.main,
  },
  
}));

const NavButton = styled(Button)(({ theme }) => ({
  fontSize: '10px',
  letterSpacing: '1px',
  padding: '7px 50px 7px',
  height: '30px',
  outline: '0',
  border: `1px solid ${theme.palette.info.main}`,
  cursor: `url(${beeCursor}), auto`,
  color: `${theme.palette.primary.main}`,
  fontWeight: 'bold',
  position: 'relative',
  backgroundColor: theme.palette.secondary.main,
  borderRadius: '15px',
  transition: '0.3s all ease-in-out',
  fontFamily: 'Birds',
  '&:hover': {
    color: theme.palette.info.main,
    backgroundColor: theme.palette.info.main,
  },
}));

const FormButton = styled(Button)(({ theme }) => ({
  fontSize: '15px',
  letterSpacing: '1px',
  padding: '12px 50px 12px',
  height: '30px',
  outline: '0',
  border: `1px solid ${theme.palette.secondary.main}`,
  cursor: `url(${beeCursor}), auto`,
  color: `${theme.palette.primary.main}`,
  fontWeight: 'bold',
  position: 'relative',
  backgroundColor: `${theme.palette.secondary.main}`,
  borderRadius: '15px',
  transition: '0.3s all ease-in-out',
  fontFamily: 'Birds',
  '&:hover': {
    backgroundColor: `${theme.palette.info.main}`,
  },
}));

const HoneyButton = styled(Button)(({ theme }) => ({
  fontSize: '15px',
  letterSpacing: '1px',
  padding: '12px 50px 12px',
  height: '30px',
  outline: '0',
  border: `1px solid ${theme.palette.secondary.main}`,
  cursor: `url(${beeCursor}), auto`,
  color: `${theme.palette.primary.main}`,
  fontWeight: 'bold',
  position: 'relative',
  backgroundColor: `${theme.palette.secondary.main}`,
  borderRadius: '15px',
  transition: '0.3s all ease-in-out',
  fontFamily: 'Birds',
  '&:hover': {
    backgroundColor: `${theme.palette.info.main}`,
  },
}));

const HiveButton = styled(Button)(({ theme }) => ({
  fontSize: '15px',
  letterSpacing: '1px',
  padding: '12px 50px 12px',
  height: '30px',
  outline: '0',
  border: `1px solid ${theme.palette.secondary.main}`,
  cursor: `url(${beeCursor}), auto`,
  color: `${theme.palette.primary.main}`,
  fontWeight: 'bold',
  position: 'relative',
  backgroundColor: `${theme.palette.secondary.main}`,
  borderRadius: '15px',
  transition: '0.3s all ease-in-out',
  fontFamily: 'Birds',
  '&:hover': {
    backgroundColor: `${theme.palette.info.main}`,
  },
}));

export const MyHeaderButton = (props) => (
  <HeaderButton variant='contained'>{props.children}</HeaderButton>
);

export const MyNormalButton = (props) => (
  <NormalButton variant='contained'>{props.children}</NormalButton>
);

export const MyNavButton = (props) => (
  <NavButton variant='contained'><NavLink to='/form' className='nav_links' >{props.children}</NavLink></NavButton>
);

export const MyFormButton = (props) => (
  <FormButton variant='contained' type="submit"><NavLink to='/dashboard' className='nav_links' >{props.children}</NavLink></FormButton>
);

export const MyXButton = (props) => (
  <FormButton variant='contained' type="submit"><NavLink to='/dashboard' className='nav_links' >{props.children}</NavLink></FormButton>
);

export const MyHoneyButton = (props) => (
  <HoneyButton variant='contained' type="submit">{props.children}</HoneyButton>
);

export const MyHiveButton = (props) => (
  <HiveButton variant='contained' type="submit"><NavLink to='/dashboard' className='nav_links' >{props.children}</NavLink></HiveButton>
);