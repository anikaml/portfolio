import React from "react";

import AboutText from "../components/layout/AboutText";
import Contact from "../components/layout/Contact";
import Main from '../components/layout/Main';
import Projects from '../components/layout/Projects';
import Skills from "./about/Skills";
import Footer from "../components/layout/Footer";

export default function Landing() {
  return (
    <>
      <Main />
      <Projects />
      <AboutText />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}