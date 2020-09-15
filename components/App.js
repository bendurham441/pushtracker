import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./routes/Home";
import LogForm from "./routes/LogForm";

const App = () => (
  <Router>
    <header id="heading">PushTracker</header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/test">Test</Link>
    </nav>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/add">
        <LogForm />
      </Route>
    </Switch>
  </Router>
);

export default App;
