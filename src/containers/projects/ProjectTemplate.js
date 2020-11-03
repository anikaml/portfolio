import React, { lazy, useState } from "react";
import PropTypes from "prop-types";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import Banner from "../../components/projects/Banner";
import Launch from "../../components/projects/Launch";
import ProjectHeader from "../../components/projects/ProjectHeader";
import Colors from "../../components/projects/Colors";
import NextProject from "../../components/projects/NextProject";
import TechStack from "../../components/projects/TechStack";
import FadeIn from "../style/FadeIn";
import SuspenseContainer from "../../components/layout/SuspenseContainer";

const Bokiem = lazy(() => import("./Bokiem"))
const Datette = lazy(() => import("./Datette"))
const Stalue = lazy(() => import("./Stalue"))

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
  banner: {
    '&:hover': {
      cursor: "pointer",
    }
  }
}))

export default function ProjectTemplate(props) {
  const [lightbox_open, setLightbox_open] = useState(false);
  const classes = useStyles();
  const name = props.name;
  const photosPath = `/projects/${name}/`

  let body = null;
  if (name === 'stalue') {
    body = <SuspenseContainer><Stalue name={name}/></SuspenseContainer>
  } else if (name === 'bokiem') {
    body = <SuspenseContainer><Bokiem name={name}/></SuspenseContainer>
  } else if (name === 'datette') {
    body = <SuspenseContainer><Datette name={name}/></SuspenseContainer>
  }
  
  return (
    <>
      <FadeIn>
        <div onClick={() => setLightbox_open(true)}>
          <Banner url={photosPath + covers[name].url1} className={classes.banner}/>
        </div>
        {lightbox_open && (
          <Lightbox
            mainSrc={process.env.PUBLIC_URL + photosPath + covers[name].url1}
            onCloseRequest={() => setLightbox_open(false)}
          />
        )}
      </FadeIn>
      <Container maxWidth="lg" className={classes.container}>
        <Launch index={name}/>
        <ProjectHeader index={name}/>
        <Grid
          container
          className={classes.grid}
          spacing={2}
        >
          <Grid item xs={12} sm={3}>
            <TechStack name={name}/>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Colors name={name}/>
          </Grid>
        </Grid>
        {body}
        <NextProject name={name}/>
      </Container>
    </>
  )
}

ProjectTemplate.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
};