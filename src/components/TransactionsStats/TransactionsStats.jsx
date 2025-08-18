import React from "react";
import PropTypes from "prop-types";
import "./TransactionsStats.css"; 

const TransactionsStats = ({ title, value, change, icon, color = "#4CAF50" }) => {
  return (
    <div className="statCard" style={{ borderBottom: `4px solid ${color}` }}>
      <div className="statIcon" style={{ color }}>
        {icon}
      </div>
      <div className="statInfo">
        <h3>{title}</h3>
        <p className="value">{value}</p>
        <p className="change" style={{ color }}>{change}</p>
      </div>
    </div>
  );
};

TransactionsStats.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  change: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  color: PropTypes.string
};

export default TransactionsStats;