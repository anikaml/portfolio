import React, { Component } from "react";
import PropTypes from "prop-types";

//import SVG from 'react-inlinesvg';
// import Logo from "./Logo";
import LogoMorph from "../Logo/LogoMorph";

// Material UI Components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
//import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    //border: `8px solid ${theme.palette.primary.main}`,
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  flowers: {
    width: "400px",
    height: "auto",    
    '@media (max-width:767px)': {
      display: "none",
    },
  },
  bokiem: {
    color: theme.palette.primary.main,
    fontWeight: 500,
    fontSize: '1.25rem',
    letterSpacing: "1px",
    marginLeft: "1em",
    paddingBottom: "0.15em",
    '@media (max-width:767px)': {
      display: "none",
    },
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
    margin: "0 1em",
  },
  // underline: { // from left to right and back
  //   display: "inline-block",
  //   fontSize: "2em",
  //   textDecoration: "none",
  //   margin: "0 1em",
  //   "&:hover:after": {
  //     width: "100%",
  //   },
  //   "&:after": {
  //     content: "''",
  //     display: "block",
  //     width: "0%",
  //     height: "5px",
  //     background: "blue",
  //     transition: "width .3s",
  //   },
  // },
  // underline1: { // grows from center
  //   position: "relative",
  //   display: "block",
  //   transition: "color 0.1s, background-color 0.1s",
  //   fontSize: "2em",
  //   "&::before": {
  //     content: "''",
  //     display: "block",
  //     position: "absolute",
  //     top: "100%",
  //     height: "5px",
  //     borderRadius: "25px",
  //     width: "100%",
  //     backgroundColor: "blue",
  //     "-webkit-transform-origin": "center top",
  //             transformOrigin: "center top",
  //     "-webkit-transform": "scale(0, 1)",
  //             transform: "scale(0, 1)",
  //     // transition: "color 0.1s, -webkit-transform 0.2s ease-out",
  //     transition: "color 0.1s, transform 0.2s ease-out",
  //     // transition: "color 0.1s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out",
  //   },
  //   "&:active::before": {
  //     backgroundColor: "blue",
  //   },
  //   "&:hover::before": {
  //     "-webkit-transform-origin": "center top",
  //     transformOrigin: "center top",
  //   "-webkit-transform": "scale(1, 1)",
  //     transform: "scale(1, 1)",
  //   },
  //   "&:focus::before": {
  //     "-webkit-transform-origin": "center top",
  //             transformOrigin: "center top",
  //     "-webkit-transform": "scale(1, 1)",
  //             transform: "scale(1, 1)",
  //   }
  // },
  underline2: { 
    display: "inline-block",
    position: "relative",
    borderBottom: "2px solid rgba(0, 0, 0, 0)",
    fontSize: "2em",
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
      // backgroundColor: "blue",
      background: "linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)",
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
  // wave: { // wave underline animation
  //   fontSize: "2em",
  //   paddingBottom: "5px",
  //   animation: "move 15s linear infinite",
  //   animationPlayState: "paused",
  //   textDecoration: "none",
  //   backgroundColor: "transparent",
  //   "-webkit-text-decoration-skip": "objects",
  //   animationName: '$move1',
  //   "&:hover": {
  //     animationPlayState: "running",
  //     background: 'url("https://ewebdesign.com/wp-content/themes/ewebdesign/assets/img/wave.svg")',
  //     //background: 'url("../../public/icons/wave.svg")',
  //     backgroundPositionX: "0%",
  //     backgroundPositionY: "0%",
  //     //backgroundSize: "auto auto",
  //     backgroundRepeat: "repeat-x",
  //     backgroundSize: "25px 20px",
  //     backgroundPosition: "2px 19px",
  //   }
  // },
  // "@keyframes move1": {
  //   "0%": {
  //       backgroundPosition: "2px 19px",
  //     },
  //     "100%": {
  //       backgroundPosition: "500px 19px",
  //     }
  //   }
  
});

class Navbar extends Component {

  render() {
    const { classes } = this.props;    

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
                <LogoMorph />
                  {/* <Link href="/" style={{ textDecoration: 'none'}} color="secondary">
                   
                    <Logo />
                  </Link> */}
                </div>
                <div className={classes.navRight}>
                  <Link href="#projects" style={{ textDecoration: 'none'}} color="secondary">
                    <Typography 
                      color="secondary" 
                      variant="button" 
                      className={classes.underline2}
                    >
                      PROJECTS
                    </Typography> 
                  </Link>
                  <Link href="#about" style={{ textDecoration: 'none'}} color="secondary">
                    <Typography 
                      color="secondary" 
                      variant="button" 
                      className={`${classes.underline2} ${classes.about}`}
                      >
                      ABOUT ME
                    </Typography> 
                  </Link>
                  <Link href="#contact" style={{ textDecoration: 'none'}} color="secondary">
                    <Typography 
                      color="secondary" 
                      variant="button" 
                      className={classes.underline2}
                    >
                      CONTACT
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
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Navbar);