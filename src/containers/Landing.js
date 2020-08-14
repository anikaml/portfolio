import React from "react";

import Main from '../components/layout/Main'
import Projects from '../components/layout/Projects'
import Skills from "./about/Skills";

export default function Landing() {
  return (
    <React.Fragment>
      <Main />
      <Projects />
      <Skills />
    </React.Fragment>
  );
}