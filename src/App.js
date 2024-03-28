import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    error: {
      main: '#ffffff',
    },
    warning: {
      main: '#f1f1f1',
    },
    info: {
      main: '#FFC60B',
    },
  },
  typography: {
    h1: {
      fontSize: '3.0rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2.6rem',
      fontWeight: 500,
    },
    h3: {
      fontSize: '2.2rem',
      fontWeight: 500,
    },
    h4: {
      fontSize: '1.8rem',
      fontWeight: 400,
    },
    h5: {
      fontSize: '1.5rem',
      fontWeight: 400,
    },
    h6: {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
    subtitle1: {
      fontSize: '1rem',
      fontWeight: 400,
    },
    button: {
      fontSize: '0.875rem',
      fontWeight: 500,
      textTransform: 'uppercase',
    },
  },
});


function App() {
  return (
    <ThemeProvider theme={theme}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<Home />} />
      
    </Routes>
    </ThemeProvider>
  );
}

export default App;
