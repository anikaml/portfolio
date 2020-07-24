import React from 'react';
import PropTypes from "prop-types";

import { Parallax } from 'react-scroll-parallax';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link, Typography } from '@material-ui/core/';

import Banner from '../projects/Banner';
import { covers } from '../Covers';

const useStyles = makeStyles(() => ({
  container: {
    margin: "2em auto",
  },
  title: {
    color: "white",
    textShadow: "1px 2px 3px #eee, 0 0 0 #000, 1px 2px 3px #eee",
    caretColor:"#262626",
    fontWeight: 700,
  },
  banner: {
    margin: "1em 0",
    position: "relative",
    display: "block",
    height: "50vh",
    overflow: "hidden",
    transition: "all .2s ease-in-out",
    '&:hover': {
      transform: "scale(1.05)",
      transition: "0.6s all ease-in-out",
    }
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
    overflow: "hidden",
    height: "50vh",
  },
}));

export default function Projects() {
  const classes = useStyles();
  
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
        <div  className={classes.containerDiv}>
          {Object.keys(covers).map(project => 
            <div
              key={covers[project].name}
              className={classes.parallaxDiv}
            >
              <Link
                href={`/${covers[project].name}`}
                style={{textDecoration: 'none'}}
                rel="noopener noreferrer"
              >
                <Banner
                  url={covers[project].url1}
                  height="50vh"
                  className={classes.banner}
                />
              </Link>
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

