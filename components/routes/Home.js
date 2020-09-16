import React from "react";
import { Link } from "react-router-dom"

import Dashboard from "../Dashboard";
import Progress from "../Progress";

const Home = () => (
  <section>
    <Dashboard />
    <Progress />
    <Link to="add">
      <button id="log-button">Log a workout</button>
    </Link>
  </section>
);

export default Home;
