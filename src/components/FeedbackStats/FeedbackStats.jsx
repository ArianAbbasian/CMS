import React from "react";
import "./FeedbackStats.css"; 

const FeedbackStats = ({ data }) => {
  // تابع برای رندر آیکون بر اساس نام
  const renderIcon = (iconName, color) => {
    const iconMap = {
      Comment: "💬",
      Schedule: "⏰",
      CheckCircle: "✅",
      Report: "🚫"
    };
    
    return (
      <div className="FeedbackStatsIconWrapper" style={{ backgroundColor: `${color}15` }}>
        {iconMap[iconName] || "📊"}
      </div>
    );
  };

  return (
    <div className="FeedbackStats">
      
      <div className="FeedbackStatsCardContainer">
        {data.map((item) => (
          <div key={item.id} className="FeedbackStatsCard">
            <div className="FeedbackStatsCardContent">
              <div className="FeedbackStatsCardMain">
                <div className="FeedbackStatsCardValue">{item.value}</div>
                <div className="FeedbackStatsCardTitle">{item.title}</div>
                <div className={`FeedbackStatsChange ${
                  item.change.startsWith("+") ? "positive" : "negative"
                }`}>
                  {item.change}
                </div>
              </div>
              {renderIcon(item.icon, item.color)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackStats;