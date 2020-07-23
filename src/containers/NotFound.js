import React from "react";

import { isMobileOnly } from 'react-device-detect';
import { Browser } from 'react-kawaii';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
  errorDiv: {
    height: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    '@media (max-width:600px)': {
      padding: "1em",
    }
  },
  errorTyph: {
    color: "grey",
    marginTop: "2em",
    textAlign: "center",
    lineHeight: "1.5em",
  },
  browser: {
    animationName: '$float',
    animation: "float 6s ease-in-out infinite",
  },
  '@keyframes float': { 
    "0%": { 
      transform: 'translatey(0px)'
    }, 
    "50%": { 
      transform: 'translatey(-20px)'
    }, 
    "100%": {
      transform: 'translatey(0px)'
    }
  }
}))

export default function NotFound() {
  
  const classes = useStyles();
  
    return (
      <>
        <div className={classes.errorDiv}>
          <Browser size={isMobileOnly ? 100 : 200} mood="ko" color="#4bc0c0" className={classes.browser}/>
          <Typography variant="subtitle1" className={classes.errorTyph} >
            Sorry, page not found!
          </Typography>
        </div>
      </>
    )
}