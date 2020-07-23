// import React, { useState } from 'react'
import React from 'react'
import PropTypes from "prop-types";
import { useTrail, animated } from 'react-spring'
import Typography from '@material-ui/core/Typography';
import { isMobileOnly } from 'react-device-detect';


const items = [
                <Typography variant={isMobileOnly? "h5" : "h3"}>Architectural Designer</Typography>,
                <><Typography variant="h6" display="inline">who become</Typography><Typography variant={isMobileOnly? "h5" : "h3"} display="inline"> Web Designer</Typography></>,
                <Typography variant="h5">Living & working in San Diego, California</Typography>
              ]
const config = { mass: 5, tension: 2000, friction: 200 }

export default function Trails(props) {
  const toggle = true
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    // <div className="trails-main" onClick={() => set(state => !state)}>
      <>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{ ...rest, transform: x.interpolate(x => `translate3d(0,${x}px,0)`) }}>
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
        ))}
      </>
  
  )
}

Trails.propTypes = {
  classes: PropTypes.object,
};