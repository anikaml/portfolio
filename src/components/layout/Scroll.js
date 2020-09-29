import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import { greyColor, shadowColor } from '../../utils/colors';

const useStyles = makeStyles(() => ({
  scroll: {
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)', //The translate value for transform is based off the size of the element, so that will center nicely
    width: '2.5em',
    height: '4em',
    bottom: '1em',
    boxShadow: `inset 0 0 0 1px ${shadowColor}`,
    borderRadius: 25,
    "&:before": {
      content: "''",
      position: 'absolute',
      left: '50%',
      width: '0.5em',
      height: '0.5em',
      background: greyColor,
      marginLeft: '-0.25em',
      top: '0.5em',
      borderRadius: '0.25em',
      animationDuration: '1.5s',
      animationIterationCount: 'infinite',
      animationName: '$scroll',
      animationDelay: '2s',
    }
  },
  "@keyframes scroll": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      transform: 'translateY(3em)',
    }
  }
}));

export default function Scroll() {
  const classes = useStyles();
  
  return (
    <>
      <Link href="/#projects" style={{ textDecoration: 'none'}} rel="noopener noreferrer">
        <div className={classes.scroll} />
      </Link>
    </>
  )
}

