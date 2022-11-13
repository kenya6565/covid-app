import React from "react";
import { Radar } from "react-chartjs-2";

const data = {
  label: [
    "React",
    "Vue",
    "Angular",
    "Javascript",
    "TypeScript",
    "Redux",
    "ReST API",
  ],
  datasets: [
    {
      label: "Person A",
      backgroundColor: "rgba(179, 181, 198, 0.2)",
      borderColor: "#008b8b",
      pointBackgroundColor: "#008b8b",
      pointBorderColor: "#fff",
      data: [100, 50, 30, 90, 40, 30, 70],
    },
    {
      label: "Person B",
      backgroundColor: "rgba(179, 181, 198, 0.2)",
      borderColor: "#ff1493",
      pointBackgroundColor: "#008b8b",
      pointBorderColor: "#fff",
      data: [10, 30, 100, 90, 40, 30, 10],
    },
  ],
};
const RadarPlot = () => {
  return (
    <div>
      <Radar data={data} />
    </div>
  );
};

export default RadarPlot;
