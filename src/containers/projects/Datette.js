import React from "react";
import PropTypes from "prop-types";

//import SVG from 'react-inlinesvg';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import LightboxImage from "../../components/projects/LightboxImage";
//import FadeIn from "../style/FadeIn";

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
  text: {
    textAlign: "center",
  },
}))

export default function Datette(props) {
  const classes = useStyles();
  const name = props.name
  
  return (
    <>
      <Grid
        container
        className={classes.grid}
        spacing={2}
      >
        {covers[name].screenshots.map((screenshot, index) => 
          <Grid key={screenshot} item xs={6} sm={3} md={2}>
            <LightboxImage
              name={name}
              url={index}
              alt={`screen${index}`}
            />
          </Grid>
        )}
      </Grid> 
    </>
  )
}

Datette.propTypes = {
  name: PropTypes.string.isRequired,
};