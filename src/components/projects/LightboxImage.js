import React, { useState } from "react";
import PropTypes from "prop-types";

import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; // This only needs to be imported once in your app

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';

import { covers } from '../Covers';
import { shadowColor } from "../../utils/colors";
import FadeIn from "../../containers/style/FadeIn";

const useStyles = makeStyles(() => ({
  image: {
    width: "100%",
    '&:hover': {
      cursor: "pointer",
      boxShadow: `0px 3px 1px -2px ${shadowColor}, 0px 2px 2px 0px ${shadowColor}, 0px 1px 5px 0px ${shadowColor}`,
      transition: "all .3s ease-in-out",
      transform: "translateY(-2px)",
    }
  },
}))

export default function LightboxImage(props) {
  const classes = useStyles();
  const [lightbox_open, setLightbox_open] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(props.url);

  const images = covers[props.name].screenshots

  return (
    <>
      <FadeIn>
        <img
          onClick={() => setLightbox_open(true)}
          src={process.env.PUBLIC_URL + images[props.url]}
          alt={props.alt}
          className={props.className ? props.className : classes.image}
        />
      </FadeIn>
      {lightbox_open && (
        <Lightbox
          mainSrc={process.env.PUBLIC_URL + images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
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
  url: PropTypes.number.isRequired,
};