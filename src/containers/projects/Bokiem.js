import React from "react";
import PropTypes from "prop-types";

import {isSafari} from 'react-device-detect';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, } from '@material-ui/core/';

import BokiemLogo from "../../components/projects/BokiemLogo";
import BokiemResponsive from "../../components/projects/BokiemResponsive";
import BokiemResponsiveMorph from "../../components/projects/BokiemResponsiveMorph";
import FadeIn from "../style/FadeIn";

const useStyles = makeStyles(() => ({
  text: {
    textAlign: "center",
    margin: "2em 0",
  },
}))

export default function Bokiem(props) {
  const classes = useStyles();
  const name = props.name;

  const responsive = (
    isSafari ? <BokiemResponsive name={name}/> : <BokiemResponsiveMorph name={name}/>
  )
    
  return (
    <Grid
      container
      justify="center"
    >
    <Grid item xs={12} >
      <FadeIn>
      <Typography variant="h4" className={classes.text}>
          Responsive Design
        </Typography>
      </FadeIn>
    </Grid>
    {responsive}
    <BokiemLogo />
  </Grid>
  )
}

Bokiem.propTypes = {
  name: PropTypes.string.isRequired,
};