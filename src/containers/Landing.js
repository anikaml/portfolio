import React from "react";

import Main from '../components/layout/Main'
import Projects from '../components/layout/Projects'
import Skills from "./about/Skills";
import AboutText from "../components/layout/AboutText";

export default function Landing() {
  return (
    <>
      <Main />
      <Projects />
      <AboutText />
      <Skills />
    </>
  );
}