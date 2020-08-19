import React from "react";

import { useSpring, animated } from 'react-spring'
import SVG from 'react-inlinesvg';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  container: {
    maxHeight: "500px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    overflow: "hidden",
  },
  card: {
    position: "absolute",
    borderRadius: "5px",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    willChange: "transform",
  },
  card2: { //bag
    width: "15em",
    height: "15em",
    zIndex: "1",
    opacity: "0.7"
  },
  card3: { //cup
    height: "5em",
    width: "5em",
    zIndex: "1",
  },
  card4: { //sofa
    opacity: "0.8"
  },
  background: {
   maxHeight: "60em",
   maxWidth: "60em"
  },
  bag: {
    height: "5em",
  },
  cup: {
    opacity: "0.7",
  },
  sofa: {
    height: "15em"
  },
}))

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
// const trans1 = (x, y) => `translate3d(${x / 10}px,${y / 10}px,0)`
// const trans2 = (x, y) => `translate3d(${x / 8 + 200}px,${y / 8 + 200}px,0)` //bag
// const trans3 = (x, y) => `translate3d(${x / 6 - 90}px,${y / 6 - 0}px,0)` //cup
// const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)` //sofa
const trans2 = (x, y) => `translate3d(${x / 10 + 200}px,${y / 10 + 200}px,0)` //bag
const trans3 = (x, y) => `translate3d(${x / 8 - 90}px,${y / 8 - 0}px,0)` //cup
//const trans4 = (x, y) => `translate3d(${x / 3.5}px,${y / 3.5}px,0)` //sofa
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20 + 20}px,0)` //sofa 


export default function Illustration() {
  const classes = useStyles();
    const [properties, set] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
    return (
      <div className={classes.container} onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}>
          <SVG
            src={process.env.PUBLIC_URL + "/icons/example-blob-full.svg"} 
            className={classes.background}
          />
        <animated.div className={`${classes.card} ${classes.card2}`} style={{ transform: properties.xy.to(trans2) }} >
          <SVG
            src={process.env.PUBLIC_URL + "/icons/example-bagX.svg"} 
            className={classes.bag}
          />
        </animated.div>
        <animated.div className={`${classes.card} ${classes.card3}`} style={{ transform: properties.xy.to(trans3) }} >
          <SVG
            src={process.env.PUBLIC_URL + "/icons/cup.svg"} 
            className={classes.cup}
          />
        </animated.div>
        <animated.div className={`${classes.card} ${classes.card4}`} style={{ transform: properties.xy.to(trans4) }}>
          <SVG
            src={process.env.PUBLIC_URL + "/icons/example-me.svg"} 
            className={classes.sofa}
          />
        </animated.div>
      </div>
    )
  }
