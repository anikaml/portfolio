import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography } from '@material-ui/core/';

import packageJson from '../../../package.json';
import SocialMediaLink from '../socialMedia/SocialMediaLink';
import { isMobileOnly } from 'react-device-detect';

const useStyles = makeStyles((theme) => ({
  footerDiv: {
    backgroundColor: theme.palette.primary.dark,
    padding: "4em 0 2em 0",
    marginTop: "2em",
    textAlign: "center",
    letterSpacing: 3,
    '@media (max-width:900px)': {
      padding: "2em 0",
    }
  },
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
      <SocialMediaLink
        href='https://github.com/anikaniescierewicz'
        name='GitHub'
      />
      <SocialMediaLink
        href='https://linkedin.com/in/anika-mlodzianowski'
        name='LinkedIn'
      />
      <Divider variant="middle" className={classes.divider}/>
      <div className={classes.container}>
        <div>
          <Typography variant="caption" className={classes.whiteText}>
            Version: {packageJson.version}
          </Typography>
        </div>
        <div>
          <Typography variant="caption" className={classes.whiteText} style={{letterSpacing: isMobileOnly? 0 : 3}}>
            &copy; 2020 Anika Mlodzianowski
          </Typography>
        </div>
      </div>
    </div>
  )
}

