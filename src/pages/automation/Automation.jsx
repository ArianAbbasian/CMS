import React, { useState } from "react";
import WorkflowBuilder from "../../components/WorkflowBuilder/WorkflowBuilder";
import AutomationTemplates from "../../components/AutomationTemplates/AutomationTemplates";
import ExecutionLogs from "../../components/ExecutionLogs/ExecutionLogs";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./Automation.css";
import { AutoAwesome } from "@mui/icons-material";

export default function Automation() {
  const [activeTab, setActiveTab] = useState("builder");

  const tabTitles = {
    builder: {
      title: "Workflow Builder",
      description: "Design and build custom automations",
    },
    templates: {
      title: "Templates",
      description: "Use pre-defined automation templates",
    },
    logs: {
      title: "Execution Logs",
      description: "View automation execution history",
    },
  };

  return (
    <div className="automation-page">
      <PageHeader
        title="Automation Center"
        description={tabTitles[activeTab].description}
        descriptionIcon={<AutoAwesome className="description-icon" />}
      />

      <div className="tabs-container">
        <div className="tabs">
          <button
            className={activeTab === "builder" ? "active" : ""}
            onClick={() => setActiveTab("builder")}
          >
            Builder
          </button>
          <button
            className={activeTab === "templates" ? "active" : ""}
            onClick={() => setActiveTab("templates")}
          >
            Templates
          </button>
          <button
            className={activeTab === "logs" ? "active" : ""}
            onClick={() => setActiveTab("logs")}
          >
            Logs
          </button>
        </div>
      </div>

      <main className="automation-content">
        {activeTab === "builder" && <WorkflowBuilder />}
        {activeTab === "templates" && <AutomationTemplates />}
        {activeTab === "logs" && <ExecutionLogs />}
      </main>
    </div>
  );
}
