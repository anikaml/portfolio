import React from 'react';
import { styled } from '@mui/material/styles';
import { Divider, Typography } from '@mui/material/';
import packageJson from '../../package.json';
import SocialMediaLink from '../socialMedia/SocialMediaLink';
import { MOBILE, MOBILE_SM } from '../../utils/constants';

const PREFIX = 'Footer';

const classes = {
  footerDiv: `${PREFIX}-footerDiv`,
  container: `${PREFIX}-container`,
  divider: `${PREFIX}-divider`,
  whiteText: `${PREFIX}-whiteText`,
  author: `${PREFIX}-author`
};

const Root = styled('footer')((
  {
    theme
  }
) => ({
  [`&.${classes.footerDiv}`]: {
    backgroundColor: theme.palette.primary.dark,
    padding: "4em 0 2em 0",
    marginTop: "2em",
    textAlign: "center",
    letterSpacing: 3,
    [`@media (max-width:${MOBILE})`]: {
      padding: "2em 0",
      letterSpacing: 0
    }
  },

  [`& .${classes.container}`]: {
    margin: "2em auto 0 auto",
    display: "flex",
    justifyContent: "space-between",
    padding: "0 4em",
    [`@media (max-width:${MOBILE})`]: {
      flexWrap: "wrap",
      padding: "0 2em",
    }
  },

  [`& .${classes.divider}`]: {
    margin: "2em 4em",
    backgroundColor: theme.palette.primary.contrastText,
    opacity: 0.5,
    [`@media (max-width:${MOBILE})`]: {
      margin: "2em 1em 0 1em",
    }
  },

  [`& .${classes.whiteText}`]: {
    color: theme.palette.primary.contrastText,
  },

  [`& .${classes.author}`]: {
    letterSpacing: 3,
    [`@media (max-width:${MOBILE_SM})`]: {
      letterSpacing: 0
    }
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
          <Typography variant="caption" className={`${classes.whiteText} ${classes.author}`}>
            &copy; {currentYear} Anika Mlodzianowski
          </Typography>
        </div>
      </div>
    </Root>
  );
}

