import React from "react";
import Image from 'next/image'
import { styled } from '@mui/material/styles';
import { useSpring, animated } from '@react-spring/web'

const PREFIX = 'Illustration';

const classes = {
  container: `${PREFIX}-container`,
  card: `${PREFIX}-card`,
  card2: `${PREFIX}-card2`,
  card3: `${PREFIX}-card3`,
  card4: `${PREFIX}-card4`,
  background: `${PREFIX}-background`,
  bag: `${PREFIX}-bag`,
  cup: `${PREFIX}-cup`,
  sofa: `${PREFIX}-sofa`,
  blob: `${PREFIX}-blob`
};

const Root = styled('div')(() => ({
  [`& .${classes.container}`]: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "0 auto",
    overflow: "visible",
    '@media (max-width:1115px)': {
      maxHeight: "unset",
    },
  },

  [`& .${classes.card}`]: {
    position: "absolute",
    borderRadius: "5px",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    willChange: "transform",
  },

  [`& .${classes.card2}`]: { //bag
    width: "10em",
    height: "10em",
    zIndex: "1",
    opacity: "0.7"
  },

  [`& .${classes.card3}`]: { //cup
    height: "5em",
    width: "5em",
    zIndex: "1",
  },

  [`& .${classes.card4}`]: { //sofa
    height: "15em",
    width: "100%",
    opacity: "0.8"
  },

  [`& .${classes.background}`]: {
    position: 'relative',
    height: 400,
    width: '100%',
    zIndex: -1
  },

  [`& .${classes.bag}`]: {
    position: 'relative',
    height: "5em",
    width: '100%',
    '@media (max-width:1000px)': {
      maxHeight: "3em",
      bottom: '20px',
      left: '-100px'
    },
  },

  [`& .${classes.cup}`]: {
    position: 'relative',
    width: '100%',
    height: "3em",
    opacity: "0.7",
    top: '40px',
    right: '30px',
    '@media (max-width:1000px)': {
      maxHeight: "3em",
      top: '10px'
    },
  },

  [`& .${classes.sofa}`]: {
    position: 'relative',
    width: '100%',
    height: '15em',
    zIndex: 5,
    '@media (max-width:1000px)': {
      maxHeight: "10em",
    },
  },

  [`& .${classes.blob}`]: {
    zIndex: -2,
    position: 'absolute',
    height: 850,
    width: 850,
    top: '-80px',
    right: '0px',
    overflow: 'hidden',
    '@media (max-width:900px)': {
      display: 'none',
    },
  }
}));

const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2]
const trans2 = (x, y) => `translate3d(${x / 10 + 150}px,${y / 10 + 150}px,0)` //bag
const trans3 = (x, y) => `translate3d(${x / 8 - 90}px,${y / 8 - 0}px,0)` //cup
const trans4 = (x, y) => `translate3d(${x / 20}px,${y / 20 + 20}px,0)` //sofa 

export default function Illustration() {
  const [springs, api] = useSpring(() => ({ xy: [0, 0], config: { mass: 10, tension: 550, friction: 140 } }))
  return (
    (<Root>
      <div className={classes.blob}>
        <Image
          src="/icons/blob1.svg"
          className={classes.blob}
          fill
          alt="Background shape"
          priority
        />
      </div>
      <div className={classes.container} onMouseMove={({ clientX: x, clientY: y }) => api.start({ xy: calc(x, y) })}>
        <div className={classes.background}>
          <Image
            src="/icons/background_new.svg"
            fill
            alt="Room image"
            priority
          />
        </div>
        <animated.div className={`${classes.card} ${classes.card2}`} style={{ transform: springs.xy.to(trans2) }} >
          <div className={classes.bag}>
            <Image
              src="/icons/example-bagX.svg"
              fill
              alt="Bag"
            />
          </div>
        </animated.div>
        <animated.div className={`${classes.card} ${classes.card3}`} style={{ transform: springs.xy.to(trans3) }} >
          <div className={classes.cup}>
            <Image
              src="/icons/cup.svg"
              fill
              alt="Cup"
            />
          </div>
        </animated.div>
        <animated.div className={`${classes.card} ${classes.card4}`} style={{ transform: springs.xy.to(trans4) }}>
          <div className={classes.sofa}>
            <Image
              src="/icons/example-me1.svg"
              fill
              alt="Sofa"
            />
          </div>
        </animated.div>
      </div>
    </Root>)
  );
}
