import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';

import { greyColor, shadowColor } from '../../utils/colors';

const useStyles = makeStyles(() => ({
  scroll: {
    position: 'absolute',
    left: '50%',
    width: '2.5rem',
    height: '4rem',
    marginLeft: -20,
    bottom: '1rem',
    marginTop: -35,
    boxShadow: `inset 0 0 0 1px ${shadowColor}`,
    borderRadius: 25,
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
    }
  },
  "@keyframes scroll": {
    "0%": {
      opacity: 1,
    },
    "100%": {
      opacity: 0,
      transform: 'translateY(46px)',
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

