// import React, { useState } from 'react'
import React from 'react'
import { useTrail, animated } from 'react-spring'

import { isMobile, isTablet } from 'react-device-detect';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';

const useStyles = makeStyles(() => ({
  trailsDiv: {
    display: "block",
    '@media (max-width:900px)': {
      display: "flex",
      flexDirection: 'column',
      minHeight: '35vh',
      width: isTablet ? '60vw' : 'auto',
      justifyContent: 'space-around',
    },
   /* IpadPro  Portrait */
   '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      width: '60vw',
    }
  },
  element1: {
    '@media (max-width:330px)': {
      fontSize: '2rem',
    },
  },
  element2: {
    fontWeight: 500,
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      fontSize: '4rem',
    },
    '@media (max-width:330px)': {
      fontSize: '1.75rem',
    },
  },
  element3: {
    maxWidth: 450,
    lineHeight: 1.5,
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      fontSize: '2rem',
    },
    '@media (max-width:900px)': {
      lineHeight: 'normal',
      fontWeight: 400,
    },
  },
}))



export default function Trails() {
  const classes = useStyles();

  const element1 = <Typography variant={isTablet?'h1':isMobile?"h4":"h2"} display="inline" style={{fontWeight: 500}} className={classes.element1}>{"Hi, I'm Anika."}</Typography>
  const element2 = (<Typography variant={isMobile? "h5":"h3"} display="inline" className={classes.element2}>
                     {"A web designer & front-end developer"} 
                  </Typography>)
  const element3 = (<Typography variant="h6" style={{marginTop: isMobile? '1em' : "2em"}} className={classes.element3}>
                    {"I create clean and user-friendly websites, utilizing my multidisciplinary design background to facilitate unique designs."}
                  </Typography>)

  const items = [ element1, element2, element3 ]
  // const config = { mass: 5, tension: 2000, friction: 200 }
  const config = { mass: 15, tension: 2000, friction: 200 }

  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 20,
    height: 'auto',
    from: { opacity: 0, x: 0, height: 0 },
  })

  return (
    <div className={classes.trailsDiv}>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={index}
          style={{ ...rest, transform: x.to(x => `translate3d(0,${x}px,0)`) }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </div>
  )
}