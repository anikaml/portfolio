import React from "react";

import Contact from "../components/layout/Contact";
import Main from '../components/layout/Main';
import Projects from '../components/layout/Projects';

export default function Landing() {
  return (
    <>
      <Main />
      <Projects />
      <Contact />
    </>
  );
}