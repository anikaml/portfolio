import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//import Contact from './containers/Contact';

import Landing from './containers/Landing';

import NotFound from "./containers/NotFound";
import Stalue from "./containers/projects/Stalue"


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
      
        <Route exact path="/stalue">
          <Stalue />
        </Route>
        {/* <Route exact path="/contact">
          <Contact />
        </Route> */}
        <NotFound />
      </Switch>
    </BrowserRouter>
  );
}