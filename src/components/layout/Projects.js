import React, { useState }  from 'react';
import PropTypes from "prop-types";
//import { Parallax } from 'react-scroll-parallax';
//import Flight, { Oval, Rect } from "react-flight/dom";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
//import { isMobileOnly } from 'react-device-detect';


//import SVG from 'react-inlinesvg';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

import { Container, Typography } from '@material-ui/core/';


const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  container: {
    // display: "flex",
    // justifyContent: "center", 
    // alignItems: "center",
    // flexWrap: "wrap",
    margin: "2em auto",
    //background: "#EEF0F4",
  },
  text: {

  },
  title: {
    color: "white",
    //"-webkit-text-stroke": "1px rgba(0,0,0,0.06)",
    //textShadow: "-10px -10px 10px 0 #F0F0F3, 10px 10px 10px 0 #AEAEC0",
    //textShadow: "-8px -8px 12px #e0e5eb, 8px 8px 12px rgba(0,0,0,0.08)",
    //textShadow: "2px 2px 3px rgba(255,255,255,0.1)",
    textShadow: "1px 2px 3px #eee, 0 0 0 #000, 1px 2px 3px #eee",
    caretColor:"#262626",
    fontWeight: 700,
  },
  div: {
    position: "absolute",
    transform: "translate(-50%,-50%)",
    top: "50%",
    left: "50%",
    fontSize: 150,
    color: "#e0e5eb",
    textShadow: "-8px -8px 12px rgba(255,255,255,0.4), 8px 8px 12px rgba(0,0,0,0.08)",
    caretColor:"#262626",
    outline: "none",
   
    //boxShadow: "inset 9.91px 9.91px 15px #D9DADE, inset -9.91px -9.91px 15px #FFFFFF",
  },
  banner: {
    margin: "1em 0",
    position: "relative",
    // '&:hover, &.hidden' : {
    //   //filter: "blur(2px)",
    //   visibility: "visible",
    //   opacity: 1,
    // }
    
  },
  hidden: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(29, 106, 154, 0.72)",
    color: "#fff",
    visibility: "hidden",
    opacity: 0,

    /* transition effect. not necessary */
    transition: "opacity .2s, visibility .2s",
  },
  //'banner:hover .hidden': { visibility: "visible", opacity: 1,},
  inside: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "rgba(29, 106, 154, 0.72)",
    color: "#fff",
    visibility: "visible",
    opacity: 1,
    transition: "opacity .2s, visibility .2s",
  },
  containerDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",
    flexWrap: "wrap",
  },
  parallaxDiv: {
    width: "100%",
    '&:hover': {
      filter: "blur(2px)",
    }
  },
}));



export default function Projects() {
  const classes = useStyles();
  // const [hovered, setHovered] = useState(false);
  const [hovered, setHovered] = useState({
    stalue: false,
    bokiem: false,
    datette: false
  });

  const toggleHover = (element) => {
    setHovered(prev => ({ 
      ...prev,
      [element]: !hovered[element],
  }))
  console.log(hovered)
  };

  const covers = [
    {
      name: "stalue",
      url: "/projects/stalue/mockup-1500x500.png",
    },
    {
      name: "bokiem",
      url: "/projects/bokiem/bokiem_mockup_1.png",
    },
    {
      name: "datette",
      url: "/projects/datette/exploded_mockup_datette_3.png",
    },
  ]
  
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <div id="projects">
          <Parallax x={[-500, 0]} >
            <Typography variant="h1" className={classes.title}>
              Projects
            </Typography>
          </Parallax>
        </div>
        
        {/* <img src={process.env.PUBLIC_URL + "/projects/stalue/mockup-1500x500.png"} alt="Stalue"></img> */}
        <div  className={classes.containerDiv}>
          {Object.keys(covers).map(project => 
            <div
              key={covers[project].name}
              onClick={() => toggleHover(covers[project].name)}
              className={classes.parallaxDiv}
            >
              <ParallaxBanner
                //key={project}
                className={classes.banner}
                layers={[
                  {
                    image: process.env.PUBLIC_URL + covers[project].url,
                    amount: 0.2,
                  },
                ]}
              >
                <Typography variant="h2" className={hovered[(covers[project].name)]? classes.inside : classes.hidden}>Go to {covers[project].name}.com</Typography>
              </ParallaxBanner>
            </div>
          )}
        </div>
      </Container>
    </>
  )       
  
}

Projects.propTypes = {
  classes: PropTypes.object,
};

