
import React from "react";
import "./HomeSkeleton.css";

export default function HomeSkeleton() {
  return (
    <div className="skeleton-container">
      {/* Header */}
      <div className="skeleton-header"></div>
      
      {/* Status Cards */}
      <div className="skeleton-stats">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="skeleton-stat-card"></div>
        ))}
      </div>
      
      {/* Main section */}
      <div className="skeleton-main-content">
        <div className="skeleton-table"></div>
        <div className="skeleton-chart"></div>
      </div>

      {/* New section */}
      <div className="skeleton-footer">
        <div className="skeleton-footer-item"></div>
        <div className="skeleton-footer-item"></div>
      </div>
    </div>
  );
}