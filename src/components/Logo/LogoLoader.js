import React from 'react';

import { motion } from "framer-motion";

import { makeStyles } from '@material-ui/core/styles';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
  loader: {
    overflow: 'visible',
    stroke: theme.palette.primary.dark,
    strokeWidth: 3,
    strokeLinejoin: 'round',
    strokeLinecap: 'round',
    zIndex: 2,
  },
}))

export default function LogoLoader() {
  const classes = useStyles(); 

  const d = "M 41.82434463500977 40.81313323974609 L 36.57451248168945 40.81313323974609 L 31.98586654663086 29.08614349365234 L 31.86151695251465 28.76833343505859 L 31.5202465057373 28.76833343505859 L 13.27256679534912 28.76833343505859 L 12.93446731567383 28.76833343505859 L 12.80853748321533 29.08211326599121 L 8.100604057312012 40.81313323974609 L 3.329931259155273 40.81313323974609 L 19.70746421813965 1.813133239746094 L 25.3874340057373 1.813133239746094 L 41.82434463500977 40.81313323974609 Z M 22.05526733398438 5.631173133850098 L 21.93080711364746 5.948733329772949 L 14.61956691741943 24.6041431427002 L 14.35211753845215 25.28658294677734 L 15.08509731292725 25.28658294677734 L 29.70731735229492 25.28658294677734 L 30.43587684631348 25.28658294677734 L 30.17386817932129 24.60676383972168 L 22.98373794555664 5.951353073120117 L 22.86032676696777 5.631173133850098 L 22.51718711853027 5.631173133850098 L 22.39633750915527 5.631173133850098 L 22.05526733398438 5.631173133850098 Z"

  return (
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={isMobile ? 20 : 40}
      height={isMobile ? 20 : 40}
      viewBox="0 0 40 40"
      className={classes.loader}
    >
      <motion.path
        d={d}
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
        }}
        strokeWidth={isMobile ? 1 : 1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          loop: Infinity,
          repeatDelay: 1
        }}
        fill='rgb(100, 255, 255)'
      />
    </motion.svg>
  )
}
