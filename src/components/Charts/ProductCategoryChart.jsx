import React from 'react';
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer,
  Tooltip,
  Legend
} from 'recharts';
import { 
  Card,
  Typography
} from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

const ProductCategoryChart = ({ categoryFilter }) => {
  const { isDarkMode } = useTheme();
  
  // داده‌های نمونه
  const data = [
    { name: 'Electronics', value: 35 },
    { name: 'Computers', value: 25 },
    { name: 'Home', value: 20 },
    { name: 'Fashion', value: 15 },
    { name: 'Other', value: 5 },
  ];

  return (
    <Card sx={{ p: 2, height: '400px' }}>
      <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
        Product Categories
      </Typography>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip 
            formatter={(value) => [`${value}%`, 'Share']}
            contentStyle={{ 
              backgroundColor: isDarkMode ? '#333' : '#fff',
              borderColor: isDarkMode ? '#555' : '#ddd',
              borderRadius: '8px'
            }} 
          />
          <Legend 
            layout="vertical" 
            verticalAlign="middle" 
            align="right"
            wrapperStyle={{ color: isDarkMode ? '#fff' : '#000' }}
          />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default ProductCategoryChart;