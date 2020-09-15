import React from "react";
import { Bar } from "react-chartjs-2";

import Card from "./common/Card";

const Progress = () => {
  return (
    <Card>
      <div>Graph</div>
      <Bar
        data={{
          labels: ["M", "T", "W", "Th", "F", "Sa", "Su"],
          datasets: [
            {
              data: [5, 10, 12, 13, 16, 18, 21],
            },
          ],
        }}
        options={{
          barPercentage: 1
        }}
      />
    </Card>
  );
};

export default Progress;
