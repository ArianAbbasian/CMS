import React from "react";
import "./FeedbackCharts.css";

const FeedbackCharts = ({ data }) => {
  // --- render Pie Chart ---
  const renderPieChart = (data, title) => (
    <div className="chart-container">
      <h4>{title}</h4>
      <div className="pie-chart-container">
        <div className="pie-chart">
          {data.map((item, index) => (
            <div
              key={index}
              className="pie-segment"
              style={{
                backgroundColor: item.color,
                transform: `rotate(${index * 90}deg)`,
                opacity: 0.8,
              }}
              title={`${item.name}: ${item.value}%`}
            />
          ))}
        </div>

        <div className="chart-legend">
          {data.map((item, index) => (
            <div key={index} className="legend-item">
              <div
                className="legend-color"
                style={{ backgroundColor: item.color }}
              />
              <span className="legend-label">{item.name}</span>
              <span className="legend-value">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // --- render Bar Chart ---
  const renderBarChart = (data, title) => {
    const maxValue = Math.max(...data.map((item) => item.comments));

    return (
      <div className="chart-container">
        <h4>{title}</h4>
        <div className="bar-chart">
          {data.map((item, index) => (
            <div key={index} className="bar-chart-item">
              <div className="bar-wrapper">
                <div
                  className="bar"
                  style={{ height: `${(item.comments / maxValue) * 100}%` }}
                />
              </div>
              <span className="bar-label">{item.month}</span>
              <span className="bar-value">{item.comments}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  // --- render Rating Distribution ---
  const renderRatingDistribution = (data) => (
    <div className="chart-container">
      <h4>Rating Distribution</h4>
      <div className="rating-distribution">
        {data.map((item, index) => (
          <div key={index} className="rating-item">
            <div className="rating-stars-container">
              <div className="rating-stars">{"⭐".repeat(item.rating)}</div>
              <span className="rating-stars-label">
                {item.rating} Star{item.rating !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="rating-bar-container">
              <div className="rating-info">
                <span className="rating-percentage">{item.percentage}%</span>
                <span className="rating-count">({item.count} reviews)</span>
              </div>
              <div className="rating-bar">
                <div
                  className="rating-progress"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // --- Chart Calculate---
  const totalComments = data.timeline.reduce(
    (sum, item) => sum + item.comments,
    0
  );

  const approvalRate = Math.round(
    data.statusDistribution.find((item) => item.name === "Approved")?.value || 0
  );

  const avgRating =
    data.ratingDistribution.reduce(
      (sum, item) => sum + item.rating * item.percentage,
      0
    ) / 100;

  return (
    <div className="feedback-charts">
      <h3>Feedback Analytics</h3>
      <div className="feedback-charts-subtitle">
        Visual insights from user feedback data
      </div>

      <div className="charts-grid">
        {renderBarChart(data.timeline, "Comments Timeline")}
        {renderPieChart(data.statusDistribution, "Status Distribution")}
        {renderRatingDistribution(data.ratingDistribution)}
      </div>

      <div className="charts-summary">
        <div className="summary-item">
          <span className="summary-label">Total Comments</span>
          <span className="summary-value">{totalComments.toLocaleString()}</span>
        </div>

        <div className="summary-item">
          <span className="summary-label">Approval Rate</span>
          <span className="summary-value">{approvalRate}%</span>
        </div>

        <div className="summary-item">
          <span className="summary-label">Avg Rating</span>
          <span className="summary-value">{avgRating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCharts;
