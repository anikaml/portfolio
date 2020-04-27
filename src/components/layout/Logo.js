import React from 'react'
import { Spring, animated } from 'react-spring'
import { interpolate } from 'flubber'
import { GradientPinkRed as Gradient } from '@vx/gradient'

const paths = [
  // 'M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z',
  // 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z',
  // 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z',
  // 'M7 2v11h3v9l7-12h-4l4-8z',
  // 'M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z',
  "M 0 0 L 3.027 0 L 8.838 14.502 L 14.648 0 L 17.688 0 L 17.688 17.773 L 15.344 17.773 L 15.344 10.852 L 15.564 3.381 L 9.729 17.773 L 7.935 17.773 L 2.112 3.418 L 2.344 10.852 L 2.344 17.773 L 0 17.773 L 0 0 Z",
  // "M 10.713 14.219 L 9.121 9.971 L 2.158 9.971 L 0.576 14.219 L 0 14.219 L 5.322 0 L 5.967 0 L 11.289 14.219 L 10.713 14.219 Z M 5.645 0.635 L 2.354 9.443 L 8.926 9.443 L 5.645 0.635 Z"
  "M 13.318 17.773 L 11.475 12.793 L 3.406 12.793 L 1.575 17.773 L 0 17.773 L 6.726 0 L 8.154 0 L 14.88 17.773 L 13.318 17.773 Z M 7.434 1.831 L 3.87 11.511 L 10.999 11.511 L 7.434 1.831 Z"
]

const interpolators = []
for (let i = 0; i < paths.length; i++) {
  interpolators.push(
    interpolate(paths[i], paths[i + 1] || paths[0], { maxSegmentLength: 0.1 })
  )
}

export default class Logo extends React.Component {
  state = { 
    interpolators, 
    index: 0 
  }
  goNext = () =>
    this.setState(({ index, interpolators }) => ({
      index: index + 1 >= interpolators.length ? 0 : index + 1,
    }))
  render() {
    const { interpolators, index } = this.state
    const interpolator = interpolators[index]
    return (
      <div
        style={{
          backgroundColor: "blue",
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <svg width="100" viewBox="0 0 22 22">
          <Gradient id="gradient-morph" />
          <g fill="url(#gradient-morph)">
            <Spring
              reset
              native
              from={{ t: 0 }}
              to={{ t: 1 }}
              onRest={this.goNext}
            >
              {({ t }) => <animated.path d={t.interpolate(interpolator)} />}
            </Spring>
          </g>
        </svg>
      </div>
    )
  }
}