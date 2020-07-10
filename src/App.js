import React from 'react';

import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ParallaxProvider } from 'react-scroll-parallax';

import Routes from './Routes';
import theme from './utils/theme';

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <ParallaxProvider>
          <CssBaseline />
          <Routes />
        </ParallaxProvider>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
