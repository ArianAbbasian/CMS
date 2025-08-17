import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  Divider,
} from "@mui/material";
import {
  PersonAdd,
  ShoppingCart,
  Payment,
  AccountCircle,
  Store,
} from "@mui/icons-material";
import { useTheme } from '../../contexts/ThemeContext';

const ActivityFeed = () => {
  const { isDarkMode } = useTheme();

  const activities = [
    {
      id: 1,
      user: "John Doe",
      action: "placed a new order",
      time: "5 minutes ago",
      icon: <ShoppingCart />,
      color: "#3a7bd5",
    },
    {
      id: 2,
      user: "Jane Smith",
      action: "made a payment",
      time: "15 minutes ago",
      icon: <Payment />,
      color: "#00d2ff",
    },
    {
      id: 3,
      user: "Robert Johnson",
      action: "registered as a new customer",
      time: "1 hour ago",
      icon: <PersonAdd />,
      color: "#7d9df5",
    },
    {
      id: 4,
      user: "Emily Davis",
      action: "updated profile information",
      time: "2 hours ago",
      icon: <AccountCircle />,
      color: "#ff9800",
    },
    {
      id: 5,
      user: "Admin",
      action: "added new product",
      time: "3 hours ago",
      icon: <Store />,
      color: "#4caf50",
    },
  ];

  return (
    <Card
      sx={{
        borderRadius: "12px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        height: "100%",
      }}
    >
      <CardContent>
        <Typography variant="h6" gutterBottom sx={{ mb: 2 }}>
          Recent Activity
        </Typography>

        <List sx={{ maxHeight: 300, overflow: "auto" }}>
          {activities.map((activity, index) => (
            <React.Fragment key={activity.id}>
              <ListItem alignItems="flex-start" sx={{ py: 1.5 }}>
                <ListItemAvatar>
                  <Avatar
                    sx={{
                      bgcolor: activity.color,
                      width: 36,
                      height: 36,
                    }}
                  >
                    {activity.icon}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      <Box component="span" fontWeight="500">
                        {activity.user}
                      </Box>{" "}
                      {activity.action}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="textSecondary">
                      {activity.time}
                    </Typography>
                  }
                />
              </ListItem>
              {index < activities.length - 1 && (
                <Divider variant="inset" component="li" />
              )}
            </React.Fragment>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;
