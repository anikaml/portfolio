// import React, { useState } from 'react'
import React from 'react'
import { useTrail, animated } from 'react-spring'
import { Typography } from '@material-ui/core/';

const element1 = <Typography variant="h2">Hi,</Typography>
const element2 = <>
                  <Typography variant="h4">
                    {"I'm Anika. A web designer & front-end developer"} 
                  </Typography>
                </>
const element3 = (<Typography variant="h6" style={{marginTop: "2em"}}>
                    {"I design and develop clean and user-friendly websites."}
                  </Typography>)

const items = [ element1, element2, element3 ]
//const config = { mass: 5, tension: 2000, friction: 200 }

export default function Trails() {
  const trail = useTrail(items.length, {
    //config,
    opacity: 1,
    x: 20,
    height: 100,
    from: { opacity: 0, x: 0, height: 0 },
  })

  return (
    <>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={index}
          style={{ ...rest, transform: x.to(x => `translate3d(0,${x}px,0)`) }}
        >
          <animated.div style={{ height }}>{items[index]}</animated.div>
        </animated.div>
      ))}
    </>
  )
}