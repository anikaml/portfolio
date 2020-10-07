import React from 'react';

import { motion } from "framer-motion";

import { makeStyles } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles(() => ({
  container: {
    // width: 150,
    // height: 150,
    // display: "flex",
    // placeContent: "center",
    // overflow: 'hidden',
    // background: 'rgba(155, 255, 255, 0.2)',
    // borderRadius: 30,

    // width: 200,
    // height: 200,
    // backgroundColor: 'transparent',
    // zIndex: 1,
    // '&:hover': {
    //   backgroundColor: '#f36',
    //   //filter: "blur(4px)",
    //   cursor: "pointer",
    //   animationPlayState: "running",
    //   animationName: '$meltEnter',
    //   animation: 'meltEnter 2s ease-in alternate infinite, meltLeave 4s ease-out 2s alternate infinite',
    // },
   
    // animationPlayState: "pause",
  },
  item: {
    // width: '40px',
    // height: 40,
    display: 'block',
    overflow: 'visible',
    stroke: '#000',
    strokeWidth: 3,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    zIndex: 2,
  },
  path: {
    width: 20,
    height: 'auto',
  },
//   melt: {
//     width: 200,
//     height: 200,
//     //backgroundColor: 'transparent',
//     zIndex: -1,
//     animationPlayState: "pause",
//     backgroundColor: '#f36432',
//     position: "absolute",
//     top: 0,
//     left: 0,
//     '&:hover': {
//       //backgroundColor: '#f36',
//       cursor: "pointer",
//       animationPlayState: "running",
//       animationName: '$meltEnter, $meltLeave',
//       animation: 'meltEnter 2s ease-in alternate, meltLeave 4s ease-out 2s alternate',
//     },
//   },
//   '@keyframes meltEnter': {
//     '0%': {
//       clipPath: "path('M0 -0.12C8.33 -8.46 16.67 -12.62 25 -12.62C37.5 -12.62 35.91 0.15 50 -0.12C64.09 -0.4 62.5 -34.5 75 -34.5C87.5 -34.5 87.17 -4.45 100 -0.12C112.83 4.2 112.71 -17.95 125 -18.28C137.29 -18.62 137.76 1.54 150.48 -0.12C163.19 -1.79 162.16 -25.12 174.54 -25.12C182.79 -25.12 191.28 -16.79 200 -0.12L200 -34.37L0 -34.37L0 -0.12Z')",
//       backgroundColor: '#f36432',
//     },
//     '100%': {
//       clipPath: "path('M0 199.88C8.33 270.71 16.67 306.13 25 306.13C37.5 306.13 35.91 231.4 50 231.13C64.09 230.85 62.5 284.25 75 284.25C87.5 284.25 87.17 208.05 100 212.38C112.83 216.7 112.71 300.8 125 300.47C137.29 300.13 137.76 239.04 150.48 237.38C163.19 235.71 162.16 293.63 174.54 293.63C182.79 293.63 191.28 262.38 200 199.88L200 0.13L0 0.13L0 199.88Z')",
//       backgroundColor: '#f36',
//     }
//   },
//   '@keyframes meltLeave': {
//     '0%': {
//       clipPath: "path('M0 0C8.33 -8.33 16.67 -12.5 25 -12.5C37.5 -12.5 36.57 -0.27 50 0C63.43 0.27 62.5 -34.37 75 -34.37C87.5 -34.37 87.5 -4.01 100 0C112.5 4.01 112.38 -18.34 125 -18.34C137.62 -18.34 138.09 1.66 150.48 0C162.86 -1.66 162.16 -25 174.54 -25C182.79 -25 191.28 -16.67 200 0L200 200L0 200L0 0Z')",
//       backgroundColor: 'blue',
//     },
//     '100%': {
//       clipPath: "path('M0 200C8.33 270.83 16.67 306.25 25 306.25C37.5 306.25 36.57 230.98 50 231.25C63.43 231.52 62.5 284.38 75 284.38C87.5 284.38 87.5 208.49 100 212.5C112.5 216.51 112.38 300.41 125 300.41C137.62 300.41 138.09 239.16 150.48 237.5C162.86 235.84 162.16 293.75 174.54 293.75C182.79 293.75 191.28 262.5 200 200L200 200L0 200L0 200Z')",
//       backgroundColor: 'green',
//     }
// }
}))

