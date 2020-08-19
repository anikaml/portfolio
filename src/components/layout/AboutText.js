import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link, Typography } from '@material-ui/core/';
import FadeIn from '../../containers/style/FadeIn';

const useStyles = makeStyles((theme) => ({
  div: {
    backgroundColor: theme.palette.primary.light,
    padding: "4em 0em 18em 0em",
    marginBottom: "-17em",
  },
  container: {
    margin: "2em auto",
    '@media (max-width:800px)': {
      padding: "2em 1em",
    },
  },
  typography: {
    color: theme.palette.primary.contrastText,
  }
}));

export default function AboutText() {
  const classes = useStyles();
  
  return (
    <div id="about" className={classes.div}>
      <Container maxWidth="md" className={classes.container}>
        <FadeIn>
          <Typography variant="h2" className={classes.typography} style={{marginBottom: "0.5em"}}>
          Hello there,
        </Typography>
        </FadeIn>
        <FadeIn>
          <Typography variant="h4" className={classes.typography}>
            {"I'm Anika. A web designer & front-end developer, currently working at"} 
              <Link
                href="https://bokiem.solutions"
                style={{ textDecoration: 'none'}}
                target="_blank"
                rel="noopener noreferrer"
              >
                {" Bokiem Solutions"}
              </Link>
              {" San Diego, CA"}
          </Typography>
        </FadeIn>
        <FadeIn>
          <Typography variant="h5" style={{marginTop: "1em"}} className={classes.typography}>
            {"Design have always been my true passion. Really! I have started my journey working as an Architectural Designer in NYC. After few years learning new skills and discovering new possibilities along the way, I've decided to use my creativity in a new field, so I've started creating beautiful, clean websites, and everything in between. This just felt right. And that's how I become web designer & front-end developer, a perfect mix between developer and designer." }
          </Typography>
       </FadeIn>
      </Container>
    </div>
  )
}

