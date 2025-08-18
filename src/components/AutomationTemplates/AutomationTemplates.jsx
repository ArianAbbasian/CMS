import React from "react";
import { automationTemplates } from "../../datas";
import "./AutomationTemplates.css";

export default function AutomationTemplates() {
  return (
    <div className="TemplatesContainer">
      <div className="TemplatesHeader">
        <h3 className="TemplatesTitle">Automation Templates</h3>
        <span className="TemplatesSubtitle">Pre-built automation workflows</span>
      </div>
      
      <div className="TemplatesGrid">
        {automationTemplates.map((template) => (
          <div key={template.id} className="TemplateCard">
            <div className="TemplateHeader">
              <div 
                className="TemplateIcon"
                style={{ backgroundColor: template.color }}
              >
                {template.icon && 
                  React.createElement(template.icon, { 
                    style: { color: "#fff", fontSize: "20px" } 
                  })
                }
              </div>
              <h4 className="TemplateName">{template.title}</h4>
            </div>
            
            <p className="TemplateDescription">{template.description}</p>
            
            <div className="TemplateMeta">
              <div className="MetaItem">
                <span className="MetaLabel">Trigger:</span>
                <span className="MetaValue">{template.trigger}</span>
              </div>
              
              <div className="MetaItem">
                <span className="MetaLabel">Actions:</span>
                <ul className="ActionsList">
                  {template.actions.map((action, i) => (
                    <li key={i} className="ActionItem">
                      <span className="ActionBullet">•</span>
                      {action}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <button className="UseTemplateButton">
              Use This Template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}