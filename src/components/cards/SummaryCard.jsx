
import React from 'react';
import { Card, Typography, Box } from '@mui/material';
import {
  Store,
  AttachMoney,
  ShoppingCart,
  People,
  TrendingUp
} from '@mui/icons-material';
import './SummaryCard.css';

const iconComponents = {
  AttachMoney: AttachMoney,
  ShoppingCart: ShoppingCart,
  People: People,
  TrendingUp: TrendingUp,
  Store: Store
};

const SummaryCard = ({ title, value, change, icon }) => {
  const IconComponent = iconComponents[icon];
  const isPositive = change?.startsWith('+');

  return (
    <Card className="statCard" elevation={0}>
      <Box className={`statIcon ${icon}`}>
        {IconComponent && <IconComponent fontSize="medium" />}
      </Box>
      <Box className="statInfo">
        <Typography className="statNumber">{value}</Typography>
        <Typography className="statLabel">{title}</Typography>
        {change && (
          <Typography className={`statChange ${isPositive ? 'positive' : 'negative'}`}>
            {isPositive ? '↑' : '↓'} {change.replace('+', '').replace('-', '')}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default SummaryCard;