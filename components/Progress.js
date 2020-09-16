import React from "react";
import { Bar } from "react-chartjs-2";

import Card from "./common/Card";

const Progress = () => {
  return (
    <Card>
      <div id="progress">
        <h1>Progress</h1>
        <Bar
          data={{
            labels: ["M", "T", "W", "Th", "F", "Sa", "Su"],
            datasets: [
              {
                backgroundColor: "rgba(35, 94, 255, 0.6)",
                data: [5, 10, 12, 13, 16, 18, 21],
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
              yAxes: [{
                ticks: {
                  maxTicksLimit: 4
                }
              }]
            }
          }}
        />
      </div>
    </Card>
  );
};

export default Progress;
