import React from "react";
import PropTypes from "prop-types";

import BokiemLogo from "../../components/projects/BokiemLogo";
import BokiemResponsiveMorph from "../../components/projects/BokiemResponsiveMorph";

export default function Bokiem(props) {
  const name = props.name;
  
  return (
    <>
      <BokiemResponsiveMorph name={name}/>
      <BokiemLogo />
    </>
  )
}

Bokiem.propTypes = {
  name: PropTypes.string.isRequired,
};