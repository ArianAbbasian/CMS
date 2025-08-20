import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Typography } from "@mui/material";
import { geographyChartData, geographyChartMeta } from "../../../datas";
import "./GeographyChart.css";

const GeographyChart = () => {
  // --- Custom Tooltip component for the chart ---
  const CustomTooltip = ({ active, payload, label }) => {
    if (!active || !payload || !payload.length) return null;

    // Get additional data for the region
    const regionData = geographyChartData.find((item) => item.name === label);

    return (
      <div className="recharts-tooltip-wrapper">
        <Typography variant="subtitle2" style={{ marginBottom: 4 }}>
          {label} <small>({regionData.marketShare})</small>
        </Typography>
        {payload.map((entry, index) => (
          <div
            key={`tooltip-item-${index}`}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "4px 0",
            }}
          >
            <span>{entry.name}:</span>
            <strong>
              {entry.name.includes("Revenue")
                ? `$${entry.value.toLocaleString()}`
                : entry.value.toLocaleString()}
            </strong>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="geography-widget">
      {/* --- Widget Header --- */}
      <div className="geography-widget-header">
        <h3 className="geography-widget-title">{geographyChartMeta.title}</h3>
        <span className="geography-widget-subtitle">Regional performance</span>
      </div>

      {/* --- Chart Container --- */}
      <div className="geography-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={geographyChartData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap={12}
          >
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis type="number" />
            <YAxis dataKey="name" type="category" scale="band" width={90} />

            <Tooltip content={<CustomTooltip />} />

            <Legend
              wrapperStyle={{ paddingTop: "20px" }}
              iconSize={12}
              iconType="circle"
            />

            <Bar
              dataKey="sales"
              name="Units Sold"
              radius={[0, 4, 4, 0]}
              fill="var(--accent-color)"
            />
            <Bar
              dataKey="revenue"
              name="Revenue ($)"
              radius={[0, 4, 4, 0]}
              fill="var(--primary-color)"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default GeographyChart;
