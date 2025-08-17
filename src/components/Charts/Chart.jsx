import React, { useState, useEffect } from 'react';
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from 'recharts';
import './Chart.css';

export default function Chart({ title, data, dataKey, grid }) {
  const [aspectRatio, setAspectRatio] = useState(4);
  const [chartHeight, setChartHeight] = useState(300);

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

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='chart'>
      <h3 className="chartTitle">{title}</h3>
      
      <div className="chartContainer" style={{ height: chartHeight }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis 
              dataKey="name" 
              stroke='var(--chart-axis-color)'
              tick={{ fill: 'var(--chart-text-color)', fontSize: 12 }}
              tickLine={false}
            />
            <YAxis 
              stroke='var(--chart-axis-color)'
              tick={{ fill: 'var(--chart-text-color)', fontSize: 12 }}
              tickLine={false}
            />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke='var(--chart-line-color)'
              strokeWidth={2}
              dot={{ strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: 'var(--chart-line-color)', strokeWidth: 2, fill: '#fff' }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'var(--chart-tooltip-bg)',
                borderColor: 'var(--chart-tooltip-border)',
                borderRadius: '8px',
                color: 'var(--chart-text-color)'
              }}
              itemStyle={{ color: 'var(--chart-text-color)' }}
            />
            {grid && <CartesianGrid stroke='var(--chart-grid-color)' strokeDasharray="3 3" />}
            <Legend 
              iconType="circle"
              iconSize={10}
              wrapperStyle={{ 
                paddingTop: '10px',
                color: 'var(--chart-text-color)',
                fontSize: '12px'
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}