import React from "react";
import { emailLabels } from "../../../datas";
import "./EmailLabels.css";

const EmailLabels = () => {
  return (
    <div className="labels-container">
      <h3 className="labels-title">Labels</h3>
      <div className="labels-list">
        {emailLabels.map((label) => (
          <div key={label.id} className="label-item">
            <span 
              className="label-color" 
              style={{ backgroundColor: label.color }}
            />
            <span className="label-name">{label.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailLabels;