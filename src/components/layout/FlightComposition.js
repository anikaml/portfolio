import React, {Component} from 'react'
import Flight, { Rect, Oval } from 'react-flight/dom'

import { Container } from '@material-ui/core/';

export default class FlightComposition extends Component {
  
  render() {
    return (
    <Container maxWidth="lg">
      <Flight interactive ref={flight => (this.flight = flight)} >
        <Flight.Frame duration={300} source showFrames>
          <div className="keyframe">
            <Rect
              name="line1"
              radius={5}
              style={{
                backgroundColor: '#95A2AA',
                left: 120,
                top: 100,
                width: 130,
                height: 10,
              }} 
            />

            <Oval
              name="circ1"
              size={16}
              style={{
                backgroundColor: '#79CD15',
                left: 110,
                top: 130,
              }}
            />

          <Rect
            name="rec1"
            style={{
              backgroundColor: '#95A2AA',
              left: 120,
              top: -10,
              width: 90,
              height: 90,
            }}
          />
            <Oval
              name="circ2"
              size={100}
              style={{
                backgroundColor: '#5000ca',
                left: 550,
                top: 170,
              }} />
          </div>
        </Flight.Frame>

        <Flight.Frame duration={300} showFrames>
          <div className="keyframe">
            <Rect
              name="line1"
              radius={5}
              style={{
                backgroundColor: '#95A2AA',
                left: 120,
                top: -10,
                width: 230,
                height: 10,
              }} />

            <Oval
              name="circ1"
              size={220}
              style={{
                backgroundColor: '#79CD15',
                left: 50,
                top: 70,
              }} />
            <Oval
              name="circ2"
              size={100}
              style={{
                backgroundColor: '#5000ca',
                left: 550,
                top: 170,
                display: "none",
              }} />
            <Rect
              name="rec1"
              style={{
                backgroundColor: '#95A2AA',
                left: 120,
                top: -10,
                width: 90,
                height: 90,
              }}
            />      
          </div>
        </Flight.Frame>
      </Flight>
    </Container>
  )
}}