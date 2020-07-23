import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Paper } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import { shadowColor, darkGreyColor } from "../../utils/colors";


const useStyles = makeStyles(() => ({
  paper: {
    width: "fit-content",
    maxWidth: "9em",
    borderRadius: 15,
    boxShadow: `0px 3px 10px 3px ${shadowColor}`,
    margin: "0em 1em",
    paddingBottom: "1em",
    //boxShadow: `0px 3px 1px -2px ${shadowColor}, 0px 2px 2px 0px ${shadowColor}, 0px 1px 5px 0px ${shadowColor}`,
  },
  background: {
    height: "6em",
    width: "9em",
    borderRadius: "15px 15px 0px 0px",
    marginBottom: "1em",
  },
  colorText: {
    letterSpacing: 4,
    color: darkGreyColor,
  }
}))

export default function ColorSwatch(props) {
  
  const classes = useStyles();
  
  return (
    <>
      <Paper
        elevation={3}
        className={props.className ? props.className : classes.paper}
      >
        <div
          className={classes.background}
          style={{backgroundColor: covers[props.index][props.colorNumber]}}
        />
        <Typography
          variant="captcha"
          className={classes.colorText}
        >
          {covers[props.index][props.colorNumber]}
        </Typography>
      </Paper>
    </>
  )
}

ColorSwatch.propTypes = {
  index: PropTypes.number.isRequired,
  colorNumber: PropTypes.string.isRequired,
};