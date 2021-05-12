import React from 'react';

import { isMobile, isMobileOnly, isTablet} from 'react-device-detect';
import { Parallax } from 'react-scroll-parallax';
import SVG from 'react-inlinesvg';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Link, Typography } from '@material-ui/core/';

import SocialMediaLink from '../../socialMedia/SocialMediaLink';
import FadeIn from '../../../containers/style/FadeIn';

const useStyles = makeStyles((theme) => ({
  div: {
    backgroundColor: theme.palette.primary.dark,
    marginTop: '-5em',
    padding: "4em 0em 20em 0em",
    '@media (max-width:900px)': {
      padding: "1em 1em 30em 1em",
      height: "auto",
      marginTop: isTablet ? '0em' : '-3em',
    },
    '@media (max-width:600px)': {
      padding: "1em 1em 20em 1em",
      height: "auto",
      marginTop: '-3em',
    },
    /* IpadPro  Portrait */
    '@media only screen and (min-width: 1024px) and (max-height: 1366px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1.5)': {
      //marginBottom: "-70vh",
    },
    '@media (min-width:901px) and (max-width:1440px)': {
      marginTop: isTablet ? '2em' : '-4em',
    },
    '@media (min-width:1441px)': {
      marginTop: '-2em',
    },
  },
  container: {
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
  typography: {
    color: theme.palette.primary.contrastText,
  },
  link: {
    textDecoration: 'none',
    transition: 'all .2s ease-in-out',
    //boxShadow: `${highlightColor} 0px -3px 0px inset`, //another way to do the highlight
    '&:hover': {
      boxShadow: 'rgb(255, 188, 162) 0px -46px inset',
    }
  },
  socialMediaDiv: {
    display: 'flex',
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  description: {
    fontWeight: 300,
    //fontSize: 'calc(16px + 6 * ((100vw - 320px) / 680))',
    '@media (max-width:900px)': {
      fontSize: '1.25rem',
      fontWeight: 400,
    },
  },
  comp: {
    maxWidth: "-webkit-fill-available",
    height: "auto",
    maxHeight: '60vh',
    width: '100%',
    '@media (max-width:900px)': {
      display: 'none',
    },
  },
  text: {
    padding: '4em 6em',
    margin: '2em',
    '@media (max-width:900px)': {
      padding: '2em',
      margin: "0em",
    },
    //// glassmorphism
     //background: "rgba( 255, 255, 255, 0.05 )",
    // boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    // backdropFilter: "blur( 25px )",
    // '-webkit-backdrop-filter': "blur( 4px )",
    // borderRadius: "25px",
    // border: "1px solid rgba( 255, 255, 255, 0.18 )",
    //// neuromorphism
    borderRadius: "50px",
    boxShadow:  "-20px 20px 51px #070613, 20px -20px 51px #1b1a4d",
  },
}));

export default function AboutText() {
  const classes = useStyles();
  
  return (
    <>
      <Parallax y={isMobileOnly? [10, -10] : [20, -20]} className={classes.parallaxFooter} tagOuter="section" styleOuter={{margin: 0}}>
        <div id="about" className={classes.div}>
          <Grid container className={classes.container}>
            <Grid item lg={4}>
              <SVG src={process.env.PUBLIC_URL + "/icons/Computer.svg"} className={classes.comp}/>   
            </Grid>
            <Grid item lg={7} className={classes.text}>
              <FadeIn>
                <Typography variant={isTablet?"h2":isMobile?"h4":"h3"} className={classes.typography} style={{marginBottom: "0.5em"}}>
                {"Hi,"}
              </Typography>
              </FadeIn>
              <FadeIn>
                <Typography variant={isTablet?"h3":"h5"} className={classes.typography}>
                  {"I'm Anika. A front-end developer & web designer, currently working at "} 
                    <Link
                      href="https://bokiem.solutions"
                      style={{ textDecoration: 'none'}}
                      className={classes.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {"Bokiem Solutions"}
                    </Link>
                  {" San Diego, CA"}
                </Typography>
              </FadeIn>
              <FadeIn>
                <Typography variant={isTablet?"h5":"h6"} style={{margin: "1em auto"}} className={`${classes.typography} ${classes.description}`}>
                  {"Design has been my true passion for as long as I remember. I have started my professional journey working as an Architectural Designer in NYC. After a few years of learning new skills and discovering new possibilities along the way, I've decided to try out a new creative outlet - Web Design and Development. After many hours of learning, creating a handful of projects from scratch, and seeing the infinite possibilities for expression that this field offered, I knew that the next step in my career was to become a web designer & front-end developer."}
                </Typography>
              </FadeIn>
              <div className={classes.socialMediaDiv}>
                <SocialMediaLink
                  href='https://github.com/anikaniescierewicz'
                  name='GitHub'
                />
                <SocialMediaLink
                  href='https://linkedin.com/in/anika-mlodzianowski'
                  name='LinkedIn'
                />
              </div>
            </Grid>
          </Grid>
        </div>
        <SVG src={process.env.PUBLIC_URL + "/icons/about_wave.svg"} style={{marginTop: "-2px"}}/>          
      </Parallax>
    </>
  )
}

