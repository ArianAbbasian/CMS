import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useTheme as useCustomTheme } from "../../../contexts/ThemeContext";
import { trafficData, trafficMeta } from "../../../datas";
import "./TrafficChart.css";

const TrafficChart = () => {
  const { isDarkMode } = useCustomTheme();

  return (
    <div className="traffic-widget">
      {/* --- Widget Header --- */}
      <div className="traffic-widget-header">
        <h3 className="traffic-widget-title">{trafficMeta.title}</h3>
        <span className="traffic-widget-subtitle">
          Traffic sources distribution
        </span>
      </div>

      {/* --- Chart Container --- */}
      <div className="traffic-chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={trafficData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) =>
                `${name}: ${(percent * 100).toFixed(0)}%`
              }
              labelLine={false}
            >
              {/* --- Pie segments with dynamic stroke based on theme --- */}
              {trafficData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke={isDarkMode ? "#333" : "#fff"}
                  strokeWidth={1}
                />
              ))}
            </Pie>

            {/* --- Tooltip --- */}
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>

        {/* --- Legend --- */}
        <div className="traffic-chart-legend">
          {trafficData.map((entry, index) => (
            <div key={`legend-${index}`} className="traffic-chart-legend-item">
              <div
                className="traffic-chart-legend-color"
                style={{ backgroundColor: entry.color }}
              />
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrafficChart;
