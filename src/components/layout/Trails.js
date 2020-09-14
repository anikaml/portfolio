// import React, { useState } from 'react'
import React from 'react'
import { useTrail, animated } from 'react-spring'

import { isMobile } from 'react-device-detect';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';

const useStyles = makeStyles(() => ({
  trailsDiv: {
    display: "block",
    maxHeight: "5em",
  }
}))

const element1 = <Typography variant={isMobile? "h4":"h2"} display="inline" color="textPrimary" style={{fontWeight: 600}}>{"Hi, I'm Anika."}</Typography>
const element2 = <Typography variant={isMobile? "h5":"h3"} display="inline" style={{fontWeight: 600}}>
                     {"A web designer & front-end developer"} 
                  </Typography>
const element3 = (<Typography variant="h6" style={{marginTop: "2em"}}>
                    {"I design and develop clean and user-friendly websites."}
                  </Typography>)

const items = [ element1, element2, element3 ]
// const config = { mass: 5, tension: 2000, friction: 200 }
const config = { mass: 15, tension: 2000, friction: 200 }

export default function Trails() {
  const classes = useStyles();
  const trail = useTrail(items.length, {
    config,
    opacity: 1,
    x: 20,
    height: isMobile? 60 : 100,
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