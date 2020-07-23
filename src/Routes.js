import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Landing from './containers/Landing';
import NotFound from "./containers/NotFound";

import { covers } from "./components/Covers";
import ProjectTemplate from "./containers/projects/ProjectTemplate";

export default function Routes() {


  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        {Object.keys(covers).map(name => 
          <Route exact path={`/${name}`}>
            <ProjectTemplate name={name}/>
          </Route>
        )}
        <NotFound />
      </Switch>
    </BrowserRouter>
  );
}