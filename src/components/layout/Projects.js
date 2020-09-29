import React from 'react';
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core/';

import Banner from '../projects/Banner';
import { covers } from '../Covers';
import SectionTitle from './SectionTitle';

const useStyles = makeStyles(() => ({
  container: {
    margin: "2em",
    '@media (max-width:900px)': {
      margin: 0,
    },
  },
  title: {
    color: "black",
    textShadow: "1px 2px 3px #eee, 0 0 0 #000, 1px 2px 3px #eee",
    caretColor:"#262626",
    fontWeight: 700,
    '@media (max-width:900px)': {
      fontSize: "2.5rem",
    },
  },
  banner: {
    margin: "1em 0",
    display: "block",
    overflow: "hidden",
    transition: "all .2s ease-in-out",
    zIndex: "1",
    '&:hover': {
      transform: "scale(1.05)",
      transition: "0.6s all ease-in-out",
    },
    '@media (max-width:900px)': {
      height: "30vh",
    },
  },
  containerDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center", 
    alignItems: "center",
    flexWrap: "wrap",
    //border: `1px solid ${greyColor}`,
    borderRadius: 15,
    // '@media (max-width:900px)': {
    //   padding: "2em 0em 0em 0em",
    // },
  },
  parallaxDiv: {
    width: "100%",
    overflow: "hidden",
    '@media (max-width:900px)': {
      height: "30vh",
    },
  },
}));

export default function Projects() {
  const classes = useStyles();
  
  return (
    <>
     <SectionTitle id="projects" title="Projects"/>
      <div className={classes.container}>
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
                  url={`/projects/${project}/${covers[project].url1}`}
                  className={classes.banner}
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

Projects.propTypes = {
  classes: PropTypes.object,
};

