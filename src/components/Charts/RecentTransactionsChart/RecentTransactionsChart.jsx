import React from "react";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from "recharts";
import { useTheme } from "../../../contexts/ThemeContext";
import { recentTransactionsData, chartColors } from "../../../datas";
import "./RecentTransactionsChart.css";

export default function RecentTransactionsChart() {
  const { isDarkMode } = useTheme();
  const colors = isDarkMode ? chartColors.dark : chartColors.light;

  return (
    <div className="recent-transactions-widget">
      <div className="recent-transactions-header">
        <h3>Recent Transactions</h3>
        <span className="subtitle">Last 6 months</span>
      </div>
      
      <div className="recent-chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={recentTransactionsData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={colors.gridStroke} 
            />
            <XAxis 
              dataKey="name" 
              tick={{ fill: colors.text }}
            />
            <YAxis 
              tick={{ fill: colors.text }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: colors.tooltipBg,
                borderColor: colors.gridStroke,
                color: colors.text
              }}
            />
            <Bar 
              dataKey="transactions" 
              fill={colors.barFill}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}