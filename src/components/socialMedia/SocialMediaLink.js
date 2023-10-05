import React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

import { isMobile } from 'react-device-detect';

import { Link, Typography } from '@mui/material/';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import FadeIn from '../../containers/style/FadeIn';

const PREFIX = 'SocialMediaLink';

const classes = {
  typography: `${PREFIX}-typography`,
  whiteText: `${PREFIX}-whiteText`
};

const StyledFadeIn = styled(FadeIn)((
  {
    theme
  }
) => ({
  [`& .${classes.typography}`]: {
    fontWeight: 600,
    display: "inline-block",
    padding: "0.15em 0",
    transition: 'all .2s ease-in-out',
    letterSpacing: 3,
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },

  [`& .${classes.whiteText}`]: {
    color: theme.palette.primary.contrastText,
    WebkitTextStroke: `1px ${theme.palette.primary.dark}`,
    padding: '0 0.1em'
  }
}));

export default function SocialMediaLink(props) {

  return (
    <StyledFadeIn>
      <Link
        href={props.href}
        style={{ textDecoration: 'none' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography variant={isMobile ? "h4" : "h3"} className={props.className ? props.className : `${classes.typography} ${classes.whiteText}`}>
          {props.name === 'GitHub' ? <GitHubIcon /> : <LinkedInIcon />}
          {props.iconOnly ? null : ` ${props.name}`}
        </Typography>
      </Link>
    </StyledFadeIn>
  );
}

SocialMediaLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  iconOnly: PropTypes.bool
};