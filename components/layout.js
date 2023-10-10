import React from 'react';
import PropTypes from "prop-types";
import CssBaseline from '@mui/material/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';

const Layout = ({ children }) => {
  return (
    <ParallaxProvider>
      <CssBaseline />
      <Navbar />
      <div>
        {children}
      </div>
      <Footer />
    </ParallaxProvider>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
