import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Nav from "./Nav";
import Footer from "./Footer";
import UserPages from "./routes/UserPages";
import Landing from "./routes/Landing";

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(loggedIn)
  return (
    <Router>
      <header id="heading">PushTracker</header>
      <Nav />
      {loggedIn ? <UserPages /> : <Landing login={setLoggedIn} />}
      <Footer />
    </Router>
  );
};

export default App;
