import React from "react";
import { Route } from "react-router";
import Home from "./components/Todo";

const routes = (
  <main>
    <Route exact path="/" name="root" component={Home} />
  </main>
);

export default routes;
