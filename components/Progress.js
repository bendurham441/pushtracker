import React from "react";
import { Bar } from "react-chartjs-2";

import Card from "./common/Card";

const weekData = [
  {
    day: "M",
    reps: 5,
  },
  {
    day: "T",
    reps: 10,
  },
  {
    day: "W",
    reps: 11,
  },
  {
    day: "Th",
    reps: 17,
  },
  {
    day: "F",
    reps: 18,
  },
  {
    day: "Sa",
    reps: 21,
  },
  {
    day: "Su",
    reps: 25,
  },
];

const Progress = () => {
  let labels = weekData.map((dayData) => dayData.day);
  let reps = weekData.map((dayData) => dayData.reps);
  return (
    <Card header="Progress">
      <div id="progress">
        <Bar
          data={{
            labels: labels,
            datasets: [
              {
                backgroundColor: "rgba(35, 94, 255, 0.6)",
                data: reps,
              },
            ],
          }}
          options={{
            title: {
              display: false,
            },
            legend: {
              display: false,
            },
            scales: {
              yAxes: [
                {
                  ticks: {
                    maxTicksLimit: 4,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </Card>
  );
};

export default Progress;
