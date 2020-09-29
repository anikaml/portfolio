import React from 'react';

import { isMobile, isMobileOnly, } from 'react-device-detect';
import { Parallax } from 'react-scroll-parallax';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link, Typography } from '@material-ui/core/';
import FadeIn from '../../containers/style/FadeIn';
import SectionTitle from './SectionTitle';
import SocialMediaLink from '../socialMedia/SocialMediaLink';

const useStyles = makeStyles((theme) => ({
  div: {
    backgroundColor: theme.palette.primary.dark,
    //**clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0 100%)',
    clipPath: 'polygon(100% 0, 100% 80%, 0 100%, 0 10%)',
    //padding: "4em 0em 30em 0em",
    marginBottom: "-45em",
    marginTop: '-5em',
    height: "200vh",
    //marginTop: '10em',
    padding: "14em 0em 30em 0em",
    '@media (max-width:900px)': {
      clipPath: 'polygon(100% 0, 100% 80%, 0 100%, 0 5%)',
      padding: "1em 1em 45em 1em",
      height: "auto",
    },
  },
  container: {
    margin: "2em auto",
    '@media (max-width:900px)': {
      padding: "7em 1em 2em 1em",
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
  }
}));

export default function AboutText() {
  const classes = useStyles();
  
  return (
    <>
      <SectionTitle id="about" title="About"/>
      <Parallax y={isMobileOnly? [10, -10] : [20, -20]} className={classes.parallaxFooter} tagOuter="section">
        <div id="about" className={classes.div}>
          <Container maxWidth="md" className={classes.container}>
            <FadeIn>
              <Typography variant={isMobile? "h4":"h2"} className={classes.typography} style={{marginBottom: "0.5em"}}>
              Hello there,
            </Typography>
            </FadeIn>
            <FadeIn>
              <Typography variant={isMobile? "h5":"h4"} className={classes.typography}>
                {"I'm Anika. A web designer & front-end developer, currently working at "} 
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
              <Typography variant={isMobile? "h6":"h5"} style={{marginTop: "1em"}} className={classes.typography}>
                {"Design have always been my true passion. Really! I have started my journey working as an Architectural Designer in NYC. After few years learning new skills and discovering new possibilities along the way, I've decided to use my creativity in a new field, so I've started creating beautiful, clean websites, and everything in between. This just felt right. And that's how I become web designer & front-end developer, a perfect mix between developer and designer." }
              </Typography>
          </FadeIn>
          <div className={classes.socialMediaDiv}>
            <SocialMediaLink
              href='https://github.com/anikaniescierewicz'
              name='GitHub'
            />
            <SocialMediaLink
              href='https://github.com/anikaniescierewicz'
              name='LinkedIn'
            />
          </div>
          </Container>
        </div>
      </Parallax>
    </>
  )
}

