import React, { useState, useEffect } from 'react';

import { useMorph } from 'react-morph';
// import { GradientPinkRed as Gradient } from '@vx/gradient'
// import SVG from 'react-inlinesvg';

//import { Button, CircularProgress } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import imageA from "./A1.svg";
import imageM from "./M.svg";

const useStyles = makeStyles(() => ({
  buttonDiv: {
    marginTop: "1em",
    display: "flex",
    justifyContent: "center",
  },
}));

export default function LogoMorph() {
  const classes = useStyles();
  const morph = useMorph();
  const [toggle, setToggle] = useState(true);

  const images = {
    a: {
      url: imageA,
      title: 'A',
      width: '40%',
    },
    b: {
      url: imageM,
      title: 'M',
      width: '30%',
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(!toggle)
    }, 2000);
    return () => clearInterval(interval);
  }, [toggle]);

  let submitButton = (
    <div className={classes.buttonDiv}>
      {toggle && 
        <img {...morph} src={images.b.url} alt={images.b.title} width="20" />
      }
      {!toggle && 
        <img {...morph} src={images.a.url} alt={images.a.title} width="30" />
      }
    </div>
  )
 
  return (
    <>
      {submitButton}
    </>
  )
}