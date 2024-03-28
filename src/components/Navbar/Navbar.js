import React from 'react';
import Box from '@mui/material/Box';
import {MyNavButton} from '../styledComponents';

const Navbar = () => {
  return (
    <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'end', width: '100%', height: '60px', backgroundColor: 'black', marginBottom: '3em', paddingRight: '1em'}}>
      <MyNavButton children='Login'/>
    </Box>
  )
}

export default Navbar