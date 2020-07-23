import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';

import { covers } from '../../components/Covers';

const useStyles = makeStyles(() => ({
  container: {
    margin: "4em",
    width: "auto",
    '@media (max-width:600px)': {
      margin: "1em",
    },
  },
  image: {
    width: "100%",
  },
  text: {
    textAlign: "center",
  }
}))

export default function Stalue(props) {
  
  const classes = useStyles();
  const name = props.name
  
  return (
    <>
      <Grid
        container
        className={classes.grid}
        spacing={2}
        alignItems="center"
      >
         <Grid
          item
          xs={12}
          justify="center"
        >
          <Typography variant="h5" className={classes.text}>
            Responsive design
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <img
            src={process.env.PUBLIC_URL + covers[name].url2}
            alt="iphone"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={9}>
          <img
            src={process.env.PUBLIC_URL + covers[name].url3}
            alt="macbook"
            className={classes.image}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={6}>
          <img
            src={process.env.PUBLIC_URL + covers[name].url4}
            alt="chart1"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={process.env.PUBLIC_URL + covers[name].url5}
            alt="chart2"
            className={classes.image}
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={6}>
          <img
            src={process.env.PUBLIC_URL + covers[name].url6}
            alt="chart3"
            className={classes.image}
          />
        </Grid>
        <Grid item xs={6}>
          <img
            src={process.env.PUBLIC_URL + covers[name].url7}
            alt="chart4"
            className={classes.image}
          />
        </Grid>
      </Grid> 
    </>
  )
}

Stalue.propTypes = {
  name: PropTypes.string.isRequired,
};