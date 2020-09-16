import React from "react";

import Card from "../common/Card";

const weeks = [
  {
    date: "Week 1",
    reps: 57,
  },
  {
    date: "Week 2",
    reps: 68,
  },
  {
    date: "Week 3",
    reps: 75,
  },
];

const Stats = () => (
  <Card>
    <div id="stats">
      <h1 class="card-header">Stats</h1>
      <section style={{ display: "flex", justifyContent: "space-around" }}>
        <article>
          <h1>5</h1>
          <div>Total Days</div>
        </article>
        <article>
          <h1>5</h1>
          <div>Total Reps</div>
        </article>
      </section>
      <section className="week-list">
        <h1 className="card-subheader">Rep Stats for each Week</h1>
        {weeks.map((week) => (
          <div className="week">
            <div>{week.date}</div>
            <div>{week.reps} reps</div>
          </div>
        ))}
      </section>
    </div>
  </Card>
);

export default Stats;
