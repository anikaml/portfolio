import React from "react";

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
  },
  rootIconButton: {
    "&:hover": {
      background: "transparent",
    }
  },
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