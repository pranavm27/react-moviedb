import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import Login from "./Login";
import Home from "./Home";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component = { App } />
      <Route exact path="/login" component = { Login } />
      <Route exact path="/home" component = { Home } />
    </Switch>
  </BrowserRouter>
);

export default Router;
