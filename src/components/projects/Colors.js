import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';

import ColorSwatch from "./ColorSwatch";
import { greyColor } from '../../utils/colors';

const useStyles = makeStyles(() => ({
  gridColors: {
    margin: "1em 0em",
    textAlign: "center",
    display: "flex",
  },
  title: {
    marginTop: "2em",
    color: greyColor,
    paddingBottom: "0.5em",
  }
}))

export default function Colors(props) {
  
  const classes = useStyles();
  
  return (
    <>
      <Grid
        container
        alignItems="center"
      >
         <Grid
          item
          xs={12}
          justify="center"
        >
          <Typography variant="subtitle2" className={classes.title}>
            COLOR PALETTE
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.gridColors}
        >
          <ColorSwatch index={props.index} colorNumber="color_1"/>
        </Grid>
        <Grid
          item
          className={classes.gridColors}
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