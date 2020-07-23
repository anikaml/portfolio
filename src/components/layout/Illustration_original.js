import React from "react";
//import PropTypes from "prop-types";

import { useSpring, animated } from 'react-spring'

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    width: "500px",
    height: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    overflow: "hidden",
  },
  card: {
    position: "absolute",
    borderRadius: "5px",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    willChange: "transform",
  },
  card1: { //background
    minWidth: "30em",
    minHeight: "30em",
    width: "45vw",
    height: "45vw",
    maxWidth: "100em",
    maxHeight: "100em",
    backgroundImage: "url(https://image.flaticon.com/icons/svg/119/119596.svg)"
  },
  card2: { //sun
    width: "15em",
    height: "15em",
    backgroundImage: "url(https://image.flaticon.com/icons/svg/789/789395.svg)"
  },
  card3: { //clouds
    opacity: "0.9",
    width: "15em",
    height: "15em",
    backgroundImage: "url(https://image.flaticon.com/icons/svg/414/414927.svg)"
  },
  card4: { //hummingbird
    width: "100%",
    height: "100%",
    backgroundImage: "url(https://image.flaticon.com/icons/svg/789/789392.svg)"
  }
}))

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
const trans2 = (x, y) => `translate3d(${x / 8 + 35}px,${y / 8 - 230}px,0)`
const trans3 = (x, y) => `translate3d(${x / 6 - 250}px,${y / 6 - 200}px,0)`
const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)`

export default function Illustration() {
  const classes = useStyles();
    const [props, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
      <div className={classes.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
        <animated.div className={`${classes.card} ${classes.card1}`} style={{ transform: props.xy.interpolate(trans1) }} />
        <animated.div className={`${classes.card} ${classes.card2}`} style={{ transform: props.xy.interpolate(trans2) }} />
        <animated.div className={`${classes.card} ${classes.card3}`} style={{ transform: props.xy.interpolate(trans3) }} />
        <animated.div className={`${classes.card} ${classes.card4}`} style={{ transform: props.xy.interpolate(trans4) }} />
      </div>
    )
  }