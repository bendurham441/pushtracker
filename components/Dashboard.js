import React from "react";

import Card from "./common/Card";

const Dashboard = () => (
  <Card header="Current Streak">
    <section id="dashboard">
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
      <div>Last Workout: 24 hours ago</div>
    </section>
  </Card>
);

export default Dashboard;
