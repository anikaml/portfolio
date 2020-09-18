import React from "react";

import { isMobile } from 'react-device-detect';
import SVG from 'react-inlinesvg';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core/';
import Illustration from "./Illustration";
import Trails from './Trails';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center", 
    //alignItems: "center",
    margin: "2em",
    padding: "4em 2em",
    //backgroundColor: "#f7faff",
    '@media (max-width:900px)': {
      flexWrap: "wrap",
    },
  },
  containerMobile: {
    '@media (max-width:900px)': {
      flexWrap: "wrap",
      margin: "1em",
      padding: "0em",
    },
  },
  trailsContainer: {
    margin: "2em auto",
    paddingLeft: "4em",
    
    '@media (max-width:900px)': {
      height: "unset",
      padding: 0,
      margin: "2em",
      width: "auto",
    },
  },
  text: {
    //maxWidth: isMobileOnly? "none" : "50vw",
  },
  illustration: {
    overflow: "hidden",
    textAlign: "center",
  },
  icon: {
    maxWidth: "-webkit-fill-available",
    height: "auto",
  }
}));

export default function Main() {
  const classes = useStyles();

  const illustration = (<SVG 
                          src={process.env.PUBLIC_URL + "/icons/illustration_mobile.svg"} 
                          className={classes.icon}
                        />)

  return (
    <div className={isMobile ? classes.containerMobile : classes.container}>
      <div className={classes.text}>
        <Container maxWidth="lg" className={classes.trailsContainer}>
          <Trails />
        </Container>
      </div>
      <div className={classes.illustration}>
        {isMobile ? illustration : <Illustration />}
      </div>
    </div>
  )       
}