import React from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Container, Link, Typography } from '@material-ui/core/';

const useStyles = makeStyles(() => ({
  container: {
    margin: "2em auto",
    maxWidth: "60vw",
    // height: "80vh",
    '@media (max-width:800px)': {
      maxWidth: "none",
    },
  },
  parallaxDiv: {
    width: "100%",
    overflow: "hidden",
    '@media (max-width:800px)': {
      height: "30vh",
    },
  },
}));

export default function AboutText() {
  const classes = useStyles();
  
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
       <Typography variant="h1">
         Hi
       </Typography>
       {/* <Typography variant="h3">
         {"I'm Anika"}
       </Typography> */}
       <Typography variant="h3">
         {"I'm Anika. A web designer & front-end developer, currently working at"} 
          <Link
            href="https://bokiem.solutions"
            style={{ textDecoration: 'none'}}
            color="secondary"
            rel="noopener noreferrer"
          >
            {" Bokiem Solutions"}
          </Link>
       </Typography>
       <Typography variant="h5" style={{marginTop: "1em"}}>
         I design and develop clean and user-friendly websites. Previously I have worked as an Architectural Designer. 
       </Typography>
      </Container>
    </>
  )
}

