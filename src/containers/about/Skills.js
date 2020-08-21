import React from 'react';

import SVG from 'react-inlinesvg';
import { isMobile } from 'react-device-detect';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core/';

import { shadowColor } from '../../utils/colors';
import SectionTitle from '../../components/layout/SectionTitle';
import FadeIn from '../../containers/style/FadeIn';

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
    '@media (max-width:800px)': {
      flexWrap: "wrap",
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
    transition: 'all .2s ease-in-out',
    '@media (max-width:800px)': {
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
    '@media (max-width:800px)': {
      margin: "auto",
      padding: "inherit",
    },
  },
  icon: {
    transition: 'all .2s ease-in-out',
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
    borderRadius: "50%",
    width: "12em",
    height: "12em",
    position: "absolute",
    display: "inline",
    zIndex: -1,
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    
  }
}));

export default function Skills() {
  const classes = useStyles();

  const skills = {
    Dev: {
      text: 'I like to code things, and enjoy bringing ideas to life in the browser.',
      Languages: 'ReactJS, Javascript, CSS, HTML, Redux',
      Tools: ['Material-ui', 'Github', 'Terminal'],
      svg: "/icons/dev.svg",
      color: "#b9e4ea", //"#7a49a5",
    },
    Designer: {
      text: 'I like clean design, easy navigation and adding custom touch.',
      'What I design': 'Web, PWA ,Responsive Apps, Logos, Product design, App presentations',
      Tools: ['Photoshop', 'AdobeXD', 'Illustrator', 'InDesign', 'Cinema4D', 'Pen & Paper'],
      svg: "/icons/designer.svg",
      color: "rgba(255, 96, 96,0.7)", //"#ff6060",
    },
  }
  
  return (
    <>
      <SectionTitle title="Skills" />
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          spacing={8}
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
                    <div className={classes.circle} style={{backgroundColor: skills[field].color}}/>
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
                  {(skills[field].Tools).map(tool =>
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
    </>
  )
}

