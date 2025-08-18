// src/components/Loading/HomeSkeleton.jsx
import React from "react";
import "./HomeSkeleton.css";

export default function HomeSkeleton() {
  return (
    <div className="skeleton-container">
      {/* هدر */}
      <div className="skeleton-header"></div>
      
      {/* کارت‌های آمار */}
      <div className="skeleton-stats">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="skeleton-stat-card"></div>
        ))}
      </div>
      
      {/* بخش میانی */}
      <div className="skeleton-main-content">
        <div className="skeleton-table"></div>
        <div className="skeleton-chart"></div>
      </div>

      {/* بخش پایینی جدید */}
      <div className="skeleton-footer">
        <div className="skeleton-footer-item"></div>
        <div className="skeleton-footer-item"></div>
      </div>
    </div>
  );
}