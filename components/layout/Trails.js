import React from 'react'
import { styled } from '@mui/material/styles';
import { useTrail, animated } from '@react-spring/web'
import { Typography } from '@mui/material/';
import { MOBILE, MOBILE_SM } from '../../utils/constants';

const PREFIX = 'Trails';

const classes = {
  trailsDiv: `${PREFIX}-trailsDiv`,
  element1: `${PREFIX}-element1`,
  element2: `${PREFIX}-element2`,
  element3: `${PREFIX}-element3`
};

const Root = styled('div')(() => ({
  [`&.${classes.trailsDiv}`]: {
    display: "block",
    [`@media (max-width:${MOBILE})`]: {
      display: "flex",
      flexDirection: 'column',
      width: 'auto',
      justifyContent: 'space-around',
    },
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      width: '60vw',
    }
  },

  [`& .${classes.element1}`]: {
    fontSize: 'calc(40px + 18 * ((100vw - 320px) / 680))', //68px
    '@media (max-width:330px)': {
      fontSize: '2rem',
    },
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      fontSize: '6rem',
    },
  },

  [`& .${classes.element2}`]: {
    fontSize: 'calc(20px + (54 - 20) * ((100vw - 300px) / (1600 - 300)))', //54px 14px is the minimum size at the smallest viewport width of 300px and 26px is the maximum size at the largest viewport width of 1600px
    fontWeight: 500,
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      fontSize: '4rem',
    },
    [`@media (max-width:${MOBILE_SM})`]: {
      fontSize: '1.75rem',
    },
  },

  [`& .${classes.element3}`]: {
    fontSize: 'calc(14px + (20 - 14) * ((100vw - 300px) / (1600 - 300)))', //40px 
    maxWidth: 450,
    lineHeight: 1.5,
    marginTop: '2em',
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      fontSize: '2rem',
    },
    [`@media (max-width:${MOBILE})`]: {
      fontWeight: 400,
      fontSize: 'initial',
      marginTop: '1em'
    },
  }
}));

export default function Trails() {

  const element1 = (<Typography
    variant="h2"
    display="inline"
    style={{ fontWeight: 500 }}
    className={classes.element1}
  >
    {"Hi, I'm Anika."}
  </Typography>)

  const element2 = (<Typography
    variant="h3"
    display="inline"
    className={classes.element2}
  >
    {"A Senior Frontend Software Engineer"}
  </Typography>)

  const element3 = (<Typography
    variant="h6"
    className={classes.element3}
  >
    {`I create functioning, optimized and user-friendly applications,
    utilizing my multidisciplinary engineering and design background to facilitate unique designs.`}
  </Typography>)

  const items = [element1, element2, element3]
  const config = { mass: 15, tension: 2000, friction: 200 }

  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 20,
    height: 'auto',
    from: { opacity: 0, x: 0, height: 0 },
  })

  return (
    <Root className={classes.trailsDiv}>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={index}
          style={{ ...rest, transform: x.to(x => `translate3d(0,${x}px,0)`) }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </Root>
  );
}