import React, { lazy, useState } from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css'; // This only needs to be imported once in your app
import { Grid } from '@mui/material/';
import { covers } from '../../components/Covers';
import Banner from "../../components/projectShared/Banner";
import Launch from "../../components/projectShared/Launch";
import ProjectHeader from "../../components/projectShared/ProjectHeader";
import ProjectName from "../../components/projectShared/ProjectName";
import Colors from "../../components/projectShared/Colors";
import NextProject from "../../components/projectShared/NextProject";
import TechStack from "../../components/projectShared/TechStack";
import FadeIn from "../style/FadeIn";
import SuspenseContainer from "../../components/layout/SuspenseContainer";
import GitHubLink from "../../components/projectShared/GitHubLink";
import { shadowColor } from "../../utils/colors";

const PREFIX = 'ProjectTemplate';

const classes = {
  container: `${PREFIX}-container`,
  grid: `${PREFIX}-grid`,
  banner: `${PREFIX}-banner`
};

const Root = styled('div')(() => ({
  [`& .${classes.container}`]: {
    margin: "4em",
    width: "auto",
    '@media (max-width:600px)': {
      margin: "1em",
    },
  },

  [`& .${classes.grid}`]: {
    display: "flex",
  },

  [`& .${classes.banner}`]: {
    '&:hover': {
      cursor: "pointer",
    },
    boxShadow: `0px 3px 10px 3px ${shadowColor}`
  }
}));

const Bokiem = lazy(() => import("./Bokiem"))
const Datette = lazy(() => import("./Datette"))
const Stalue = lazy(() => import("./Stalue"))
const F1app = lazy(() => import("./F1app"))

export default function ProjectTemplate(props) {
  const [lightbox_open, setLightbox_open] = useState(false);

  const name = props.name;
  const photosPath = `/projects/${name}/`

  let body = null;
  if (name === 'stalue') {
    body = <SuspenseContainer><Stalue name={name} /></SuspenseContainer>
  } else if (name === 'bokiem') {
    body = <SuspenseContainer><Bokiem name={name} /></SuspenseContainer>
  } else if (name === 'datette') {
    body = <SuspenseContainer><Datette name={name} /></SuspenseContainer>
  } else if (name === 'f1app') {
    body = <SuspenseContainer><F1app name={name} /></SuspenseContainer>
  }

  return (
    (<Root>
      <FadeIn>
        <div onClick={() => setLightbox_open(true)}>
          <Banner
            url={covers[name].url1}
            className={classes.banner}
            name={name}
            photoPath={photosPath}
          />
        </div>
        {lightbox_open && (
          <Lightbox
            mainSrc={photosPath + covers[name].url1}
            onCloseRequest={() => setLightbox_open(false)}
          />
        )}
      </FadeIn>
      <div className={classes.container}>
        <Grid
          container
          className={classes.grid}
          spacing={2}
        >
          <Grid item xs={12} sm={3}>
            <Launch index={name} />
            <GitHubLink index={name} />
            <ProjectName index={name} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <ProjectHeader index={name} />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TechStack name={name} />
          </Grid>
          <Grid item xs={12} sm={9}>
            <Colors name={name} />
          </Grid>
        </Grid>
        {body}
        <NextProject name={name} />
      </div>
    </Root>)
  );
}

ProjectTemplate.propTypes = {
  classes: PropTypes.object,
  name: PropTypes.string.isRequired,
};