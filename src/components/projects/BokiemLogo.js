import React from "react";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core/';
import FadeIn from "../../containers/style/FadeIn";
import BokiemLogoAnimation from "./BokiemLogoAnimation";

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
          <BokiemLogoAnimation />
        </Grid>
      </Grid>
    </>
  )
}