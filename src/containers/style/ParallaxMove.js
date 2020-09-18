import React, {useState, useRef, useEffect} from 'react';
import PropTypes from "prop-types";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  moveDiv: {
    maxWidth: "300px",
    opacity: 0,
    transform: "translateX(30em)",
    visibility: "hidden",
    transition: " all 0.9s ease-out",
    willChange: "opacity, visibility",
    '@media (max-width:900px)': {
      transform: "translateX(10em)",
    },
  },
  isVisible: {
    opacity: 1,
    transform: "none",
    visibility: "visible",
  },
}))

export default function ParallaxMove(props) {
  const [isVisible, setVisible] = useState(false);
  const classes = useStyles();
  const domRef = useRef();

  useEffect(() => {
    let reference = domRef.current
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    observer.observe(reference);
    return () => observer.unobserve(reference);
  }, []);


  return (
    <div
      ref={domRef}
      className={props.className + ' ' + classes.moveDiv + ' ' + (isVisible? classes.isVisible : "")}
    >
      {props.children}
    </div>
  )
}

ParallaxMove.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  delay: PropTypes.string, 
};