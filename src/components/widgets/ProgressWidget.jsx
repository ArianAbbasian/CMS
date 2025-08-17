import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  LinearProgress,
  Stack
} from '@mui/material';
import { useTheme } from '../../contexts/ThemeContext';

const ProgressWidget = () => {
  const { isDarkMode } = useTheme();
  
  const goals = [
    { name: 'Monthly Sales', progress: 75, target: 1200 },
    { name: 'Revenue Target', progress: 65, target: 25000 },
    { name: 'New Customers', progress: 45, target: 300 },
  ];

  return (
    <Card sx={{ 
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      height: '100%'
    }}>
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
          Monthly Goals
        </Typography>
        
        <Stack spacing={4}>
          {goals.map((goal, index) => (
            <Box key={index}>
              <Box sx={{ 
                display: 'flex', 
                justifyContent: 'space-between',
                mb: 1
              }}>
                <Typography variant="body1">{goal.name}</Typography>
                <Typography variant="body1" fontWeight="500">
                  {goal.progress}%
                </Typography>
              </Box>
              <LinearProgress 
                variant="determinate" 
                value={goal.progress} 
                sx={{ 
                  height: 10,
                  borderRadius: 5,
                  '& .MuiLinearProgress-bar': {
                    borderRadius: 5,
                    backgroundColor: index === 0 ? '#3a7bd5' : 
                                     index === 1 ? '#00d2ff' : 
                                     '#7d9df5'
                  }
                }} 
              />
              <Typography variant="caption" sx={{ mt: 1, display: 'block' }}>
                Target: {goal.target.toLocaleString()}
              </Typography>
            </Box>
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProgressWidget;