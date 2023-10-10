import React from "react";

import { styled } from '@mui/material/styles';
import { Container, Grid, Skeleton } from '@mui/material/';
import FadeIn from "../../components/style/FadeIn";

const PREFIX = 'ProjectTemplateSkeleton';

const classes = {
  container: `${PREFIX}-container`,
  grid: `${PREFIX}-grid`
};

const Root = styled('div')(() => ({
  [`& .${classes.container}`]: {
    margin: "4em auto",
    width: "auto",
    '@media (max-width:600px)': {
      margin: "1em",
    },
  },

  [`& .${classes.grid}`]: {
    display: "flex",
  }
}));

export default function ProjectTemplateSkeleton() {


  return (
    (<Root>
      <FadeIn>
        <Skeleton variant="rect" width={'100%'} height={360} />
      </FadeIn>
      <Container maxWidth="lg" className={classes.container}>
        <FadeIn>
          <Skeleton variant="text" width={'20%'} style={{ margin: '4em 0' }} />
        </FadeIn>
        <Grid
          container
          className={classes.grid}
          spacing={4}
        >
          <Grid item xs={12} sm={3}>
            <FadeIn>
              <Skeleton variant="rect" width={'100%'} height={118} />
            </FadeIn>
          </Grid>
          <Grid item xs={12} sm={9}>
            <FadeIn>
              <Skeleton variant="rect" width={'100%'} height={118} />
            </FadeIn>
          </Grid>
        </Grid>
      </Container>
    </Root>)
  );
}