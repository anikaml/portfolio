import React from "react";

import { isMobile } from 'react-device-detect';
import SVG from 'react-inlinesvg';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core/';
import Illustration from "./Illustration";
import Trails from './Trails';
import Scroll from "./Scroll";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center", 
    margin: "2em",
    padding: "4em 2em",
    height: 'calc(100vh - 64px)',
    '@media (max-width:900px)': {
      flexWrap: "wrap",
      height: '100%',
      margin: "1em",
      padding: "2em",
    },
  },
  containerMobile: {
    height: 'calc(100vh - 64px)',
    flexWrap: "wrap",
    margin: "1em",
    padding: "0em",
    flexDirection: 'column',
    justifyContent: 'space-between',
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
  illustration: {
    overflow: "visible",
    textAlign: "center",
    height: "auto",
    maxWidth: '50vw',
  },
  icon: {
    maxWidth: "-webkit-fill-available",
    height: "auto",
    maxHeight: '40vh',
  }
}));

export default function Main() {
  const classes = useStyles();

  const illustration = (<SVG 
                          src={process.env.PUBLIC_URL + "/icons/mobile_full.svg"} 
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
        <Scroll />
    </div>
  )       
}