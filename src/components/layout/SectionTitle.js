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
    caretColor:"#262626",
    fontWeight: 700,
    //marginBottom: -40,
    transform: 'translate(10px, 35px)',
    background: 'linear-gradient(180deg, rgba(255,255,255,0) 70%, #FFe359 65%)',
    display: "inline",
    paddingLeft: "0.5em",
    '@media (max-width:800px)': {
      fontSize: "2.5rem",
    },
  },
  wrapper: {
    position: "relative",
    margin: "1em 0",
  }
}));

export default function SectionTitle(props) {
  const classes = useStyles();
  
  return (
    <>
      <div id={props.id} className={classes.wrapper}>
        {/* <ParallaxMove> */}
          <Typography variant="h1" className={classes.title}>
            {props.title}
          </Typography>
        {/* </ParallaxMove> */}
      </div>
    </>
  )
}

SectionTitle.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
};

