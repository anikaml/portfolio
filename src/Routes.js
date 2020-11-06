import React, { lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from './containers/Landing';
import NotFound from "./containers/NotFound";

import { covers } from "./components/Covers";
import SuspenseContainer from "./components/layout/SuspenseContainer";
import AboutText from "./components/layout/about/AboutText";
import Skills from "./components/layout/about/Skills";

const ProjectTemplate = lazy(() => import("./containers/projects/ProjectTemplate"));

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/about">
          <AboutText />
          <Skills />
        </Route>
        {Object.keys(covers).map(name => 
          <Route exact path={`/${name}`} key={name}>
            <SuspenseContainer>
              <ProjectTemplate name={name}/>
            </SuspenseContainer>
          </Route>
        )}
        <NotFound />
      </Switch>
    </BrowserRouter>
  );
}