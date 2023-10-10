import React from "react";
import PropTypes from "prop-types";
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { styled } from '@mui/material/styles';
import { MOBILE, MOBILE_SM } from "../../utils/constants";
import MultiFormatPhoto from "../photos/MultiFormatPhoto";

const PREFIX = 'Banner';

const classes = {
  imageContainer: `${PREFIX}-imageContainer`,
  multiFormatPhoto: `${PREFIX}-multiFormatPhoto`,
};

const Root = styled('div', {
  shouldForwardProp: (prop) => !['heightToUse'].includes(prop)
})(({ heightToUse }) => ({
  [`& .${classes.imageContainer}`]: {
    height: heightToUse,
    width: '100%',
    background: `top center no-repeat`,
    [`@media (max-width:${MOBILE})`]: {
      height: "40vh",
      marginBottom: '3em'
    }
  },

  [`& .${classes.multiFormatPhoto}`]: {
    height: 500,
    width: '100%',
    objectFit: 'cover',
    [`@media (max-width:${MOBILE_SM})`]: {
      height: 450,
      objectPosition: 'center'
    }
  }
}));

export default function Banner(props) {
  const heightToUse = props.height || '20rem';

  return (
    <Root heightToUse={heightToUse}>
      <ParallaxBanner
        className={props.className}
        style={{
          height: heightToUse,
          position: props.projectsMain ? 'absolute' : 'relative',
          top: 0,
          left: 0
        }}
      >
        <ParallaxBannerLayer amount={0.2} speed={-5}>
          <MultiFormatPhoto
            alt="Main project graphic"
            className={classes.multiFormatPhoto}
            url={props.url}
            photoPath={props.photoPath}
          />
        </ParallaxBannerLayer>
      </ParallaxBanner>
    </Root>
  )
}

Banner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.string,
  url: PropTypes.string.isRequired,
  name: PropTypes.string,
  photoPath: PropTypes.string.isRequired,
  projectsMain: PropTypes.bool
};