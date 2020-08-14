import React from "react";
import PropTypes from "prop-types";

import { ParallaxBanner } from 'react-scroll-parallax';

export default function Banner(props) {
  
  return (
    <>
      <ParallaxBanner
        className={props.className}
        layers={[
          {
            image: process.env.PUBLIC_URL + props.url,
            amount: 0.2,
          },
        ]}
        style={{
          height: props.height ? props.height : '50vh',
        }}
      >
        {props.children}
      </ParallaxBanner>
    </>
  )
}

Banner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.string,
  url: PropTypes.string.isRequired,
};