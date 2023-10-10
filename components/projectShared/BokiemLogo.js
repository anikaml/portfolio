import React from "react";

import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material/';
import FadeIn from "../../components/style/FadeIn";
import BokiemLogoAnimation from "./BokiemLogoAnimation";

const PREFIX = 'BokiemLogo';

const classes = {
  text: `${PREFIX}-text`,
  logoContainer: `${PREFIX}-logoContainer`,
  logoGrid: `${PREFIX}-logoGrid`
};

const Root = styled('div')(() => ({
  [`& .${classes.text}`]: {
    textAlign: "center",
    margin: "2em 0",
  },

  [`& .${classes.logoContainer}`]: {
    marginTop: "2em",
  },

  [`& .${classes.logoGrid}`]: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  }
}));

export default function BokiemLogo() {


  return (
    (<Root>
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
    </Root>)
  );
}