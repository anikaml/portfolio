import React from 'react';

import SVG from 'react-inlinesvg';
import { isMobile, isTablet } from 'react-device-detect';
import { useInView } from 'react-intersection-observer';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core/';

import { shadowColor } from '../../../utils/colors';
import SectionTitle from '../SectionTitle';
import theme from '../../../utils/theme';
import FadeIn from '../../../containers/style/FadeIn';

const useStyles = makeStyles(() => ({
  container: {
    margin: "2em auto",
  },
  title: {
    fontWeight: 700,
  },
  field: {
    fontWeight: 700,
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 70%, #FFe359 65%)',
    display: "inline",
  },
  flexContainer: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "nowrap",
    '@media (max-width:900px)': {
      flexWrap: isTablet?"nowrap": "wrap",
    },
  },
  fieldDiv: {
    textAlign: "center",
    padding: "1em",
    border: `1px solid ${shadowColor}`,
    borderRadius: 40,
    //boxShadow: `0px 3px 5px 3px ${shadowColor}`,
    margin: "2em 1em",
    backgroundColor: "white",
    maxWidth: "40vw",
    zIndex: 10,
    transition: 'all .2s ease-in-out',
    '@media (max-width:900px)': {
      maxWidth: "90vw",
    },
    '&:hover': {
      filter: `drop-shadow(5px 5px 10px rgba(0,0,0,.25))`
    },
  },
  typography: {
    margin: "0.25em",
    lineHeight: "1.5em",
    fontWeight: 300,
    '@media (max-width:900px)': {
      margin: "auto",
      padding: "inherit",
    },
  },
  icon: {
    transition: 'all .2s ease-in-out',
    maxHeight: '5rem',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  colorDiv: {
    margin: "3em",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: "12em",
    height: "12em",
    position: "absolute",
    display: "inline",
    zIndex: -1,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    animationTimingFunction: 'linear',
    animationDuration: "5000ms",
    borderRadius: "56% 44% 68% 32% / 45% 54% 46% 55% ",
    animation: "$circleMorph 3s linear infinite",
    '&:hover': {
      cursor: "pointer",
      animationPlayState: "running",
    }
  },
  "@keyframes circleMorph":{
    "0%, 100%": {
      borderRadius: "56% 44% 68% 32% / 45% 54% 46% 55% ",
    },
    "30%": {
      borderRadius: "60% 40% 50% 50% / 30% 30% 70% 70%",
    },
    "70%": {
      borderRadius: "100% 50% 50% 100% / 100% 100% 50% 50%",
    },
  },
  skillsDiv: {
    marginTop: '-65vh',
    '@media (max-width:900px)': {
      marginTop: '-40vh',
    },
  }
}));

export default function Skills() {
  const classes = useStyles();
  const [ref, inView] = useInView({
    rootMargin: '-100px 0px',
  });

  React.useEffect(() => {
    console.log(`inView: ${inView}`)
  }, [inView]);

  const skills = {
    Dev: {
      text: 'I value efficient, powerful, and maintainable solutions to quickly deliver results.',
      'What I create': 'Responsive Websites, PWAs (Progressive Web Apps)',
      Tech: ['ReactJS', 'Redux', 'Javascript', 'CSS3', 'HTML5','Material-UI', 'Git', 'AWS (S3, CloudFront, CodeBuild)'],
      svg: "/icons/dev.svg",
      color: theme.palette.primary.light,
    },
    Designer: {
      text: 'I like clean design, easy navigation, and adding a custom touch to all my projects.',
      'What I design': 'Logos, Product design, App presentations',
      Tools: ['Photoshop', 'AdobeXD', 'Inkscape/Illustrator', '3dsMax', 'Cinema4D', 'Pen & Paper'],
      svg: "/icons/designer.svg",
      color: theme.palette.primary.light,
    },
  }
  
  return (
    <div className={classes.skillsDiv}>
      <SectionTitle title="Skills" stroke={true}/>
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          ref={ref}
          container
          spacing={isMobile? 2 : 8}
          className={classes.flexContainer}
        >
          {Object.keys(skills).map(field => 
            <Grid
              item
              key={field}
              xs={12} md={6}
              className={classes.fieldDiv}
            >
              <FadeIn>
                <>
                  <div className={classes.colorDiv}>
                    <div
                      className={classes.circle}
                      style={{backgroundColor: skills[field].color, animationPlayState: isMobile? (inView? "running" : "paused"): "running",}}
                    />
                    <SVG
                      src={process.env.PUBLIC_URL + skills[field].svg}
                      className={classes.icon}
                    />
                  </div>
                  <Typography variant={isMobile? "h4" : "h3"} className={classes.field} style={{margin: 0, fontWeight: 600}}>
                    {field}
                  </Typography>
                </>
              </FadeIn>
              <div style={{padding: "1em 2em"}}>
                <FadeIn>
                  <Typography className={classes.typography}>
                    {skills[field].text}
                  </Typography>
                </FadeIn>
                <div style={{margin: "2em 0"}}>
                  <FadeIn>
                    <Typography variant="h5" className={classes.title}>
                      {Object.keys(skills[field])[1]}:&nbsp;
                    </Typography>
                  </FadeIn>
                  <FadeIn>
                    <Typography className={classes.typography}>
                      {Object.values(skills[field])[1]}
                    </Typography>
                  </FadeIn>
                </div>
                <FadeIn>
                  <Typography variant="h5" className={classes.title}>
                    {Object.keys(skills[field])[2]}:&nbsp;
                  </Typography>
                </FadeIn>
                <div className={classes.typography}>
                  {(Object.values(skills[field])[2]).map(tool =>
                    <FadeIn key={tool}>
                      <Typography style={{margin: "0.25em 0"}}>
                        {tool}
                      </Typography>
                    </FadeIn>
                  )}
                </div>
              </div>
            </Grid>
          )}
        </Grid>
      </Container>
    </div>
  )
}

