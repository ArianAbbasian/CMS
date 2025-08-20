import React from "react";
import { automationTemplates } from "../../datas";
import "./AutomationTemplates.css";

export default function AutomationTemplates() {
  return (
    <div className="TemplatesContainer">
      {/* Header */}
      <header className="TemplatesHeader">
        <h3 className="TemplatesTitle">Automation Templates</h3>
        <span className="TemplatesSubtitle">
          Pre-built automation workflows
        </span>
      </header>

      {/* Templates Grid */}
      <div className="TemplatesGrid">
        {automationTemplates.map(({ id, color, icon, title, description, trigger, actions }) => (
          <article key={id} className="TemplateCard">
            {/* Card Header */}
            <div className="TemplateHeader">
              <div className="TemplateIcon" style={{ backgroundColor: color }}>
                {icon &&
                  React.createElement(icon, {
                    style: { color: "#fff", fontSize: "20px" },
                  })}
              </div>
              <h4 className="TemplateName">{title}</h4>
            </div>

            {/* Description */}
            <p className="TemplateDescription">{description}</p>

            {/* Meta Info */}
            <div className="TemplateMeta">
              <div className="MetaItem">
                <span className="MetaLabel">Trigger:</span>
                <span className="MetaValue">{trigger}</span>
              </div>

              <div className="MetaItem">
                <span className="MetaLabel">Actions:</span>
                <ul className="ActionsList">
                  {actions.map((action, i) => (
                    <li key={i} className="ActionItem">
                      <span className="ActionBullet">•</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Action Button */}
            <button className="UseTemplateButton">Use This Template</button>
          </article>
        ))}
      </div>
    </div>
  );
}
