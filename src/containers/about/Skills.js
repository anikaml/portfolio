import React from 'react';
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography } from '@material-ui/core/';

import { greyColor } from '../../utils/colors';
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
    // border: `1px solid ${greyColor}`,
    // borderRadius: 4,
    '@media (max-width:800px)': {
      flexWrap: "wrap",
    },
  },
  fieldDiv: {
    textAlign: "center",
    padding: "1em",
    border: `1px solid ${greyColor}`,
    borderRadius: 15,
    margin: "1em",
  },
  typography: {
    margin: "0.25em",
    lineHeight: "1.5em",
    fontWeight: 300,
    //padding: "0em 2em",
    '@media (max-width:800px)': {
      margin: "auto",
      padding: "inherit",
    },
  }
}));

export default function Skills() {
  const classes = useStyles();

  const skills = {
    Dev: {
      text: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
      Languages: 'ReactJS, Javascript, CSS, HTML, Redux',
      Tools: ['Material-ui', 'Github', 'Terminal'],
    },
    Designer: {
      text: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',
      'What I design': 'Web, PWA ,Responsive Apps, Logos, Product design',
      Tools: ['Photoshop', 'AdobeXD', 'Illustrator', 'InDesign', 'Cinema4D', 'Pen & Paper'],
    },
  }
  
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <SectionTitle id="about" title="Skills" />
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
                <Typography variant="h3" className={classes.typography}>
                  {field}
                </Typography>
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
                <Typography className={classes.typography}>
                  {(skills[field].Tools).map(tool =>
                    <FadeIn key={tool}>
                      {tool}
                    </FadeIn>
                  )}
                </Typography>
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

