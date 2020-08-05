import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from "@material-ui/core";

import { covers } from '../../components/Covers';
import FadeIn from "../../containers/style/FadeIn";

const useStyles = makeStyles(() => ({
  nextProject: {
    margin: "1em 0",
    zIndex: "1",
  },
  typography: {
    zIndex: "9999",
    position: "absolute",
    opacity: 1,
    height: "30vh",
    width: "100%",
    textAlign: "center",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    left: 0,
    right: 0,
    filter: "blur(0px)",
    transition: "all .5s ease-in-out",
  },
  blurDiv: {
    height: "30vh",
    width: "100%",
    position: "relative",
    display: "block",
    left: 0,
    right: 0,
    zIndex: "1",
    transition: "all .2s ease-in-out",
    filter: "blur(4px)",
    overflow: "hidden",
    backgroundPosition: "center",
    backgroundSize: "cover",
    '&:hover': {
      transform: "scale(1.05)",
      filter: "blur(0px)",
      transition: "0.6s all ease-in-out",
    },
    '@media (max-width:600px)': {
      filter: "blur(0px)",
    },
  },
  wrapper: {
    height: "30vh",
    width: "100%",
    overflow: "hidden",
  },
  next: {
    marginTop: "2em",
    paddingBottom: "0.5em",
  }
}))

export default function NextProject(props) {
  
  const classes = useStyles();
  const name = props.name;

  let nextProject = null;
  if (name === 'stalue') {
    nextProject = 'bokiem'
  } else if (name === 'bokiem') {
    nextProject = 'datette'
  } else if (name === 'datette') {
    nextProject = 'stalue'
  }
  
  return (
    <>
      <FadeIn>
        <Typography variant="h6" className={classes.next}>
          Next Project
        </Typography>
        <div className={classes.wrapper}>
          <Link
            href={`/${covers[nextProject].name}`}
            style={{textDecoration: 'none'}}
            rel="noopener noreferrer"
            className={classes.link}
          >
            <div className={classes.blurDiv} style={{backgroundImage: `url(${covers[nextProject].url1})`,}}/>
          </Link>
        </div>
      </FadeIn>
    </>
  )
}

NextProject.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
};