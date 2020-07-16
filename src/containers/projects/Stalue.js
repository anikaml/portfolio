import React from "react";

// import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import Banner from "../../components/projects/Banner";
import Launch from "../../components/projects/Launch";
import ProjectHeader from "../../components/projects/ProjectHeader";
import Colors from "../../components/projects/Colors";

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
}))

export default function Stalue() {
  
  const classes = useStyles();
  const index = 0;
  
  return (
    <>
      <Banner url={covers[index].url1} />
      <Container maxWidth="lg" className={classes.container}>
        <Launch href="https://stalue.com"/>
        <ProjectHeader index={index}/>
        <Colors index={index}/>
        <Grid
          container
          className={classes.grid}
          spacing={2}
          alignItems="center"
        >
          <Grid item xs={3}>
            <img
              src={process.env.PUBLIC_URL + covers[index].url2}
              alt="screen"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={9}>
            <img
              src={process.env.PUBLIC_URL + covers[index].url3}
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
              src={process.env.PUBLIC_URL + covers[index].url4}
              alt="chart1"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={process.env.PUBLIC_URL + covers[index].url5}
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
              src={process.env.PUBLIC_URL + covers[index].url6}
              alt="chart3"
              className={classes.image}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              src={process.env.PUBLIC_URL + covers[index].url7}
              alt="chart4"
              className={classes.image}
            />
          </Grid>
        </Grid> 
      </Container>
    </>
  )
}