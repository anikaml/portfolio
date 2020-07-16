import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import ColorSwatch from "./ColorSwatch";

const useStyles = makeStyles(() => ({
 
  gridColors: {
    margin: "3em 0em",
    textAlign: "center",
    display: "flex",
  },
}))

export default function Colors(props) {
  
  const classes = useStyles();
  
  return (
    <>
      <Grid
        container
        justify="center"
        alignItems="center"
      >
        <Grid
          item
          xs={12}
          sm={3}
          className={classes.gridColors}
          justify="space-around"
        >
          <ColorSwatch index={props.index} colorNumber="color_1"/>
        </Grid>
        <Grid
          item
          xs={12}
          sm={3}
          className={classes.gridColors}
          justify="space-around"
        >
          <ColorSwatch index={props.index} colorNumber="color_2"/>
        </Grid>
      </Grid>
    </>
  )
}

Colors.propTypes = {
  index: PropTypes.number.isRequired,
};