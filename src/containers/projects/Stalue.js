import React from "react";

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

export default function Stalue() {
  
  const classes = useStyles();
  
    return (
      <>
        <div className={classes.errorDiv}>
          <Typography variant="subtitle1" className={classes.errorTyph} >
            This is Stalue Project Page
          </Typography>
        </div>
      </>
    )
}