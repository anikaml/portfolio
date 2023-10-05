import React from 'react';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';

import AppRoutes from './Routes';
import theme from './utils/theme';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ParallaxProvider>
          <CssBaseline />
          <Navbar />
          <AppRoutes />
          <Footer />
        </ParallaxProvider>
      </div>
    </ThemeProvider>
  );
}

export default App;
