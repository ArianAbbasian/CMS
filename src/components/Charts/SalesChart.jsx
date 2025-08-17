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

const SalesChart = ({ timeRange }) => {
  const { isDarkMode } = useTheme();
  
  // داده‌های نمونه
  const data = [
    { month: 'Jan', sales: 11200, revenue: 24500 },
    { month: 'Feb', sales: 9900, revenue: 22100 },
    { month: 'Mar', sales: 12090, revenue: 19800 },
    { month: 'Apr', sales: 17800, revenue: 26700 },
    { month: 'May', sales: 15400, revenue: 28900 },
    { month: 'Jun', sales: 18500, revenue: 31200 },
    { month: 'Jul', sales: 22400, revenue: 35600 },
  ];

  return (
    <Card sx={{ p: 2, height: '400px' }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Sales Overview
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          data={data}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={isDarkMode ? '#555' : '#eee'} />
          <XAxis dataKey="month" stroke={isDarkMode ? '#fff' : '#666'} />
          <YAxis stroke={isDarkMode ? '#fff' : '#666'} />
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
            radius={[4, 4, 0, 0]}
          />
          <Bar 
            dataKey="revenue" 
            name="Revenue ($)" 
            fill="#82ca9d" 
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default SalesChart;