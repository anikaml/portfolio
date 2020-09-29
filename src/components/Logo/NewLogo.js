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
      <svg width="100%" height="40" version="1.1" viewBox="0 0 67.663 72.4" xmlns="http://www.w3.org/2000/svg">
          <g transform="translate(-16.061 -9.1571)">
            <path d="m37.492 51.557 12.1-33.3h0.2l11.9 33.3zm7.1-41.9-27.8 71.4h9.7l8-21.5h30.2l7.8 21.5h10.5l-27.9-71.4z" fill="none" stroke="#000" strokeWidth='3px'/>
          </g>
        </svg>
    </div>
  )
}
