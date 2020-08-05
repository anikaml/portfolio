import React, { useState } from "react";
import PropTypes from "prop-types";

import Lightbox from 'react-image-lightbox';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import Banner from "../../components/projects/Banner";
import Launch from "../../components/projects/Launch";
import ProjectHeader from "../../components/projects/ProjectHeader";
import Colors from "../../components/projects/Colors";
import Stalue from "./Stalue";
import NextProject from "../../components/projects/NextProject";
import TechStack from "../../components/projects/TechStack";
import Bokiem from "./Bokiem";
import FadeIn from "../style/FadeIn";
import Datette from "./Datette";

const useStyles = makeStyles(() => ({
  container: {
    margin: "4em",
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

  let body = null;
  if (name === 'stalue') {
    body = <Stalue name={name}/>
  } else if (name === 'bokiem') {
    body = <Bokiem name={name}/>
  } else if (name === 'datette') {
    body = <Datette name={name}/>
  }
  
  return (
    <>
      <FadeIn>
        <div onClick={() => setLightbox_open(true)}>
          <Banner url={covers[name].url1} className={classes.banner}/>
        </div>
        {lightbox_open && (
          <Lightbox
            mainSrc={process.env.PUBLIC_URL + covers[name].url1}
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