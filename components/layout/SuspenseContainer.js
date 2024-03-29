import React, { Suspense } from "react";
import PropTypes from "prop-types";

import ProjectTemplateSkeleton from "../projectShared/ProjectTemplateSkeleton";

export default function SuspenseContainer(props) {
  return <Suspense fallback={<ProjectTemplateSkeleton />}>{props.children}</Suspense>;
}

SuspenseContainer.propTypes = {
  children: PropTypes.node,
};