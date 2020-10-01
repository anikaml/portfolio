import React from "react";
import PropTypes from "prop-types";

import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"

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
  datetteImg: {
    margin: "1em",
    maxHeight: "45vh",
    borderRadius: "1.7em",
    boxShadow: "0rem 0.6rem 1.3rem 0rem rgba(0,0,0,0.2)",
    display: 'block',
    '&:hover': {
      transition: "all 0.5s ease-in-out",
      transform: "scale(1.05)",
      boxShadow: "0.5rem 1rem 2rem 0.5rem rgba(0,0,0,0.2)",
      cursor: 'pointer',
    },
    '@media (max-width:900px)': {
      maxHeight: "30vh",
      borderRadius: "1em",
    },
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    '@media (max-width:900px)': {
      justifyContent: "center",
    },
  }
}))

export default function Datette(props) {
  const classes = useStyles();
  const name = props.name

  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const container = {
    visible: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    hidden: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };

  const item = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  };
  
  return (
    <>
      <motion.div
        ref={ref} 
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
      >
        <Grid
          container
          className={classes.grid}
          spacing={2}
        >
        {covers[name].screenshots.map((screenshot, index) => 
          <motion.span key={screenshot} variants={item} >
            <LightboxImage
              name={name}
              url={index}
              alt={`screen${index}`}
              classNameImg={classes.datetteImg}
            />
          </motion.span>
        )}
         </Grid> 
      </motion.div>
    </>
  )
}

Datette.propTypes = {
  name: PropTypes.string.isRequired,
};