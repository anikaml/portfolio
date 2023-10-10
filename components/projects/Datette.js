import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import { covers } from '../../components/Covers';
import LightboxImage from "../../components/projectShared/LightboxImage";

const PREFIX = 'Datette';

const classes = {
  datetteImg: `${PREFIX}-datetteImg`,
  grid: `${PREFIX}-grid`
};

const Root = styled('div')(() => ({
  [`& .${classes.datetteImg}`]: {
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
    /* IpadPro  Portrait */
    [`@media only screen and (min-width: 1024px) and (max-height: 1366px) and 
      (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)`]: {
      borderRadius: '3em',
      maxHeight: "35vh",
    },
  },

  [`& .${classes.grid}`]: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    marginTop: '1em',
    '@media (max-width:900px)': {
      justifyContent: "center",
    },
    /* IpadPro  Portrait */
    [`@media only screen and (min-width: 1024px) and (max-height: 1366px) and 
     (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)`]: {
      justifyContent: "center",
    },
  }
}));

export default function Datette(props) {

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
    (<Root>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
      >
        <div className={classes.grid}>
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
        </div>
      </motion.div>
    </Root>)
  );
}

Datette.propTypes = {
  name: PropTypes.string.isRequired,
};