export default function LogoMotion() {
  const classes = useStyles(); 

  const item = {
    hover: { scale: 1.1, rotate: 180},
    pressed: { scale: isMobile ? 1.5 : 1.2, rotate: isMobile ? 0 : 360},
  }
  
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: 'rgb(100, 255, 255)',
    },
  };

  //const d = 'M0 -0.12C8.33 -8.46 16.67 -12.62 25 -12.62C37.5 -12.62 35.91 0.15 50 -0.12C64.09 -0.4 62.5 -34.5 75 -34.5C87.5 -34.5 87.17 -4.45 100 -0.12C112.83 4.2 112.71 -17.95 125 -18.28C137.29 -18.62 137.76 1.54 150.48 -0.12C163.19 -1.79 162.16 -25.12 174.54 -25.12C182.79 -25.12 191.28 -16.79 200 -0.12L200 -34.37L0 -34.37L0 -0.12Z'

  //const d = "m36.677 50.03 11.677-32.137h0.19302l11.484 32.137zm6.852-40.437-26.829 68.906h9.3612l7.7206-20.749h29.145l7.5276 20.749h10.133l-26.926-68.906z"
  //const d = "m36.944 48.071 11.288-31.065h0.18658l11.101 31.065zm6.6235-39.088-25.934 66.608h9.049l7.4631-20.057h28.173l7.2765 20.057h9.7953l-26.028-66.608z"
  //const d = "M8.831,13.05l3.656-9.328h.06l3.6,9.328ZM10.976,1.313l-8.4,20H5.508l2.417-6.022h9.124l2.356,6.022h3.172l-8.429-20Z" 
  // const d1 = "M15.085,26.63,22.4,6.51h.121l7.19,20.121Zm4.29-25.317L2.578,44.455H8.439l4.834-12.991H31.52l4.713,12.991h6.344L25.719,1.313Z"
  const d = "M 41.82434463500977 40.81313323974609 L 36.57451248168945 40.81313323974609 L 31.98586654663086 29.08614349365234 L 31.86151695251465 28.76833343505859 L 31.5202465057373 28.76833343505859 L 13.27256679534912 28.76833343505859 L 12.93446731567383 28.76833343505859 L 12.80853748321533 29.08211326599121 L 8.100604057312012 40.81313323974609 L 3.329931259155273 40.81313323974609 L 19.70746421813965 1.813133239746094 L 25.3874340057373 1.813133239746094 L 41.82434463500977 40.81313323974609 Z M 22.05526733398438 5.631173133850098 L 21.93080711364746 5.948733329772949 L 14.61956691741943 24.6041431427002 L 14.35211753845215 25.28658294677734 L 15.08509731292725 25.28658294677734 L 29.70731735229492 25.28658294677734 L 30.43587684631348 25.28658294677734 L 30.17386817932129 24.60676383972168 L 22.98373794555664 5.951353073120117 L 22.86032676696777 5.631173133850098 L 22.51718711853027 5.631173133850098 L 22.39633750915527 5.631173133850098 L 22.05526733398438 5.631173133850098 Z"


  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? 20 : 40}
      height={isMobile ? 20 : 40}
      viewBox="0 0 40 40"
      className={classes.item}
      // whileHover={{ scale: 1.1 }}
      // whileHover={{ scale: 1.05, strokeWidth: 60 }}
      // whileTap={{scale: 1.2}}
      whileHover="hover"
      whileTap="pressed"
      variants={item}
    >
      <motion.path
        d={d}
        variants={icon}
        initial="hidden"
        animate="visible"
        strokeWidth={isMobile ? 1 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={{
          default: { duration: 2, ease: "easeInOut" },
          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
        }}
      />
    </motion.svg>
  )
}
