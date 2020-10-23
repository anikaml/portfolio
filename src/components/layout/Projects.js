import React from 'react';
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography
} from '@material-ui/core/';

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
    //margin: "1em 0",
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
    // padding: '4em'
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
    //fontWeight: 400,
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
  // mainDiv: {
  //   width: '30rem',
  //   height: 'auto',
  //   margin: '2em',
  // }
}));

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
                <Link
                  href={`/${covers[project].name}`}
                  style={{textDecoration: 'none'}}
                  rel="noopener noreferrer"
                >
                  <FadeIn>
                    <Banner
                      url={`/projects/${project}/${covers[project].url1}`}
                      className={classes.banner}
                    />
                  </FadeIn>
                </Link>
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
                    <Typography className={classes.details}>
                      View details
                    </Typography>
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

