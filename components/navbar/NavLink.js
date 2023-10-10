import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { keyframes } from "@emotion/react";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { MOBILE } from "../../utils/constants";

const PREFIX = 'NavLink';

const classes = {
  about: `${PREFIX}-about`,
  underline: `${PREFIX}-underline`
};

const gradient = keyframes({
  '0%': {
    backgroundPosition: "0% 50%",
  },
  '50%': {
    backgroundPosition: "100% 50%",
  },
  '100%': {
    backgroundPosition: "0% 50%",
  }
})

const StyledLink = styled(Link)((
  {
    theme
  }
) => ({
  [`& .${classes.about}`]: {
    margin: "0 2em",
    [`@media (max-width:${MOBILE})`]: {
      margin: "0 1em",
    },
  },

  [`& .${classes.underline}`]: {
    display: "inline-block",
    position: "relative",
    borderBottom: "2px solid rgba(0, 0, 0, 0)",
    color: theme.palette.primary.dark,
    textTransform: "none",
    '@media (max-width:767px)': {
      fontSize: 18,
    },
    '@media (max-width:300px)': {
      fontSize: 14,
    },
    "&:before": {
      content: "''",
      display: "block",
      position: "absolute",
      bottom: "-2px",
      left: "0",
      height: "5px",
      width: "100%",
      background: "linear-gradient(-90deg, #FF9F79, #E5A4ED, #B684F1, #B0C0F4)",
      backgroundSize: "400% 400%",
      animation: `${gradient} 5s ease infinite`,
      transformOrigin: "right top",
      transform: "scale(0, 1)",
      transition: "color 0.1s, transform 0.3s ease-out",
    },
    "&:hover:before": {
      transformOrigin: "left top",
      transform: "scale(1, 1)",
    }
  }
}));

export default function NavLink(props) {


  return (
    <StyledLink
      href={props.title === 'About' ? '/about' : `/#${props.title.toLowerCase()}`}
      style={{ textDecoration: 'none' }}
      rel="noopener noreferrer"
    >
      <Typography
        variant="button"
        className={props.middle ? `${classes.underline} ${classes.about}` : `${classes.underline}`}
      >
        {props.title}
      </Typography>
    </StyledLink>
  );
}

NavLink.propTypes = {
  middle: PropTypes.bool,
  title: PropTypes.string.isRequired,
};