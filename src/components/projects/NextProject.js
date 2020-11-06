import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';

import { covers } from '../../components/Covers';
import FadeIn from "../../containers/style/FadeIn";
import MultiFormatPhoto from "../photos/MultiFormatPhoto";

const useStyles = makeStyles(() => ({
  blurDiv: {
    width: "100%",
    objectPosition: props => (props.name === 'datette')? "unset": "0px -15rem",
    zIndex: "1",
    transition: "all .2s ease-in-out",
    filter: "blur(4px)",
    overflow: "hidden",
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
  },
  rootIconButton: {
    "&:hover": {
      background: "transparent",
    }
  },
  link: {
    padding: 0,
  }
}))

export default function NextProject(props) {
  
  const classes = useStyles(props);
  const name = props.name;
  

  let nextProject = null;
  if (name === 'stalue') {
    nextProject = 'bokiem'
  } else if (name === 'bokiem') {
    nextProject = 'datette'
  } else if (name === 'datette') {
    nextProject = 'stalue'
  }

  const photosPath = `/projects/${nextProject}/`
  
  return (
    <>
      <FadeIn>
        <Typography variant="h6" className={classes.next}>
          Next Project
        </Typography>
        <div className={classes.wrapper}>
          <IconButton 
            aria-label="next-project"
            component={Link}
            href={`/${covers[nextProject].name}`}
            disableRipple
            disableTouchRipple
            className={classes.link}
            classes={{
              'root': classes.rootIconButton,
            }}
          >
            <MultiFormatPhoto
              alt="next-project"
              className={classes.blurDiv}
              url={covers[nextProject].url1}
              photoPath={photosPath}
            />
          </IconButton>
        </div>
      </FadeIn>
    </>
  )
}

NextProject.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
};