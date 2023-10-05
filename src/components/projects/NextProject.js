import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

import { Link, Typography } from "@mui/material";
import IconButton from '@mui/material/IconButton';

import { covers } from '../../components/Covers';
import FadeIn from "../../containers/style/FadeIn";
import MultiFormatPhoto from "../photos/MultiFormatPhoto";
import { shadowColor } from "../../utils/colors";

const PREFIX = 'NextProject';

const classes = {
  blurDiv: `${PREFIX}-blurDiv`,
  wrapper: `${PREFIX}-wrapper`,
  next: `${PREFIX}-next`,
  rootIconButton: `${PREFIX}-rootIconButton`,
  link: `${PREFIX}-link`
};

const Root = styled('div')(() => ({
  [`& .${classes.blurDiv}`]: {
    width: "100%",
    minWidth: '100vw',
    objectPosition: props => (props.name === 'datette') ? '-2em -2.5em' : (props.name === 'bokiem' || props.name === 'stalue') ? "0px -15rem" : "unset",
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
      objectPosition: props => (props.name === 'datette') ? "-14em -2.5em" : "0px 0rem",
      minWidth: props => (props.name === 'datette') ? '150vh' : (props.name === 'f1app') ? '200vw' : '100vw',
    },
  },

  [`& .${classes.wrapper}`]: {
    height: "30vh",
    width: "100%",
    overflow: "hidden",
    boxShadow: `0px 3px 10px 3px ${shadowColor}`,
    '@media (max-width:600px)': {
      height: "20vh",
    }
  },

  [`& .${classes.next}`]: {
    marginTop: "2em",
    paddingBottom: "0.5em",
  },

  [`& .${classes.rootIconButton}`]: {
    "&:hover": {
      background: "transparent",
    }
  },

  [`& .${classes.link}`]: {
    padding: 0,
  }
}));

export default function NextProject(props) {


  const name = props.name;


  let nextProject = null;
  if (name === 'stalue') {
    nextProject = 'bokiem'
  } else if (name === 'bokiem') {
    nextProject = 'datette'
  } else if (name === 'datette') {
    nextProject = 'f1app'
  } else if (name === 'f1app') {
    nextProject = 'stalue'
  }

  const photosPath = `/projects/${nextProject}`

  return (
    (<Root>
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
    </Root>)
  );
}

NextProject.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
};