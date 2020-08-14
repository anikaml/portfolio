import React, { Suspense } from "react";
import PropTypes from "prop-types";

function Loader() {
  return (
    <div style={{ padding: 10 }}></div>
 );
}

export default function SuspenseContainer(props) {
 return <Suspense fallback={<Loader />}>{props.children}</Suspense>;
}

SuspenseContainer.propTypes = {
  children: PropTypes.node,
};