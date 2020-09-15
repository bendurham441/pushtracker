import React from "react";

import Card from "./common/Card";

const Dashboard = () => (
  <Card>
    <section id="dashboard">
      <h1 style={{marginBottom: "0.5em"}}>Current Streak</h1>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <article>
          <h1>1</h1>
          <p>day streak</p>
        </article>
        <article>
          <h1>1</h1>
          <p>Total reps</p>
        </article>
      </div>
    </section>
  </Card>
);

export default Dashboard;
