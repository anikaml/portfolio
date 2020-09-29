import React from "react";
import PropTypes from "prop-types";

function formatUrl(url, format, photoPath) {
  let fileName = url.split('.')[0]
  return `${process.env.PUBLIC_URL}${photoPath}/${format}/${fileName}.${format}`
}

export default function MultiFormatPhoto(props) {

  return (
    <>
      <picture>
        {['webp', 'jp2'].map(format => (
          <source 
            key={format}
            className={props.className}
            alt={props.alt}
            type={`image/${format}`}
            srcSet={formatUrl(props.url, format, props.photoPath)}
          />
        ))}
        <img
          onClick={props.onClick}
          alt={props.alt}
          className={props.className}
          src={`${process.env.PUBLIC_URL}${props.photoPath}/${props.url}`}
        />
      </picture>
    </>
  );
}

MultiFormatPhoto.propTypes = {
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
  photoPath: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};