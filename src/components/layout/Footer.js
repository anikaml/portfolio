import React from 'react';

import { isMobile } from 'react-device-detect';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Link, Typography } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import FadeIn from '../../containers/style/FadeIn';
import packageJson from '../../../package.json';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: "2em auto 0 auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 4em",
    '@media (max-width:900px)': {
      flexWrap: "wrap",
      padding: "0 2em",
    }
  },
  footerDiv: {
    // backgroundColor: theme.palette.primary.main,
    //backgroundImage: "linear-gradient(to bottom, #ffffff, #ff6060, #ff6060)",
    backgroundColor: theme.palette.secondary.main,
    padding: "4em 0 2em 0",
    marginTop: "2em",
    textAlign: "center",
    letterSpacing: 3,
    '@media (max-width:900px)': {
      padding: "2em 0",
    }
  },
  typography: {
    fontWeight: 600,
    display: "inline-block",
    padding: "0.15em 0",
    transition: 'all .2s ease-in-out',
    '&:hover': {
      color: theme.palette.primary.main,
    }
  },
  divider: {
    margin: "2em 4em",
    backgroundColor: theme.palette.primary.contrastText,
    opacity: 0.5,
    '@media (max-width:900px)': {
      margin: "2em 1em 0 1em",
    }
  },
  whiteText: {
    color: theme.palette.primary.contrastText,
  },
}));

export default function Footer() {
  const classes = useStyles();
  
  return (
    <div className={classes.footerDiv}>
      <FadeIn>
        <Link 
          href="https://github.com/anikaniescierewicz"
          style={{ textDecoration: 'none'}}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.gitHubLink}
        >
          <Typography variant={isMobile? "h4" : "h3"} className={`${classes.typography} ${classes.whiteText}`}>
            <GitHubIcon className={classes.version}/> GitHub
          </Typography>
        </Link>
      </FadeIn>
      <FadeIn>
        <Link 
          href="https://github.com/anikaniescierewicz"
          style={{ textDecoration: 'none'}}
          target="_blank"
          rel="noopener noreferrer"
          className={classes.gitHubLink}
        >
          <Typography variant={isMobile? "h4" : "h3"} className={`${classes.typography} ${classes.whiteText}`}>
          <LinkedInIcon className={classes.version}/> LinkedIn 
          </Typography>
        </Link>
      </FadeIn>
      <Divider variant="middle" className={classes.divider}/>
      <div className={classes.container}>
        <Typography variant="caption" className={classes.whiteText}>
          Version: {packageJson.version}
        </Typography>
        <div>
          {/* <Link 
            href="https://github.com/anikaniescierewicz"
            style={{ textDecoration: 'none'}}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.gitHubLink}
          >
            <GitHubIcon className={classes.version}/>
          </Link>
          <Link 
            href="https://github.com/anikaniescierewicz"
            style={{ textDecoration: 'none'}}
            target="_blank"
            rel="noopener noreferrer"
            className={classes.gitHubLink}
          >
            <LinkedInIcon className={classes.version}/>
          </Link> */}
          <Typography variant="caption" className={classes.whiteText}>
            2020
          </Typography>
        </div>
      </div>
    </div>
  )
}

