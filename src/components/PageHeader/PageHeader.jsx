import React, { useState } from "react";
import {
  Today as TodayIcon,
  DateRange as DateRangeIcon,
  CalendarMonth as CalendarMonthIcon,
  TrendingUp as TrendingUpIcon,
  HomeIcon,
  PersonAdd,
  ShoppingBagIcon,
  AutoAwesome
} from "@mui/icons-material";
import "./PageHeader.css";

const PageHeader = ({
  title,
  description,
  descriptionIcon = <TrendingUpIcon className="description-icon" />,
  showTimeFilters = false,
  initialTimeRange = "weekly",
  onTimeChange,
}) => {
  const [timeRange, setTimeRange] = useState(initialTimeRange);

  const handleTimeChange = (newRange) => {
    setTimeRange(newRange);
    if (onTimeChange) {
      onTimeChange(newRange);
    }
  };

  return (
    <div className="page-header">
      <div className="header-content">
        <div className="header-text">
          <h1 className="header-title">{title}</h1>
          {description && (
            <p className="header-description">
              {descriptionIcon}
              {description}
            </p>
          )}
        </div>

        {showTimeFilters && (
          <div className="time-filters">
            <button
              className={`time-filter ${timeRange === "daily" ? "active" : ""}`}
              onClick={() => handleTimeChange("daily")}
            >
              <TodayIcon className="filter-icon" />
              <span>Daily</span>
            </button>
            <button
              className={`time-filter ${
                timeRange === "weekly" ? "active" : ""
              }`}
              onClick={() => handleTimeChange("weekly")}
            >
              <DateRangeIcon className="filter-icon" />
              <span>Weekly</span>
            </button>
            <button
              className={`time-filter ${
                timeRange === "monthly" ? "active" : ""
              }`}
              onClick={() => handleTimeChange("monthly")}
            >
              <CalendarMonthIcon className="filter-icon" />
              <span>Monthly</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
