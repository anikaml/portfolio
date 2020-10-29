import React from "react";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core/';
import Skeleton from '@material-ui/lab/Skeleton';
import FadeIn from "../../containers/style/FadeIn";

const useStyles = makeStyles(() => ({
  container: {
    margin: "4em auto",
    width: "auto",
    '@media (max-width:600px)': {
      margin: "1em",
    },
  },
  grid: {
    display: "flex",
  },
}))

export default function ProjectTemplateSkeleton() {
  const classes = useStyles();
  
  return (
    <>
      <FadeIn>
        <Skeleton variant="rect" width={'100%'} height={360} />
      </FadeIn>
      <Container maxWidth="lg" className={classes.container}>
        <FadeIn>
          <Skeleton variant="text" width={'20%'} style={{margin: '4em 0'}}/>
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
    </>
  )
}