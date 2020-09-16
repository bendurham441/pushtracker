import React from "react";

import Card from "./common/Card";

const Workout = ({ day, time, sets }) => (
  <Card>
    <div className="workout">
      <h1>{day}</h1>
      <div className="time">{time}</div>
      <h2>Sets</h2>
      {sets.map((set) => (
        <div className="set">{set} {set === 1 ? "rep" : "reps"}</div>
      ))}
    </div>
  </Card>
);

export default Workout;
