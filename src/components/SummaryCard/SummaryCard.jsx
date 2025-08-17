import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Avatar,
  Stack
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const SummaryCard = ({ title, value, change, icon }) => {
  const isPositive = change.startsWith('+');
  
  return (
    <Card sx={{ 
      borderRadius: '12px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 6px 16px rgba(0, 0, 0, 0.1)'
      }
    }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <Box>
            <Typography variant="subtitle1" color="textSecondary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" fontWeight="700">
              {value}
            </Typography>
            <Stack direction="row" alignItems="center" spacing={0.5} mt={1}>
              {isPositive ? (
                <ArrowUpwardIcon sx={{ color: '#4caf50', fontSize: 18 }} />
              ) : (
                <ArrowDownwardIcon sx={{ color: '#f44336', fontSize: 18 }} />
              )}
              <Typography variant="body2" color={isPositive ? '#4caf50' : '#f44336'}>
                {change}
              </Typography>
            </Stack>
          </Box>
          <Avatar sx={{ 
            bgcolor: 'primary.light', 
            width: 56, 
            height: 56 
          }}>
            {icon}
          </Avatar>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default SummaryCard;