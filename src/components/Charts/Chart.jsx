import React, { useState, useEffect } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import "./Chart.css";

const Chart = ({ title, data, dataKey, grid }) => {
  // --- State for responsive chart aspect ratio and height ---
  const [aspectRatio, setAspectRatio] = useState(4);
  const [chartHeight, setChartHeight] = useState(300);

  // --- Update chart size based on window width ---
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setAspectRatio(1.2);
        setChartHeight(250);
      } else if (window.innerWidth < 992) {
        setAspectRatio(2);
        setChartHeight(300);
      } else {
        setAspectRatio(4);
        setChartHeight(400);
      }
    };

    handleResize(); // Initial sizing
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="chart">
      {/* --- Chart Title --- */}
      <h3 className="chartTitle">{title}</h3>

      {/* --- Chart Container --- */}
      <div className="chartContainer" style={{ height: chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            {/* --- X Axis --- */}
            <XAxis
              dataKey="name"
              stroke="var(--chart-axis-color)"
              tick={{ fill: "var(--chart-text-color)", fontSize: 12 }}
              tickLine={false}
            />

            {/* --- Y Axis --- */}
            <YAxis
              stroke="var(--chart-axis-color)"
              tick={{ fill: "var(--chart-text-color)", fontSize: 12 }}
              tickLine={false}
            />

            {/* --- Line --- */}
            <Line
              type="monotone"
              dataKey={dataKey}
              stroke="var(--chart-line-color)"
              strokeWidth={2}
              dot={{ strokeWidth: 2, r: 4 }}
              activeDot={{
                r: 6,
                stroke: "var(--chart-line-color)",
                strokeWidth: 2,
                fill: "#fff",
              }}
            />

            {/* --- Tooltip --- */}
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--chart-tooltip-bg)",
                borderColor: "var(--chart-tooltip-border)",
                borderRadius: "8px",
                color: "var(--chart-text-color)",
              }}
              itemStyle={{ color: "var(--chart-text-color)" }}
            />

            {/* --- Grid (optional) --- */}
            {grid && (
              <CartesianGrid
                stroke="var(--chart-grid-color)"
                strokeDasharray="3 3"
              />
            )}

            {/* --- Legend --- */}
            <Legend
              iconType="circle"
              iconSize={10}
              wrapperStyle={{
                paddingTop: "10px",
                color: "var(--chart-text-color)",
                fontSize: "12px",
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Chart;
