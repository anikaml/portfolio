import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';

import { greyColor, shadowColor } from '../../utils/colors';
import { isMobile } from 'react-device-detect';

const useStyles = makeStyles(() => ({
  scroll: {
    position: 'absolute',
    left: '50%',
    right: '50%',
    transform: 'translate(-50%, -50%)', //The translate value for transform is based off the size of the element, so that will center nicely
    width: '2rem',
    height: '3.5rem',
    bottom: '1rem',
    boxShadow: `inset 0 0 0 1px white`,
    borderRadius: 25,
    border: `1px solid ${shadowColor}`,
    "&:before": {
      content: "''",
      position: 'absolute',
      left: '50%',
      width: '0.5rem',
      height: '0.5rem',
      background: greyColor,
      marginLeft: '-0.25rem',
      top: '0.5rem',
      borderRadius: '0.25rem',
      animationDuration: '1.5s',
      animationIterationCount: 'infinite',
      animationName: '$scroll',
      animationDelay: '2s',
    },
    '@media (max-width:900px)': {
      display: isMobile? 'initial' : 'none',
    },
  },
  "@keyframes scroll": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      transform: 'translateY(2rem)',
    }
  },
  rootIconButton: {
    padding: 0,
    position: 'absolute',
    bottom: '0rem',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    "&:hover": {
      background: "transparent",
    }
  },
}));

export default function Scroll() {
  const classes = useStyles();
  
  return (
    <>
      <IconButton 
        aria-label="projects"
        component={Link}
        href="/#projects"
        disableRipple
        disableTouchRipple
        classes={{
          'root': classes.rootIconButton,
        }}
      >
        <div className={classes.scroll} />
      </IconButton>
    </>
  )
}

