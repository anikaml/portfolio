import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

import { motion } from "framer-motion";

import { shadowColor } from "../../utils/colors";
import { Typography } from "@mui/material";

const PREFIX = 'MySwitch';

const classes = {
  switchDiv: `${PREFIX}-switchDiv`,
  switch: `${PREFIX}-switch`,
  circle: `${PREFIX}-circle`
};

const Root = styled('div')(() => ({
  [`&.${classes.switchDiv}`]: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "2em",
  },

  [`& .${classes.switch}`]: {
    width: '8rem',
    height: '4rem',
    backgroundColor: shadowColor,
    display: 'flex',
    borderRadius: 50,
    padding: 10,
    cursor: 'pointer',
    margin: '0 1em',
  },

  [`& .${classes.circle}`]: {
    width: '3em',
    height: '3em',
    backgroundColor: 'white',
    borderRadius: "50%",
  }
}));

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default function MySwitch(props) {


  return (
    <Root className={classes.switchDiv}>
      <Typography>Mobile</Typography>
      <div
        className={classes.switch}
        style={{ justifyContent: props.toggle ? 'flex-start' : 'flex-end' }}
        onClick={props.toggleSwitch}
      >
        <motion.div className={classes.circle} layout transition={spring} />
      </div>
      <Typography>Web</Typography>
    </Root>
  );
}

MySwitch.propTypes = {
  toggle: PropTypes.bool.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
};