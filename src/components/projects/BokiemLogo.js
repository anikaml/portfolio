import React from "react";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';
import FadeIn from "../../containers/style/FadeIn";

const useStyles = makeStyles(() => ({
  text: {
    textAlign: "center",
    margin: "2em 0",
  },
  logoContainer: {
    marginTop: "2em",
  },
  logoGrid: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", 
    justifyContent: "center",
  },
  logo: {
    maxHeight: "10em",
  },
  circle: {
    backgroundColor: "#5000ca",
    borderRadius: "50%",
    height: "10em",
    width: "10em",
    '&:hover': {
      cursor: "pointer",
      animationPlayState: "running",
    }
  },
  lineContainer: {
    height: "10em",
    width: "10em",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "1em",
  },
  line1: {
    border: "5px solid white",
    borderRadius: 25,
    width: "3.5em",
    margin: "0.2em 0",
    animationName: '$move',
    animation: "move 6s ease-in-out 10s",
  },
  line2: {
    border: "5px solid white",
    borderRadius: 25,
    width: "2.5em",
    margin: "0.2em 0em 0.2em 3em",
    animationName: '$move',
    animation: "move 5s ease-in-out 10s",
  },
  line3: {
    border: "5px solid white",
    borderRadius: 25,
    width: "3em",
    margin: "0.2em 0",
    animationName: '$move_back',
    animation: "move 5s ease-in-out 10s",
  },
  '@keyframes move': { 
    "0%": { 
      transform: 'translatex(0px)'
    }, 
    "50%": { 
      transform: 'translatex(10px)'
    }, 
    "100%": {
      transform: 'translatex(0px)'
    }
  },
  '@keyframes move_back': { 
    "0%": { 
      transform: 'translatex(0px)'
    }, 
    "50%": { 
      transform: 'translatex(-3px)'
    }, 
    "100%": {
      transform: 'translatex(0px)'
    }
  },
}))

export default function BokiemLogo() {
  const classes = useStyles();
  
  return (
    <>
      <Grid
        container
        className={classes.logoContainer}
        justify="center"
      >
        <Grid item xs={12}>
          <FadeIn>
            <Typography variant="h4" className={classes.text}>
              Custom logo design
            </Typography>
          </FadeIn>
        </Grid>
        <Grid item xs={12} className={classes.logoGrid}>
        </Grid>
        <Grid item xs={12} className={classes.logoGrid}>
          <FadeIn>
            <div className={classes.circle}>
              <div className={classes.lineContainer}>
                <div className={classes.line1} style={{animationDelay: "2s",}}/>
                <div className={classes.line2} style={{animationDelay: "2s",}}/>
                <div className={classes.line3} style={{animationDelay: "3s",}}/>
                <div className={classes.line2} style={{animationDelay: "1s",}}/>
                <div className={classes.line1} style={{animationDelay: "1s",}}/>
              </div>
            </div>
          </FadeIn>
        </Grid>
      </Grid>
    </>
  )
}