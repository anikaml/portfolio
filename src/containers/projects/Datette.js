import React from "react";
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import { covers } from '../../components/Covers';
import LightboxImage from "../../components/projects/LightboxImage";

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
  datetteImg: {
    margin: "1em",
    maxHeight: "45vh",
    borderRadius: "1.7em",
    boxShadow: "0rem 0.6rem 1.3rem 0rem rgba(0,0,0,0.2)",
    '&:hover': {
      transition: "all 0.5s ease-in-out",
      transform: "scale(1.05)",
      boxShadow: "0.5rem 1rem 2rem 0.5rem rgba(0,0,0,0.2)",
    },
    '@media (max-width:900px)': {
      maxHeight: "35vh",
    },
  }
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
          <Grid key={screenshot} item xs={6} sm={4} md={3} lg={2}>
            <LightboxImage
              name={name}
              url={index}
              alt={`screen${index}`}
              classNameImg={classes.datetteImg}
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