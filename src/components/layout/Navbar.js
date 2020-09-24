import React from "react";

import LogoMorph from "../Logo/LogoMorph";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { greyColor } from "../../utils/colors";

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
  about: {
    margin: "0 2em",
    '@media (max-width:900px)': {
      margin: "0 1em",
    },
  },
  underline2: { 
    display: "inline-block",
    position: "relative",
    borderBottom: "2px solid rgba(0, 0, 0, 0)",
    fontSize: "1em",
    color: greyColor,
    textTransform: "none",
    '@media (max-width:767px)': {
      fontSize: "unset",
    },
    "&:before": {
      content: "''",
      display: "block",
      position: "absolute",
      bottom: "-2px",
      left: "0",
      height: "5px",
      width: "100%",
      //background: "linear-gradient(-90deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
      background: "linear-gradient(-90deg, #FF9F79, #E5A4ED, #B684F1, #B0C0F4)",
      backgroundSize: "400% 400%",
      animation: "$gradient 5s ease infinite",
      transformOrigin: "right top",
      transform: "scale(0, 1)",
      transition: "color 0.1s, transform 0.3s ease-out",
    },
    "&:hover:before": {
      transformOrigin: "left top",
      transform: "scale(1, 1)",
    }
  },
  "@keyframes gradient": {
    "0%": {
      backgroundPosition: "0% 50%",
    },
    "50%": {
      backgroundPosition: "100% 50%",
    },
    "100%": {
      backgroundPosition: "0% 50%",
    }
  }
}));

export default function Navbar() {
  const classes = useStyles(); 

    return (
      <React.Fragment>
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
                    <LogoMorph />
                  </Link>
                </div>
                <div className={classes.navRight}>
                  <Link href="/#projects" style={{ textDecoration: 'none'}} color="secondary" rel="noopener noreferrer">
                    <Typography 
                      variant="button" 
                      className={classes.underline2}
                    >
                      Projects
                    </Typography> 
                  </Link>
                  <Link href="/#about" style={{ textDecoration: 'none'}} color="secondary" rel="noopener noreferrer">
                    <Typography 
                      variant="button" 
                      className={`${classes.underline2} ${classes.about}`}
                      >
                      About me
                    </Typography> 
                  </Link>
                  <Link href="/#contact" style={{ textDecoration: 'none'}} color="secondary" rel="noopener noreferrer">
                    <Typography 
                      variant="button" 
                      className={classes.underline2}
                    >
                      Contact
                    </Typography> 
                  </Link>
                </div>
              </Toolbar>
            </Container>
          </AppBar>
        </div>
      </React.Fragment>
    )       
  }