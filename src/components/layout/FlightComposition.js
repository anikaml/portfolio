import React, {Component} from 'react'
import Flight, { Rect, Oval } from 'react-flight/dom'

//import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core/';

// const useStyles = makeStyles(() => ({
//   div: {
//     height: 100,
//     width: 100,
//     backgroundColor: "red",
//   },
//   typography: {
//     color: "blue",
//   }
// }))

export default class FlightComposition extends Component {
  
  render() {
    return (
 
  //   <Flight interactive ref={flight => (flight)}>
  //   <Flight.Frame duration={300} source interactive showFrames>
  //     <div className="keyframe">
  //       <Rect
  //         name="head-1"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#95A2AA',
  //           left: 30 - 20,
  //           top: 20,
  //           width: 50,
  //           height: 10,
  //         }}
  //       />

  //       <Rect
  //         name="head-2"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#E6ECF0',
  //           left: 120 - 15,
  //           top: 20,
  //           width: 120,
  //           height: 10,
  //         }}
  //       />
  //       <Rect
  //         name="head-4"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#E6ECF0',
  //           right: 15,
  //           top: 20,
  //           width: 30,
  //           height: 10,
  //         }}
  //       />

  //       <Rect
  //         name="img-bg"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#E6ECF0',
  //           left: 80 - 30,
  //           top: 120,
  //           width: 90,
  //           height: 90,
  //         }}
          
  //       />

  //       <Rect
  //         name="img-main"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#4DA1FF',
  //           left: 50 - 15,
  //           top: 100,
  //           width: 90,
  //           height: 90,
  //         }}
  //       />

  //       <div
  //         id="brace-1"
  //         className="brace-1"
  //         style={{
  //           color: '#95A2AA',
  //           top: 30,
  //           left: -50,
  //           fontSize: 30,
  //         }}
  //       >
  //         {'{'}
  //       </div>
  //       <div
  //         id="brace-2"
  //         className="brace-2"
  //         style={{
  //           color: '#95A2AA',
  //           top: 180,
  //           left: -50,
  //           fontSize: 30,
  //         }}
  //       >
  //         {'}'}
  //       </div>
  //     </div>

  //   </Flight.Frame>

  //   <Flight.Frame duration={300} showFrames>
  //     <div className="keyframe">
  //       <Rect
  //         name="head-1"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#95A2AA',
  //           left: -60,
  //           top: 20,
  //           width: 50,
  //           height: 10,
  //         }}
  //       />

  //       <Rect
  //         name="head-2"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#E6ECF0',
  //           left: 120 - 15,
  //           top: -15,
  //           width: 120,
  //           height: 10,
  //         }}
  //       />

  //       <Rect
  //         name="head-4"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#E6ECF0',
  //           right: -80,
  //           top: 20,
  //           width: 30,
  //           height: 10,
  //         }}
  //       />

  //       <Rect
  //         name="img-bg"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#E6ECF0',
  //           left: 80 - 15,
  //           top: 360,
  //           width: 90,
  //           height: 90,
  //         }}
  //       />

  //       <Rect
  //         name="img-main"
  //         radius={5}
  //         style={{
  //           backgroundColor: '#4DA1FF',
  //           left: 50 - 15,
  //           top: 120,
  //           width: 60,
  //           height: 60,
  //         }}
  //       />

  //       <div
  //         id="brace-1"
  //         className="brace-1"
  //         style={{
  //           color: '#95A2AA',
  //           top: 30,
  //           left: 20,
  //           fontSize: 30,
  //         }}
  //       >
  //         {'{'}
  //       </div>
  //       <div
  //         id="brace-2"
  //         className="brace-2"
  //         style={{
  //           color: '#95A2AA',
  //           top: 190,
  //           left: 20,
  //           fontSize: 30,
  //         }}
  //       >
  //         {'}'}
  //       </div>
  //     </div>

  //   </Flight.Frame>

  // </Flight>
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
            
            
          </div>
        </Flight.Frame>
      </Flight>
    </Container>
  )
}}