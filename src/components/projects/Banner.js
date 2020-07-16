import React from "react";
import PropTypes from "prop-types";

import { ParallaxBanner } from 'react-scroll-parallax';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  banner: {
    
  }
}))

export default function Banner(props) {
  
  const classes = useStyles();
  
  return (
    <>
      <ParallaxBanner
        className={props.className? props.className : classes.banner}
        layers={[
          {
            image: process.env.PUBLIC_URL + props.url,
            amount: 0.2,
          },
        ]}
      >
        {props.children}
      </ParallaxBanner>
    </>
  )
}

Banner.propTypes = {
  className: PropTypes.object,
  children: PropTypes.node,
  url: PropTypes.string.isRequired,
};