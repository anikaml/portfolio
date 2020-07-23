import React from "react";
import PropTypes from "prop-types";

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
}))

export default function ProjectTemplate(props) {
  
  const classes = useStyles();
  const name = props.name;

  let body = null;
  if (name === 'stalue') {
    body = <Stalue name={name}/>
  }
  // } else if (name === 'bokiem') {
  //   body = <Bokiem name={name}/>
  // } else if (name === 'datette') {
  //   body = <Datette name={name}/>
  // }
  
  return (
    <>
      <Banner url={covers[name].url1} />
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
        <Colors index={name}/>
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