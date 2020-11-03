import React from 'react';
import PropTypes from "prop-types";

import { Parallax } from 'react-scroll-parallax';
import { isTablet } from 'react-device-detect';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core/';
import { highlightColor } from '../../utils/colors';

const useStyles = makeStyles(() => ({
  container: {
    margin: "2em auto",
  },
  title: {
    fontWeight: 500,
    fontSize: 'calc(54px + (54 - 20) * ((100vw - 300px) / (1600 - 300)))',
    transform: 'translate(10px, 35px)',
    //background: `linear-gradient(180deg, rgba(255,255,255,0) 70%, ${highlightColor} 65%)`,
    display: "inline",
    position: "relative",
    paddingLeft: "0.5em",
    zIndex: 10,
    '@media (max-width:900px)': {
      fontSize: isTablet ? '4rem' : "2.5rem",
    },
  },
  wrapper: {
    position: "relative",
    margin: "1em 0",
    display: "inline-block",
  },
  highlight: {
    height: '2em',
    backgroundColor: highlightColor,
    width: '100%',
    marginTop: '-2.5em',
    zIndex: 1,
    '@media (max-width:900px)': {
      height: '1em',
      marginTop: '-1em',
    },
  }
}));

export default function SectionTitle(props) {
  const classes = useStyles();
  
  return (
    <>
      <div id={props.id} className={classes.wrapper}>
        <Parallax x={[-30, 0]} tagOuter="div" styleOuter={{margin: 0}}>
          <Typography variant="h1" className={classes.title} style={{WebkitTextStroke: props.stroke ? '1px white': 'unset',}}>
            {props.title}
          </Typography>
        </Parallax>
      </div>
    </>
  )
}

SectionTitle.propTypes = {
  id: PropTypes.string,
  stroke: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

