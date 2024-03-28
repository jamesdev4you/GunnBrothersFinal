import React from 'react'
import Box from '@mui/material/Box';
import Header from './header/Header';
import Navbar from '../Navbar/Navbar';
import beeCursor from '../../assets/pictures/cursor.png';




const Home = () => {
  return (
    
    <Box
      sx={{
        height: 'auto',
        width: '100%',
        backgroundColor: 'warning.main',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1em',
        cursor: `url(${beeCursor}), auto`,
      }}
    >
        <Navbar />
      <Header  />
</Box>
  )
}

export default Home