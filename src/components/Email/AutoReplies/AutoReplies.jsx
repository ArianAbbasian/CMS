import React, { useState } from "react";
import { autoReplies } from "../../../datas";
import "./AutoReplies.css";

const AutoReplies = () => {
  const [activeTab, setActiveTab] = useState("templates");

  return (
    <div className="autoreplies-container">
      <div className="autoreplies-tabs">
        <button 
          className={`tab-button ${activeTab === "templates" ? "active" : ""}`}
          onClick={() => setActiveTab("templates")}
        >
          Templates
        </button>
        <button 
          className={`tab-button ${activeTab === "rules" ? "active" : ""}`}
          onClick={() => setActiveTab("rules")}
        >
          Rules
        </button>
      </div>

      {activeTab === "templates" && (
        <div className="templates-list">
          {autoReplies.map((template) => (
            <div key={template.id} className="template-item">
              <h4 className="template-name">{template.name}</h4>
              <div className="template-subject">{template.subject}</div>
              <button className="template-edit">Edit</button>
            </div>
          ))}
          <button className="add-template">+ Add Template</button>
        </div>
      )}
    </div>
  );
};

export default AutoReplies;