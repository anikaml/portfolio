import React from 'react';
import PropTypes from "prop-types";

import SVG from 'react-inlinesvg';

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
    borderRadius: 15,
    //boxShadow: `0px 3px 5px 3px ${shadowColor}`,
    margin: "1em",
    backgroundColor: "white",
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
    marginTop: "1em",
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
    },
    Designer: {
      text: 'I like clean design, easy navigation and adding custom touch.',
      'What I design': 'Web, PWA ,Responsive Apps, Logos, Product design, App presentations',
      Tools: ['Photoshop', 'AdobeXD', 'Illustrator', 'InDesign', 'Cinema4D', 'Pen & Paper'],
      svg: "/icons/designer.svg",
    },
  }
  
  return (
    <>
    <SectionTitle title="Skills" />
      <Container maxWidth="lg" className={classes.container}>
        <Grid
          container
          spacing={2}
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
                <div>
                <SVG
                  src={process.env.PUBLIC_URL + skills[field].svg}
                  className={classes.icon}
                />
                <Typography variant="h3" className={classes.typography} style={{margin: 0,}}>
                  {field}
                </Typography>
                </div>
              </FadeIn>
              <div style={{padding: "1em 2em"}}>
                <FadeIn>
                  <Typography className={classes.typography}>
                    {skills[field].text}
                  </Typography>
                </FadeIn>
                <div style={{margin: "2em 0"}}>
                  <FadeIn>
                    <Typography variant="h6" className={`${classes.typography}${classes.title}`}>
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
                  <Typography variant="h6" className={`${classes.typography}${classes.title}`}>
                    {Object.keys(skills[field])[2]}:&nbsp;
                  </Typography>
                </FadeIn>
                <div className={classes.typography}>
                  {(skills[field].Tools).map(tool =>
                    <FadeIn key={tool}>
                      <Typography>
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

Skills.propTypes = {
  classes: PropTypes.object,
};

