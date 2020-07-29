import React from "react";
import PropTypes from "prop-types";

import SVG from 'react-inlinesvg';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import LightboxImage from "../../components/projects/LightboxImage";
import { greyColor } from "../../utils/colors";

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
  },
  logoContainer: {
    marginTop: "2em",
  },
  logoGrid: {
    marginTop: "4em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "center",
  },
  logo: {
    animationName: '$float',
    animation: "float 6s ease-in-out infinite",
    maxHeight: "10em",
  },
  '@keyframes float': { 
    "0%": { 
      transform: 'translatey(0px)'
    }, 
    "50%": { 
      transform: 'translatey(-20px)'
    }, 
    "100%": {
      transform: 'translatey(0px)'
    }
  },
  shadow: {
    height: 2,
    display: "block",
    margin: "15px auto",
    animationName: '$shadow',
    animationDelay: "1s",
    animation: "shadow 6s ease-in-out infinite",
  },
  '@keyframes shadow': {
    '0%': {
      width: 120,
      boxShadow: `0px 10px 8px ${greyColor}`,
      
    },
    '50%': {
      width: 100,
      boxShadow: `0px 10px 8px ${greyColor}`,
      opacity: 0.8,
    },
    '100%': {
      width: 120,
      boxShadow: `0px 10px 8px ${greyColor}`,
      
    },
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
         <Grid item xs={12}>
          <Typography variant="h4" className={classes.text}>
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
        <Grid item xs={12} md={6}>
          <LightboxImage
            name={name}
            url={0}
            alt="chart1"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LightboxImage
            name={name}
            url={1}
            alt="chart2"
          />
        </Grid>
      </Grid>
      <Grid
        container
        className={classes.grid}
        spacing={2}
      >
        <Grid item xs={12} md={6}>
          <LightboxImage
            name={name}
            url={2}
            alt="chart3"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <LightboxImage
            name={name}
            url={3}
            alt="chart4"
          />
        </Grid>
      </Grid> 
      <Grid
        container
        className={classes.logoContainer}
      >
        <Grid item xs={12}>
          <Typography variant="h4" className={classes.text}>
            Custom logo design
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.logoGrid}>
          <SVG
            src={process.env.PUBLIC_URL + covers[name].logo}
            className={classes.logo}
          />
          <div className={classes.shadow}></div>
        </Grid>
    </Grid>
    </>
  )
}

Stalue.propTypes = {
  name: PropTypes.string.isRequired,
};