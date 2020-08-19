import React from "react";

import { isMobile, isMobileOnly } from 'react-device-detect';
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
    alignItems: "center",
    margin: "2em",
    padding: "2em",
    '@media (max-width:1025px)': {
      flexWrap: "wrap",
    },
  },
  containerMobile: {
    '@media (max-width:800px)': {
      flexWrap: "wrap",
      margin: "1em",
      padding: "0em",
    },
  },
  trailsContainer: {
    margin: "2em auto",
  },
  text: {
    maxWidth: isMobileOnly? "none" : "50vw",
  },
  illustration: {
     overflow: "hidden",
     textAlign: "center",
  },
}));

export default function Main() {
  const classes = useStyles();

  const illustration = <SVG src={process.env.PUBLIC_URL + "/icons/example-full.svg"} />

  return (
    <>
      <div className={isMobileOnly ? classes.containerMobile : classes.container}>
        <div className={classes.text}>
          <Container maxWidth="lg" className={classes.trailsContainer}>
            <Trails />
          </Container>
        </div>
        <div className={classes.illustration}>
          {isMobile ? illustration : <Illustration />}
        </div>
      </div>
    </>
  )       
}