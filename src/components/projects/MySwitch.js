import React from "react";
import PropTypes from "prop-types";

import { motion } from "framer-motion";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { shadowColor } from "../../utils/colors";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  switchDiv: {
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: "2em",
  },
  switch: {
    width: '8rem',
    height: '4rem',
    backgroundColor: shadowColor,
    display: 'flex',
    borderRadius: 50,
    padding: 10,
    cursor: 'pointer',
    margin: '0 1em',
  },
  circle: {
    width: '3em',
    height: '3em',
    backgroundColor: 'white',
    borderRadius: "50%",
  }
}))

const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
};

export default function MySwitch(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.switchDiv}>
      <Typography>Mobile</Typography>
      <div
        className={classes.switch}
        style={{justifyContent: props.toggle ? 'flex-start' : 'flex-end'}}
        onClick={props.toggleSwitch}
      >
        <motion.div className={classes.circle} layout transition={spring} />
      </div>
      <Typography>Web</Typography>
    </div>
  )
}

MySwitch.propTypes = {
  toggle: PropTypes.bool.isRequired,
  toggleSwitch: PropTypes.func.isRequired,
};