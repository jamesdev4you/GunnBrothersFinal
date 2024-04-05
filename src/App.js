import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
import Blog from './components/Blogs/Blog';
import SingleBlog from './components/Blogs/singleBlog/SingleBlog';
import CategoryBlogs from './components/Blogs/categoryBlogs/CategoryBlogs';
import Newsletter from './components/Newsletter/Newsletter';
import FAQ from './components/FAQ/FAQ';
import Services from './components/Services/Services';
import ServicesCategoty from './components/ServicesCategory/ServicesCategoty';
import Contact from './components/Contact/Contact';
import PriceEstimate from './components/PriceEstimate/PriceEstimate';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#011638',
    },
    secondary: {
      main: '#FFFFFF',
    },
    error: {
      main: '#2F4550',
    },
    warning: {
      main: '#E9F4F3',
    },
    info: {
      main: '#FFBD00',
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
        <Route path='/about' element={<About />} />
        <Route path='/blog' element={<Blog> </Blog>} />
        <Route path='/blog/:slug' element={<SingleBlog> </SingleBlog>} />{' '}
        <Route
          path='/blog/category/:categorySlug'
          element={<CategoryBlogs> </CategoryBlogs>}
        />{' '}
        <Route path='/newsletter' element={<Newsletter />} />
        <Route path='/faq' element={<FAQ />} />
        <Route path='/services' element={<Services />} />
        <Route
          path='/services/:slug'
          element={<ServicesCategoty> </ServicesCategoty>}
        />{' '}
        <Route path='/contact' element={<Contact />} />
        <Route path='/priceestimate' element={<PriceEstimate />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
