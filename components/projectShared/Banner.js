import React from "react";
import PropTypes from "prop-types";
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { styled } from '@mui/material/styles';
import { MOBILE } from "../../utils/constants";

const PREFIX = 'Banner';

const classes = {
  imageContainer: `${PREFIX}-imageContainer`
};

const Root = styled('div', {
  shouldForwardProp: (prop) => !['heightToUse', 'imageUrl'].includes(prop)
})(({ heightToUse, imageUrl }) => ({
  [`& .${classes.imageContainer}`]: {
    height: heightToUse,
    width: '100%',
    background: `url(${imageUrl}) top center no-repeat`,
    [`@media (max-width:${MOBILE})`]: {
      height: "40vh",
      marginBottom: '3em'
    }
  }
}));

export default function Banner(props) {
  const heightToUse = props.height ? props.height : '50vh';
  let content = (<ParallaxBanner
    className={props.className}
    layers={[
      {
        image: props.url,
        amount: 0.2,
        speed: -5
      },
    ]}
    style={{
      height: heightToUse
    }}
  >
    {props.children}
  </ParallaxBanner>)

  if (props.name === 'pineyTrails') {
    content = (<Root
      heightToUse={heightToUse}
      imageUrl={props.url}
    >
      <Parallax speed={-5} className={props.className}>
        <div className={classes.imageContainer} />
      </Parallax>
    </Root>)
  }

  return (
    <>
      {content}
    </>
  )
}

Banner.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.string,
  url: PropTypes.string.isRequired,
  name: PropTypes.string
};