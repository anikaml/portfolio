import React from "react";
//import { Link as RouterLink} from 'react-router-dom';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';

import NavLink from "../navbar/NavLink";
import LogoMotion from "../Logo/LogoMotion";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  navRight: {
    display: "flex",
  },
  button: {
    borderRadius: "25px",
    fontSize: "2em"
  },
  logoDiv: {
    display: "flex",
    alignItems: "center",
    // animationName: '$meltEnter',
    // animation: '2s meltEnter'
  },
  rootIconButton: {
    "&:hover": {
      background: "transparent",
    }
  },
//   meltEnter: { 
//     animationName: '$meltEnter',
//     animation: '2s meltEnter',
//     '&:hover': {
//       //backgroundColor: '#f36',
//       cursor: "pointer",
//       animationPlayState: "running",
//       animationName: '$meltEnter, $meltLeave',
//       animation: 'meltEnter 2s ease-in alternate, meltLeave 4s ease-out 2s alternate',
//     },
//   },
//   meltLeave: {
//     animationName: '$meltLeave',
//     animation: '2s meltLeave'
//   },
//   '@keyframes meltEnter': {
//     '0%': {
//       clipPath: "path('M0 -0.12C8.33 -8.46 16.67 -12.62 25 -12.62C37.5 -12.62 35.91 0.15 50 -0.12C64.09 -0.4 62.5 -34.5 75 -34.5C87.5 -34.5 87.17 -4.45 100 -0.12C112.83 4.2 112.71 -17.95 125 -18.28C137.29 -18.62 137.76 1.54 150.48 -0.12C163.19 -1.79 162.16 -25.12 174.54 -25.12C182.79 -25.12 191.28 -16.79 200 -0.12L200 -34.37L0 -34.37L0 -0.12Z')"
//     },
//     '100%': {
//       clipPath: "path('M0 199.88C8.33 270.71 16.67 306.13 25 306.13C37.5 306.13 35.91 231.4 50 231.13C64.09 230.85 62.5 284.25 75 284.25C87.5 284.25 87.17 208.05 100 212.38C112.83 216.7 112.71 300.8 125 300.47C137.29 300.13 137.76 239.04 150.48 237.38C163.19 235.71 162.16 293.63 174.54 293.63C182.79 293.63 191.28 262.38 200 199.88L200 0.13L0 0.13L0 199.88Z')"
//     }
//   },
//   '@keyframes meltLeave': {
//     '0%': {
//       clipPath: "path('M0 0C8.33 -8.33 16.67 -12.5 25 -12.5C37.5 -12.5 36.57 -0.27 50 0C63.43 0.27 62.5 -34.37 75 -34.37C87.5 -34.37 87.5 -4.01 100 0C112.5 4.01 112.38 -18.34 125 -18.34C137.62 -18.34 138.09 1.66 150.48 0C162.86 -1.66 162.16 -25 174.54 -25C182.79 -25 191.28 -16.67 200 0L200 200L0 200L0 0Z')"
//     },
//     '100%': {
//       clipPath: "path('M0 200C8.33 270.83 16.67 306.25 25 306.25C37.5 306.25 36.57 230.98 50 231.25C63.43 231.52 62.5 284.38 75 284.38C87.5 284.38 87.5 208.49 100 212.5C112.5 216.51 112.38 300.41 125 300.41C137.62 300.41 138.09 239.16 150.48 237.5C162.86 235.84 162.16 293.75 174.54 293.75C182.79 293.75 191.28 262.5 200 200L200 200L0 200L0 200Z')"
//     }
// }
}));

export default function Navbar() {
  const classes = useStyles(); 

    return (
      <>
        <div className={classes.root}>
          <AppBar 
            position="static"
            color="transparent"
            elevation={0}
            className={classes.appbar}
          >
            <Container maxWidth="lg">
              <Toolbar className={classes.toolbar}>
                <div className={classes.meltEnter}>
                  <IconButton 
                    aria-label="home"
                    component={Link}
                    href="/"
                    disableRipple
                    disableTouchRipple
                    classes={{
                      'root': classes.rootIconButton,
                    }}
                  >
                    <LogoMotion />
                  </IconButton>
                </div>
                <div className={classes.navRight}>
                  <NavLink title='Projects' />
                  <NavLink title='About' middle/>
                  <NavLink title='Contact' />
                </div>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      </>
    )       
  }