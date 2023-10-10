import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import PropTypes from "prop-types";

import Lightbox from 'react-18-image-lightbox';

import { covers } from '../Covers';
import { shadowColor } from "../../utils/colors";
import FadeIn from "../../components/style/FadeIn";
import MultiFormatPhoto from "../photos/MultiFormatPhoto";

const PREFIX = 'LightboxImage';

const classes = {
  image: `${PREFIX}-image`
};

const Root = styled('div')(() => ({
  [`& .${classes.image}`]: {
    width: "100%",
    '&:hover': {
      cursor: "pointer",
      boxShadow: `0px 3px 1px -2px ${shadowColor}, 0px 2px 2px 0px ${shadowColor}, 0px 1px 5px 0px ${shadowColor}`,
      transition: "all 0.5s ease-in-out",
      transform: "translateY(-2px)",
    }
  }
}));

export default function LightboxImage(props) {

  const [lightbox_open, setLightbox_open] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(props.url);

  const photosPath = `/projects/${props.name}`
  const images = covers[props.name].screenshots.map(file =>
    `${photosPath}/${file}`
  )

  return (
    (<Root>
      <FadeIn>
        <div className={props.classNameInner ? props.classNameInner : null}>
          <MultiFormatPhoto
            onClick={() => setLightbox_open(true)}
            alt={props.alt}
            className={props.classNameImg ? props.classNameImg : classes.image}
            url={covers[props.name].screenshots[props.url]}
            photoPath={photosPath}
          />
        </div>
      </FadeIn>
      {lightbox_open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
          onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
          onCloseRequest={() => setLightbox_open(false)}
        />
      )}
    </Root>)
  );
}

LightboxImage.propTypes = {
  alt: PropTypes.string,
  classNameImg: PropTypes.string,
  classNameInner: PropTypes.string,
  name: PropTypes.string.isRequired,
  url: PropTypes.number.isRequired,
};