import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

const InterpolationChart = (props) => {

  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        margin: "auto",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Line data={props.chartData} />
      <div style={{ display: "flex", flexDirection: "column"}}>
        <div style={{display:"flex",flexDirection: "column", gap:"5px"}}>
          <span style={{color:"rgba(75, 192, 192, 1)", fontWeight:"bold"}}>Systolic</span>
          <h2>{props.systolic.value}</h2>
          <span>
            <i className="fas fa-caret-up"></i> {props.systolic.levels}
          </span>
        </div>
        <div style={{margin:"auto", display:"flex",flexDirection: "column", gap:"5px"}}>
          <span style={{color:"rgba(255, 99, 132, 1)", fontWeight:"bold"}}>Diastolic</span>
          <h2>{props.diastolic.value}</h2>
          <span>
            <i className="fas fa-caret-down"></i> {props.diastolic.levels}
          </span>
        </div>
      </div>
    </div>
  );
};

export default InterpolationChart;
