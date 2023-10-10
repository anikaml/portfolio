import React from 'react';

import { styled } from '@mui/material/styles';
import { Divider, Typography } from '@mui/material/';

import packageJson from '../../package.json';
import SocialMediaLink from '../socialMedia/SocialMediaLink';
import { isMobileOnly } from 'react-device-detect';

const PREFIX = 'Footer';

const classes = {
  footerDiv: `${PREFIX}-footerDiv`,
  container: `${PREFIX}-container`,
  divider: `${PREFIX}-divider`,
  whiteText: `${PREFIX}-whiteText`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`&.${classes.footerDiv}`]: {
    backgroundColor: theme.palette.primary.dark,
    padding: "4em 0 2em 0",
    marginTop: "2em",
    textAlign: "center",
    letterSpacing: isMobileOnly ? 0 : 3,
    '@media (max-width:900px)': {
      padding: "2em 0",
    }
  },

  [`& .${classes.container}`]: {
    margin: "2em auto 0 auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 4em",
    '@media (max-width:900px)': {
      flexWrap: "wrap",
      padding: "0 2em",
    }
  },

  [`& .${classes.divider}`]: {
    margin: "2em 4em",
    backgroundColor: theme.palette.primary.contrastText,
    opacity: 0.5,
    '@media (max-width:900px)': {
      margin: "2em 1em 0 1em",
    }
  },

  [`& .${classes.whiteText}`]: {
    color: theme.palette.primary.contrastText,
  }
}));

export default function Footer() {

  const currentDate = new Date()
  const currentYear = currentDate.getFullYear()

  return (
    <Root className={classes.footerDiv}>
      <SocialMediaLink
        href='https://github.com/anikaml'
        name='GitHub'
      />
      <SocialMediaLink
        href='https://linkedin.com/in/anika-mlodzianowski'
        name='LinkedIn'
      />
      <Divider variant="middle" className={classes.divider} />
      <div className={classes.container}>
        <div>
          <Typography variant="caption" className={classes.whiteText}>
            Version: {packageJson.version}
          </Typography>
        </div>
        <div>
          <Typography variant="caption" className={classes.whiteText} style={{ letterSpacing: isMobileOnly ? 0 : 3 }}>
            &copy; {currentYear} Anika Mlodzianowski
          </Typography>
        </div>
      </div>
    </Root>
  );
}

