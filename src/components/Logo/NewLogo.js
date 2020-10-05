import React, {useEffect} from 'react';

import anime from "animejs";

//import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles(() => ({
//   div: {
//     height: 100,
//     width: 100,
//   },
//   blue: {
//     backgroundColor: "blue",
//   },
//   red: {
//     backgroundColor: "red",
//     marginTop: '3em',
//   },
//   green: {
//     backgroundColor: "green",
//     marginTop: '6em',
//   }
// }))

export default function NewLogo() {
  // const classes = useStyles(); 

  function animation() {
    anime({
      targets: "svg path",
      strokeDashoffset: [anime.setDashoffset, 0],
      easing: "cubicBezier(.5, .05, .1, .3)",
      duration: 1000,
      delay: 1500,
      //direction: 'alternate',
      //loop: true
    });
  }

  useEffect(() => {
    animation()
  }, []);

  return (
    <div id="anime-demo">
      {/* <svg width="100%" height="40" version="1.1" viewBox="0 0 67.663 72.4" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-16.061 -9.1571)">
            <path d="m37.492 51.557 12.1-33.3h0.2l11.9 33.3zm7.1-41.9-27.8 71.4h9.7l8-21.5h30.2l7.8 21.5h10.5l-27.9-71.4z" fill="none" stroke="#000" strokeWidth='3px'/>
          </g>
        </svg> */}
        <svg width="10.086mm" height="10.583mm" version="1.1" viewBox="0 0 10.086 10.583" xmlns="http://www.w3.org/2000/svg">
          <g transform="matrix(.14618 0 0 .14618 -2.0677 -1.1471)">
            <path d="m36.677 50.03 11.677-32.137h0.19302l11.484 32.137zm6.852-40.437-26.829 68.906h9.3612l7.7206-20.749h29.145l7.5276 20.749h10.133l-26.926-68.906z" fill="none" stroke="#000" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round"/>
          </g>
        </svg>
    </div>
  )
}
