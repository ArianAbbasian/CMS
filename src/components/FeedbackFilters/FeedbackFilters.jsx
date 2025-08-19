import React, { useState } from "react";
import "./FeedbackFilters.css";

const FeedbackFilters = ({ 
  onSearch, 
  onFilterChange, 
  onStatusFilter, 
  onDateFilter, 
  onRatingFilter,
  statusOptions,
  dateOptions,
  ratingOptions
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedRating, setSelectedRating] = useState("all");

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    onSearch?.(value);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    setSelectedStatus(value);
    onStatusFilter?.(value);
  };

  const handleDateChange = (e) => {
    const value = e.target.value;
    setSelectedDate(value);
    onDateFilter?.(value);
  };

  const handleRatingChange = (e) => {
    const value = e.target.value;
    setSelectedRating(value);
    onRatingFilter?.(value);
  };

  const handleClearFilters = () => {
    setSearchTerm("");
    setSelectedStatus("all");
    setSelectedDate("all");
    setSelectedRating("all");
    onSearch?.("");
    onStatusFilter?.("all");
    onDateFilter?.("all");
    onRatingFilter?.("all");
  };

  return (
    <div className="feedback-filters">
      <div className="filters-header">
        <h3>Filters</h3>
        <button className="clear-filters-btn" onClick={handleClearFilters}>
          Clear All
        </button>
      </div>
      
      <div className="filters-grid">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search comments or users..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <span className="search-icon">🔍</span>
        </div>

        <div className="filter-group">
          <label>Status</label>
          <select value={selectedStatus} onChange={handleStatusChange} className="filter-select">
            {statusOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Date</label>
          <select value={selectedDate} onChange={handleDateChange} className="filter-select">
            {dateOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Rating</label>
          <select value={selectedRating} onChange={handleRatingChange} className="filter-select">
            {ratingOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FeedbackFilters;