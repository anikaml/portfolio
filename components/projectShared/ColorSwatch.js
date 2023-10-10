import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

import { Typography, Paper } from '@mui/material/';

import { covers } from '../../components/Covers';
import { shadowColor, darkGreyColor } from "../../utils/colors";

const PREFIX = 'ColorSwatch';

const classes = {
  paper: `${PREFIX}-paper`,
  background: `${PREFIX}-background`,
  colorText: `${PREFIX}-colorText`
};

const Root = styled('div')(() => ({
  [`& .${classes.paper}`]: {
    width: "fit-content",
    maxWidth: "9em",
    borderRadius: 15,
    boxShadow: `0px 3px 10px 3px ${shadowColor}`,
    margin: "0em 1em",
    paddingBottom: "1em",
  },

  [`& .${classes.background}`]: {
    height: "6em",
    width: "9em",
    borderRadius: "15px 15px 0px 0px",
    marginBottom: "1em",
  },

  [`& .${classes.colorText}`]: {
    letterSpacing: 4,
    color: darkGreyColor,
  }
}));

export default function ColorSwatch(props) {



  return (
    (<Root>
      <Paper
        elevation={3}
        className={props.className ? props.className : classes.paper}
      >
        <div
          className={classes.background}
          style={{ backgroundColor: covers[props.name].colors[props.colorIndex] }}
        />
        <Typography
          variant="caption"
          className={classes.colorText}
        >
          {covers[props.name].colors[props.colorIndex]}
        </Typography>
      </Paper>
    </Root>)
  );
}

ColorSwatch.propTypes = {
  name: PropTypes.string.isRequired,
  colorIndex: PropTypes.number.isRequired,
  className: PropTypes.string,
};