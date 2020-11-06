import React from 'react';
import PropTypes from "prop-types";

import { motion } from "framer-motion";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core/';
import IconButton from '@material-ui/core/IconButton';

import Banner from '../projects/Banner';
import { covers } from '../Covers';
import SectionTitle from './SectionTitle';
import FadeIn from '../../containers/style/FadeIn';
import { greyColor } from '../../utils/colors';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2em",
    '@media (max-width:900px)': {
      margin: 0,
    },
  },
  banner: {
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
  },
  parallaxDiv: {
    width: "90vw",
    margin: "1em 0",
    overflow: "hidden",
    '@media (max-width:900px)': {
      height: "30vh",
    },
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      height: "30vh",
    },
  },
  text: {
    width: '90vw',
    paddingRight: "0.5em",
    color: theme.palette.primary.dark,
    display: 'inline',
    '@media (max-width:900px)': {
      display: 'inline-block',
    },
  },
  details: {
    display: 'inline',
    color: greyColor,
    '@media (max-width:900px)': {
      display: 'inline-block',
      marginTop: "0.25em",
    },
  },
  arrowDiv: {
    display: "inline-flex",
    alignItems: 'center',
  },
  "@keyframes run": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      transform: 'translateZ(3em)',
    }
  },
  loader: {
    overflow: 'visible',
    stroke: greyColor,
    strokeWidth: 0.5,
    height: 'auto',
    paddingLeft: '1em',
    cursor: 'pointer',
  },
  iconButton: {
    width: '100%',
    padding: 0,
  },
  rootIconButton: {
    "&:hover": {
      background: "transparent",
    }
  },
}));

const d = "M73.77,34.02,85.23,45.48H.68v5.04H85.23L73.77,61.98l3.57,3.57L94.88,48,77.34,30.45Z"

export default function Projects() {
  const classes = useStyles();
  
  return (
    <>
     <SectionTitle id="projects" title="Projects"/>
      <div className={classes.container}>
        <div  className={classes.containerDiv}>
          {Object.keys(covers).map(project => 
            <div key={covers[project].name} style={{paddingBottom: "1em"}} className={classes.mainDiv}>
              <div
                className={classes.parallaxDiv}
              >
                <IconButton 
                  aria-label="project"
                  component={Link}
                  href={`/${covers[project].name}`}
                  disableRipple
                  disableTouchRipple
                  className={classes.iconButton}
                  classes={{
                    'root': classes.rootIconButton,
                  }}
                >
                  <Banner
                    url={`/projects/${project}/${covers[project].url1}`}
                    className={classes.banner}
                  />
                </IconButton>
              </div>
              <>
                <FadeIn>
                  <Link
                    href={`/${covers[project].name}`}
                    style={{textDecoration: 'none'}}
                    rel="noopener noreferrer"
                  >
                    <Typography variant="h6" className={classes.text}>
                      {covers[project].project}
                    </Typography>
                  </Link>
                </FadeIn>
                <FadeIn>
                  <Link
                    href={`/${covers[project].name}`}
                    style={{textDecoration: 'none'}}
                    rel="noopener noreferrer"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 1.1 }}
                      className={classes.arrowDiv}
                    >
                      <Typography className={classes.details}>
                        View details
                      </Typography>
                      <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"50px"}
                        height={"50px"}
                        viewBox="0 0 96 96"
                        className={classes.loader}
                        whileTap={{x: [0, 30]}}
                      >
                        <motion.path
                          d={d}
                          transition={{
                            duration: 1,
                            ease: "easeInOut",
                          }}
                          fill={greyColor}
                        />
                      </motion.svg>
                    </motion.div>
                  </Link>
                </FadeIn>
              </>
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

