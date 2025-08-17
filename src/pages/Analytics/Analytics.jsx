import React, { useState } from "react";
import {
  Container,
  Grid,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import {
  Today as TodayIcon,
  DateRange as DateRangeIcon,
  CalendarMonth as CalendarMonthIcon,
  ArrowUpward as ArrowUpwardIcon,
  ArrowDownward as ArrowDownwardIcon,
  AttachMoney as AttachMoneyIcon,
  ShoppingCart as ShoppingCartIcon,
  People as PeopleIcon,
  TrendingUp as TrendingUpIcon,
} from "@mui/icons-material";

// Import custom components
import GeographyChart from "./../../components/Charts/GeographyChart";
import TrafficChart from "./../../components/Charts/TrafficChart";
import TopProductsTable from "./../../components/tables/TopProductsTable";
import RecentTransactions from "./../../components/tables/RecentTransactions";
import ProgressWidget from "./../../components/widgets/ProgressWidget";
import ActivityFeed from "./../../components/widgets/ActivityFeed";
import InventoryAlert from "./../../components/widgets/InventoryAlert";

// Import data
import { summaryData } from "../../datas";

const Analytics = () => {
  const [timeRange, setTimeRange] = useState("monthly");
  const [categoryFilter, setCategoryFilter] = useState("all");

  return (
    <Container maxWidth="xl" sx={{ py: 3 }}>
      {/* Page Header */}
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 4 }}
      >
        <Grid item>
          <Typography variant="h4" fontWeight="bold" color="textPrimary">
            Analytics Dashboard
          </Typography>
        </Grid>

        <Grid item>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <ToggleButtonGroup
                value={timeRange}
                exclusive
                onChange={(e, newRange) => setTimeRange(newRange)}
                aria-label="time range"
                size="small"
              >
                <ToggleButton value="daily" aria-label="daily">
                  <TodayIcon sx={{ mr: 1 }} />
                  <span>Daily</span>
                </ToggleButton>
                <ToggleButton value="weekly" aria-label="weekly">
                  <DateRangeIcon sx={{ mr: 1 }} />
                  <span>Weekly</span>
                </ToggleButton>
                <ToggleButton value="monthly" aria-label="monthly">
                  <CalendarMonthIcon sx={{ mr: 1 }} />
                  <span>Monthly</span>
                </ToggleButton>
              </ToggleButtonGroup>
            </Grid>

            <Grid item>
              <FormControl size="small" sx={{ minWidth: 180 }}>
                <InputLabel>Category</InputLabel>
                <Select
                  value={categoryFilter}
                  label="Category"
                  onChange={(e) => setCategoryFilter(e.target.value)}
                >
                  <MenuItem value="all">All</MenuItem>
                  <MenuItem value="electronics">Electronics</MenuItem>
                  <MenuItem value="computers">Computers</MenuItem>
                  <MenuItem value="home">Home</MenuItem>
                  <MenuItem value="fashion">Fashion</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {summaryData.map((item) => {
          const isPositive = item.change.startsWith("+");
          return (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: 3,
                  transition: "transform 0.3s, box-shadow 0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      gutterBottom
                    >
                      {item.title}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold" gutterBottom>
                      {item.value}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        color: isPositive ? "success.main" : "error.main",
                      }}
                    >
                      {isPositive ? (
                        <ArrowUpwardIcon fontSize="small" />
                      ) : (
                        <ArrowDownwardIcon fontSize="small" />
                      )}
                      {item.change}
                    </Typography>
                  </div>
                  <Box
                    sx={{
                      bgcolor: "primary.light",
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.icon === "AttachMoney" && (
                      <AttachMoneyIcon fontSize="large" />
                    )}
                    {item.icon === "ShoppingCart" && (
                      <ShoppingCartIcon fontSize="large" />
                    )}
                    {item.icon === "People" && <PeopleIcon fontSize="large" />}
                    {item.icon === "TrendingUp" && (
                      <TrendingUpIcon fontSize="large" />
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>

      {/* Charts Row 1 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <GeographyChart />
        </Grid>

        <Grid item xs={12} md={6}>
          <TrafficChart />
        </Grid>
      </Grid>

      {/* Charts Row 2 */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              height: 400,
              p: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Sales Overview
            </Typography>
            <Box
              sx={{
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color="textSecondary">
                Sales Chart Component
              </Typography>
            </Box>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card
            sx={{
              borderRadius: 3,
              boxShadow: 3,
              height: 400,
              p: 2,
            }}
          >
            <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
              Product Categories
            </Typography>
            <Box
              sx={{
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography color="textSecondary">
                Categories Chart Component
              </Typography>
            </Box>
          </Card>
        </Grid>
      </Grid>

      {/* Tables & Widgets Section */}
      <Grid container spacing={3}>
        {/* Left Column - Tables */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3} direction="column">
            {/* Top Products Table */}
            <Grid item>
              <TopProductsTable />
            </Grid>

            {/* Recent Transactions Table */}
            <Grid item>
              <RecentTransactions />
            </Grid>
          </Grid>
        </Grid>

        {/* Right Column - Widgets */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3} direction="column">
            {/* Monthly Goals */}
            <Grid item>
              <ProgressWidget />
            </Grid>

            {/* Recent Activity */}
            <Grid item>
              <ActivityFeed />
            </Grid>

            {/* Low Stock Alert */}
            <Grid item>
              <InventoryAlert />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Analytics;
