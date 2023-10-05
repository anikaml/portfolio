import React from "react";
import { styled } from '@mui/material/styles';
import { keyframes } from "@emotion/react";
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"

const PREFIX = 'BokiemLogoAnimation';

const classes = {
  circle: `${PREFIX}-circle`,
  lineContainer: `${PREFIX}-lineContainer`,
  line1: `${PREFIX}-line1`,
  line2: `${PREFIX}-line2`,
  line3: `${PREFIX}-line3`
};

const move = keyframes({
  '0%': {
    transform: 'translatex(0px)'
  },
  '50%': {
    transform: 'translatex(10px)'
  },
  '100%': {
    transform: 'translatex(0px)'
  }
});

const move_back = keyframes({
  '0%': {
    transform: 'translatex(0px)'
  },
  '50%': {
    transform: 'translatex(-3px)'
  },
  '100%': {
    transform: 'translatex(0px)'
  }
});

const Root = styled('div')(() => ({
  [`& .${classes.circle}`]: {
    backgroundColor: "#5000ca",
    borderRadius: "50%",
    height: "10em",
    width: "10em",
    '&:hover': {
      animationPlayState: "running",
    }
  },

  [`& .${classes.lineContainer}`]: {
    height: "10em",
    width: "10em",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: "1em",
  },

  [`& .${classes.line1}`]: {
    border: "5px solid white",
    borderRadius: 25,
    width: "3.5em",
    margin: "0.2em 0",
    animationName: move,
    animation: "move 2s ease-in-out 10s",
  },

  [`& .${classes.line2}`]: {
    border: "5px solid white",
    borderRadius: 25,
    width: "2.5em",
    margin: "0.2em 0em 0.2em 3em",
    animationName: move,
    animation: "move 1s ease-in-out 10s",
  },

  [`& .${classes.line3}`]: {
    border: "5px solid white",
    borderRadius: 25,
    width: "3em",
    margin: "0.2em 0",
    animationName: move_back,
    animation: `move 1s ease-in-out 10s`,
  }
}));

export default function BokiemLogoAnimation() {

  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3,
        when: "beforeChildren",
        staggerChildren: 0.1,
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    (<Root>
      <motion.div
        ref={ref}
        whileHover={{ scale: 1.1 }}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={container}
      >
        <div className={classes.circle}>
          <div className={classes.lineContainer}>
            <motion.div className={classes.line1} variants={item} style={{ animationDelay: "2s", }} />
            <motion.div className={classes.line2} variants={item} style={{ animationDelay: "2s", }} />
            <motion.div className={classes.line3} variants={item} style={{ animationDelay: "3s", }} />
            <motion.div className={classes.line2} variants={item} style={{ animationDelay: "1s", }} />
            <motion.div className={classes.line1} variants={item} style={{ animationDelay: "1s", }} />
          </div>
        </div>
      </motion.div>
    </Root>)
  );
}
