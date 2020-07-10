import React from "react";

import Main from '../components/layout/Main'
import Navbar from '../components/layout/Navbar'
import Projects from '../components/layout/Projects'
import FlightComposition from "../components/layout/FlightComposition";


export default function Landing() {
  return (
    <React.Fragment>
      <Navbar />
      <Main />
      <Projects />
      <FlightComposition/>
    </React.Fragment>
  );
}