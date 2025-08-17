import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { 
  Card,
  Typography
} from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const GeographyChart = () => {
  const { isDarkMode } = useTheme();
  
  // داده‌های نمونه
  const data = [
    { name: 'North America', sales: 4000, revenue: 24000 },
    { name: 'Europe', sales: 3000, revenue: 13980 },
    { name: 'Asia', sales: 2780, revenue: 19000 },
    { name: 'South America', sales: 1890, revenue: 9800 },
    { name: 'Africa', sales: 2390, revenue: 12000 },
    { name: 'Oceania', sales: 1490, revenue: 8500 },
  ];

  return (
    <Card sx={{ p: 2, height: '400px' }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Sales by Region
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#555' : '#eee'} />
          <XAxis type="number" stroke={isDarkMode ? '#fff' : '#666'} />
          <YAxis dataKey="name" type="category" scale="band" stroke={isDarkMode ? '#fff' : '#666'} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDarkMode ? '#333' : '#fff',
              borderColor: isDarkMode ? '#555' : '#ddd',
              borderRadius: '8px'
            }} 
          />
          <Legend />
          <Bar 
            dataKey="sales" 
            name="Units Sold" 
            fill="#8884d8" 
            radius={[0, 4, 4, 0]}
          />
          <Bar 
            dataKey="revenue" 
            name="Revenue ($)" 
            fill="#82ca9d" 
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default GeographyChart;