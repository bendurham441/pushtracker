import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./Home";
import LogForm from "./LogForm";
import Log from "./Log";
import Stats from "./Stats";
import Login from "./Login";
import Register from "./Register";

const UserPages = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/add">
      <LogForm />
    </Route>
    <Route path="/log">
      <Log />
    </Route>
    <Route path="/stats">
      <Stats />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </Switch>
);

export default UserPages;
