import React from "react";

import Workout from "../Workout";

const workouts = [
  {
    day: "Monday",
    time: "10:52am",
    sets: [1, 2, 7],
  },
  {
    day: "Tuesday",
    time: "9:00am",
    sets: [3, 4, 8]
  }
];

const Log = () => (
  <section>
    {workouts.map((workout) => (
      <Workout day={workout.day} time={workout.time} sets={workout.sets}/>
    ))}
    <button>Load More</button>
  </section>
);

export default Log;
