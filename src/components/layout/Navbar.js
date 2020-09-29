import React from "react";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import NewLogo from "../Logo/NewLogo";
import NavLink from "../navbar/NavLink";

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
                <div className={classes.logoDiv}>
                  <Link
                    href="/"
                    style={{ textDecoration: 'none'}}
                    color="secondary"
                    rel="noopener noreferrer"
                  >
                    <NewLogo />
                  </Link>
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