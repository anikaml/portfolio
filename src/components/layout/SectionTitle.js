import React from 'react';
import PropTypes from "prop-types";

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';

//import ParallaxMove from '../../containers/style/ParallaxMove';

const useStyles = makeStyles(() => ({
  container: {
    margin: "2em auto",
  },
  title: {
    color: "black",
    //textShadow: "1px 2px 3px #eee, 0 0 0 #000, 1px 2px 3px #eee",
    caretColor:"#262626",
    fontWeight: 700,
    //marginBottom: -40,
    zIndex: '999 !important',
    //position: "absolute",
    transform: 'translate(10px, 35px)',
    '@media (max-width:800px)': {
      fontSize: "2.5rem",
    },
  },
}));

export default function SectionTitle(props) {
  const classes = useStyles();
  
  return (
    <>
      {/* <Container maxWidth="lg" className={classes.container}> */}
        <div id={props.id}>
          {/* <ParallaxMove> */}
            <Typography variant="h1" className={classes.title}>
              {props.title}
            </Typography>
          {/* </ParallaxMove> */}
        </div>
      {/* </Container> */}
    </>
  )
}

SectionTitle.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
};

