import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import LogForm from "./routes/LogForm";
import Nav from "./Nav";
import Log from "./routes/Log";
import Footer from "./Footer"
import Stats from "./routes/Stats";

const App = () => (
  <Router>
    <header id="heading">PushTracker</header>
    <Nav />
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
    </Switch>
    <Footer />
  </Router>
);

export default App;
