import React, { useState } from "react";
import PropTypes from "prop-types";

import Lightbox from 'react-image-lightbox';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

import { covers } from '../Covers';
import { shadowColor } from "../../utils/colors";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    '&:hover': {
      cursor: "pointer",
      boxShadow: `0px 3px 1px -2px ${shadowColor}, 0px 2px 2px 0px ${shadowColor}, 0px 1px 5px 0px ${shadowColor}`,
      transition: "all .3s ease-in-out",
    }
  },
}))

export default function LightboxImage(props) {
  const classes = useStyles();
  const [lightbox_open, setLightbox_open] = useState(false);
  
  return (
    <>
      <img
        onClick={() => setLightbox_open(true)}
        src={process.env.PUBLIC_URL + covers[props.name][props.url]}
        alt={props.alt}
        className={props.className ? props.className : classes.image}
      />
      {lightbox_open && (
        <Lightbox
          mainSrc={process.env.PUBLIC_URL + covers[props.name][props.url]}
          onCloseRequest={() => setLightbox_open(false)}
        />
      )}
    </>
  )
}

LightboxImage.propTypes = {
  alt: PropTypes.string,
  className: PropTypes.object,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};