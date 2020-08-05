import React, {useState, useRef, useEffect} from 'react';
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  fadeDiv: {
    opacity: 0,
    transform: "translateY(10vh)",
    visibility: "hidden",
    transition: "opacity 0.7s ease-out, transform 0.8s ease-out",
    willChange: "opacity, visibility",
  },
  '@keyframes fadeInAnimation': { 
    "0%": { 
      opacity: 0,
    },
    "100%": { 
      opacity: 1,
    },
  },
  isVisible: {
    opacity: 1,
    transform: "none",
    visibility: "visible",
    animation: " ease 2s",
    animationName: "$fadeInAnimation",
    animationIterationCount: 1,
    animationFillMode: "both",
  },
}))

export default function FadeIn(props) {
  const [isVisible, setVisible] = useState(false);
  const classes = useStyles();
  const domRef = useRef();

  useEffect(() => {
    let reference = domRef.current
    const observer = new IntersectionObserver(entries => {
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

  //   const observer = new IntersectionObserver(entries => {
  //     entries.forEach(entry => setVisible(entry.isIntersecting));
  //   });
  //   observer.observe(reference);
  //   return () => observer.unobserve(reference);
  // }, []);


  return (
    <div
      ref={domRef}
      className={props.className + ' ' + classes.fadeDiv + ' ' + (isVisible? classes.isVisible : "")}
    >
      {props.children}
    </div>
  )
}

FadeIn.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.string, 
};