import React from "react";
import { Card, Typography, Box } from "@mui/material";
import {
  Store,
  AttachMoney,
  ShoppingCart,
  People,
  TrendingUp,
} from "@mui/icons-material";
import "./SummaryCard.css";

const ICONS = {
  AttachMoney,
  ShoppingCart,
  People,
  TrendingUp,
  Store,
};

const SummaryCard = ({ title, value, change, icon }) => {
  const Icon = ICONS[icon];
  const isPositive = change?.startsWith("+");

  return (
    <Card className="statCard" elevation={0}>
      {/* Icon Section */}
      <Box className={`statIcon ${icon}`}>
        {Icon && <Icon fontSize="medium" />}
      </Box>

      {/* Info Section */}
      <Box className="statInfo">
        <Typography className="statNumber">{value}</Typography>
        <Typography className="statLabel">{title}</Typography>

        {change && (
          <Typography
            className={`statChange ${isPositive ? "positive" : "negative"}`}
          >
            {isPositive ? "↑" : "↓"} {change.replace(/[+-]/, "")}
          </Typography>
        )}
      </Box>
    </Card>
  );
};

export default SummaryCard;
