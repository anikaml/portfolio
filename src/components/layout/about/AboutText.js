import React from 'react';
import { styled } from '@mui/material/styles';
import { isMobile, isTablet } from 'react-device-detect';
import SVG from 'react-inlinesvg';
import { Grid, Typography } from '@mui/material/';
import SocialMediaLink from '../../socialMedia/SocialMediaLink';
import Skills from './Skills';

const PREFIX = 'AboutText';

const classes = {
  div: `${PREFIX}-div`,
  container: `${PREFIX}-container`,
  typography: `${PREFIX}-typography`,
  link: `${PREFIX}-link`,
  socialMediaDiv: `${PREFIX}-socialMediaDiv`,
  description: `${PREFIX}-description`,
  comp: `${PREFIX}-comp`,
  text: `${PREFIX}-text`
};

const Root = styled('div')((
  {
    theme
  }
) => ({
  [`& .${classes.div}`]: {
    backgroundColor: theme.palette.primary.dark,
    padding: "0em 0em 1em 0em",
    '@media (max-width:1200px)': {
      padding: "1em 1em 14em 1em",
      height: "auto"
    },
    '@media (max-width:400px)': {
      padding: "1em 1em 1em 1em",
      height: "auto"
    },
  },

  [`& .${classes.container}`]: {
    margin: "0em auto",
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'auto',
    padding: '2em',
    '@media (max-width:1000px)': {
      padding: "2em 1em 2em 1em",
      height: 'auto',
    },
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      padding: "7em 3em 3em 3em",
      height: 'auto',
    },

  },

  [`& .${classes.typography}`]: {
    color: theme.palette.primary.contrastText,
  },

  [`& .${classes.link}`]: {
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      boxShadow: 'rgb(255, 188, 162) 0px -46px inset',
    }
  },

  [`& .${classes.socialMediaDiv}`]: {
    display: 'flex',
    justifyContent: "center",
    flexWrap: "wrap",
  },

  [`& .${classes.description}`]: {
    fontWeight: 300,
    '@media (max-width:900px)': {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
  },

  [`& .${classes.comp}`]: {
    maxWidth: "-webkit-fill-available",
    height: "auto",
    maxHeight: '60vh',
    width: '100%',
    '@media (max-width:900px)': {
      display: 'none',
    },
  },

  [`& .${classes.text}`]: {
    padding: '4em 6em',
    margin: '2em',
    '@media (max-width:900px)': {
      padding: '2em',
      margin: "0em",
    },
    borderRadius: "50px",
    boxShadow: "-20px 20px 51px #070613, 20px -20px 51px #1b1a4d",
  }
}));

export default function AboutText() {
  return (
    (<Root>
      <div id="about" className={classes.div}>
        <Grid container className={classes.container}>
          <Grid item lg={4}>
            <SVG src={process.env.PUBLIC_URL + "/icons/anika.svg"} className={classes.comp} />
          </Grid>
          <Grid item lg={7} className={classes.text}>
            <Typography variant={isTablet ? "h2" : isMobile ? "h4" : "h3"} className={classes.typography} style={{ marginBottom: "0.5em" }}>
              {"Hi,"}
            </Typography>
            <Typography variant={isTablet ? "h3" : "h5"} className={classes.typography}>
              {"I'm Anika. I work as a Senior Frontend Software Engineer."}
            </Typography>
            <Typography variant={isTablet ? "h5" : "h6"} style={{ margin: "1em auto" }} className={`${classes.typography} ${classes.description}`}>
              {"Design has been my true passion for as long as I remember. I have started my professional journey working as an Architectural Designer in NYC. After a few years of learning new skills and discovering new possibilities along the way, I've decided to try out a new creative outlet - Web Design and Development. After many hours of learning, creating a handful of projects from scratch, and seeing the infinite possibilities for expression that this field offered, I knew that the next step in my career was to become a web designer & front-end developer."}
            </Typography>
            <div className={classes.socialMediaDiv}>
              <SocialMediaLink
                href='https://github.com/anikaml'
                name='GitHub'
                iconOnly
              />
              <SocialMediaLink
                href='https://linkedin.com/in/anika-mlodzianowski'
                name='LinkedIn'
                iconOnly
              />
            </div>
          </Grid>
        </Grid>
      </div>
      <SVG src={process.env.PUBLIC_URL + "/icons/about_wave.svg"} style={{ marginTop: "-2px" }} />
      <Skills />
    </Root>)
  );
}

