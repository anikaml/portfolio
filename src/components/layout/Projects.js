import React from 'react';
import PropTypes from "prop-types";
//import { Parallax } from 'react-scroll-parallax';
//import Flight, { Oval, Rect } from "react-flight/dom";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { isMobileOnly } from 'react-device-detect';


//import SVG from 'react-inlinesvg';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core/';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    display: "flex",
    justifyContent: "center", 
    alignItems: "center",
    flexWrap: "wrap",
    margin: "2em",
  },
  text: {

  },
  title: {
    color: "rgb(238, 238, 238)",
    marginBottom: "1em",
  }
}));

export default function Projects() {
  const classes = useStyles();
  
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <div >
          <Parallax x={[-500, 0]} >
            <Typography variant="h1" className={classes.title}>
              Projects
            </Typography>
          </Parallax>
        </div>
        {/* <img src={process.env.PUBLIC_URL + "/projects/stalue/mockup-1500x500.png"} alt="Stalue"></img> */}
        <ParallaxBanner
          className={classes.banner}
          layers={[
            {
              image: process.env.PUBLIC_URL + "/projects/stalue/mockup-1500x500.png",
              amount: 0.2,
            },
            // {
            //   image: process.env.PUBLIC_URL + "/icons/wave2.svg",
            //   amount: isMobileOnly ? (-0.2) : (-0.1),
            // },
            // {
            //   image: process.env.PUBLIC_URL + "/icons/wave3.svg",
            //   amount: 0.4,
            // },
          ]}
          style={{margin: "0 auto"}}
        >
        </ParallaxBanner>
      </Container>
    
    </>
  )       
  
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

