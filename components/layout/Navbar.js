import React from "react";
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Toolbar from '@mui/material/Toolbar';
import NavLink from "../navbar/NavLink";
import LogoMotion from "../logo/LogoMotion";

const PREFIX = 'Navbar';

const classes = {
  root: `${PREFIX}-root`,
  toolbar: `${PREFIX}-toolbar`,
  navRight: `${PREFIX}-navRight`,
  rootIconButton: `${PREFIX}-rootIconButton`
};

const Root = styled('div')(() => ({
  [`& .${classes.root}`]: {
    flexGrow: 1,
  },

  [`& .${classes.toolbar}`]: {
    display: "flex",
    justifyContent: "space-between",
  },

  [`& .${classes.navRight}`]: {
    display: "flex",
  },

  [`& .${classes.rootIconButton}`]: {
    "&:hover": {
      background: "transparent",
    }
  }
}));

export default function Navbar() {

  return (
    (<Root>
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
                <NavLink title='About' middle />
                <NavLink title='Contact' />
              </div>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </Root>)
  );
}