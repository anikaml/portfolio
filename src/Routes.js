import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from './containers/Landing';
import NotFound from "./containers/NotFound";
import { covers } from "./components/Covers";
import SuspenseContainer from "./components/layout/SuspenseContainer";
import AboutText from "./components/layout/about/AboutText";

const ProjectTemplate = lazy(() => import("./containers/projects/ProjectTemplate"));

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/about" element={<AboutText />} />
        {Object.keys(covers).map(name =>
          <Route
            path={`/${name}`}
            key={name}
            element={
              <SuspenseContainer>
                <ProjectTemplate name={name} />
              </SuspenseContainer>
            }
          />
        )}
        <Route path='*' exact={true} element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
