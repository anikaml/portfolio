import React from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { keyframes } from "@emotion/react";
import SVG from 'react-inlinesvg';
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import { Grid, Typography } from '@mui/material/';
import { covers } from '../../components/Covers';
import LightboxImage from "../../components/projects/LightboxImage";
import { greyColor, shadowColor } from "../../utils/colors";
import FadeIn from "../style/FadeIn";
import MultiFormatPhoto from "../../components/photos/MultiFormatPhoto";

const PREFIX = 'Stalue';

const classes = {
  image: `${PREFIX}-image`,
  text: `${PREFIX}-text`,
  logoContainer: `${PREFIX}-logoContainer`,
  logoGrid: `${PREFIX}-logoGrid`,
  logo: `${PREFIX}-logo`,
  shadow: `${PREFIX}-shadow`,
  grid: `${PREFIX}-grid`,
  screenshot: `${PREFIX}-screenshot`
};

const float = keyframes({
  '0%': {
    transform: 'translatey(0px)'
  },
  '50%': {
    transform: 'translatey(-20px)'
  },
  '100%': {
    transform: 'translatey(0px)'
  }
});

const shadow = keyframes({
  '0%': {
    width: 120,
    boxShadow: `0px 10px 8px ${greyColor}`,
  },
  '50%': {
    width: 100,
    boxShadow: `0px 10px 8px ${greyColor}`,
    opacity: 0.8,
  },
  '100%': {
    width: 120,
    boxShadow: `0px 10px 8px ${greyColor}`,
  }
});


const Root = styled('div')(() => ({
  [`& .${classes.image}`]: {
    width: "100%",
  },

  [`& .${classes.text}`]: {
    textAlign: "center",
    marginTop: '1em',
  },

  [`& .${classes.logoContainer}`]: {
    marginTop: "2em",
  },

  [`& .${classes.logoGrid}`]: {
    marginTop: "4em",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  [`& .${classes.logo}`]: {
    animationName: float,
    animation: `${float} 6s ease-in-out infinite`,
    maxHeight: "10em",
    width: "100%",
  },

  [`& .${classes.shadow}`]: {
    height: 2,
    display: "block",
    margin: "15px auto",
    animationName: shadow,
    animationDelay: "1s",
    animation: `${shadow} 6s ease-in-out infinite`,
  },

  [`& .${classes.grid}`]: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    '@media (max-width:900px)': {
      justifyContent: "center",
    },
  },

  [`& .${classes.screenshot}`]: {
    width: '100%',
    display: "flex",
    '&:hover': {
      cursor: "pointer",
      boxShadow: `0px 3px 1px -2px ${shadowColor}, 0px 2px 2px 0px ${shadowColor}, 0px 1px 5px 0px ${shadowColor}`,
      transition: "all 0.1s ease-in-out",
    }
  }
}));

export default function Stalue(props) {

  const name = props.name

  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
    triggerOnce: true,
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
      <Grid
        container
        className={classes.grid}
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={12}>
          <FadeIn>
            <Typography variant="h4" className={classes.text}>
              Responsive design
            </Typography>
          </FadeIn>
        </Grid>
        <Grid item xs={3}>
          <FadeIn>
            <MultiFormatPhoto
              alt="iphone"
              className={classes.image}
              url={covers[name].url2}
              photoPath={`/projects/${name}`}
            />
          </FadeIn>
        </Grid>
        <Grid item xs={9}>
          <FadeIn>
            <MultiFormatPhoto
              alt="macbook"
              className={classes.image}
              url={covers[name].url3}
              photoPath={`/projects/${name}`}
            />
          </FadeIn>
        </Grid>
      </Grid>
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
            <Grid key={screenshot} item xs={12} md={6}>
              <motion.div key={screenshot} variants={item} whileHover={{ scale: 1.03 }} whileTap={{ scale: 1.1 }}>
                <LightboxImage
                  name={name}
                  url={index}
                  alt={`chart${index}`}
                  classNameImg={classes.screenshot}
                />
              </motion.div>
            </Grid>
          )}
        </Grid>
      </motion.div>
      <Grid
        container
        className={classes.logoContainer}
      >
        <Grid item xs={12}>
          <FadeIn>
            <Typography variant="h4" className={classes.text}>
              Custom logo design
            </Typography>
          </FadeIn>
        </Grid>
        <Grid item xs={12} className={classes.logoGrid}>
          <FadeIn>
            <SVG
              src={process.env.PUBLIC_URL + covers[name].logo}
              className={classes.logo}
            />
            <div className={classes.shadow}></div>
          </FadeIn>
        </Grid>
      </Grid>
    </Root>)
  );
}

Stalue.propTypes = {
  name: PropTypes.string.isRequired,
};