import React from "react";

import Card from "./common/Card";

const Workout = ({ day, time, sets }) => (
  <Card header={day}>
    <div className="workout">
      <div className="time">{time}</div>
      <h2>Sets</h2>
      {sets.map((set, index) => (
        <div key={index} className="set">{set} {set === 1 ? "rep" : "reps"}</div>
      ))}
    </div>
  </Card>
);

export default Workout;
