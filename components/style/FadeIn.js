import React, { useState, useRef, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";
import { keyframes } from "@emotion/react";

const PREFIX = 'FadeIn';

const classes = {
  fadeDiv: `${PREFIX}-fadeDiv`,
  isVisible: `${PREFIX}-isVisible`
};

const fadeInAnimation = keyframes({
  '0%': {
    opacity: 0,
  },
  '100%': {
    opacity: 1,
  },
});

const Root = styled('div')(() => ({
  [`& .${classes.fadeDiv}`]: {
    opacity: 0,
    transform: "translateY(10vh) scaleY(1.2)",
    visibility: "hidden",
    transition: "opacity 0.3s ease-out, transform 0.4s ease-out",
    willChange: "opacity, visibility",
  },

  [`& .${classes.isVisible}`]: {
    opacity: 1,
    transform: "none",
    visibility: "visible",
    animation: `${fadeInAnimation} ease 1s`,
    animationName: fadeInAnimation,
    animationIterationCount: 1,
    animationFillMode: "both",
  }
}));

export default function FadeIn(props) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    let reference = domRef.current
    const observer = new window.IntersectionObserver(entries => {
      // there's only one element to observe:
      if (entries[0].isIntersecting) {
        setVisible(true);
        // No need to keep observing:
        observer.unobserve(reference);
      }
    });
    observer.observe(reference);
    return () => observer.unobserve(reference);
  }, []);

  return (
    <Root>
      <div
        ref={domRef}
        className={props.className + ' ' + classes.fadeDiv + ' ' + (isVisible ? classes.isVisible : null)}
      >
        {props.children}
      </div>
    </Root>
  );
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
