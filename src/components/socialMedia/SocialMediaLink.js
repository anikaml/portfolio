import React from 'react';
import PropTypes from "prop-types";

import { isMobile } from 'react-device-detect';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Link, Typography } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import FadeIn from '../../containers/style/FadeIn';

const useStyles = makeStyles((theme) => ({
  typography: {
    fontWeight: 600,
    display: "inline-block",
    padding: "0.15em 0",
    transition: 'all .2s ease-in-out',
    letterSpacing: 3,
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  whiteText: {
    color: theme.palette.primary.contrastText,
    WebkitTextStroke: `1px ${theme.palette.primary.dark}`,
  },
}));

export default function SocialMediaLink(props) {
  const classes = useStyles();
  
  return (
    <FadeIn>
      <Link 
        href={props.href}
        style={{ textDecoration: 'none'}}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant={isMobile? "h4" : "h3"} className={`${classes.typography} ${classes.whiteText}`}>
          {props.name === 'GitHub' ? <GitHubIcon /> : <LinkedInIcon />} {props.name}
        </Typography>
      </Link>
    </FadeIn>
  )
}

SocialMediaLink.propTypes = {
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};