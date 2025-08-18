import React from 'react';
import { 
  LocalMall,
  AttachMoney,
  People
} from '@mui/icons-material';
import { progressGoals } from '../../../datas';
import './ProgressWidget.css';

const iconComponents = {
  LocalMall: LocalMall,
  AttachMoney: AttachMoney,
  People: People
};

const ProgressWidget = () => {
  return (
    <div className="ProgressWidget">
      <div className="ProgressWidgetHeader">
        <h3 className="ProgressWidgetTitle">Monthly Goals</h3>
        <span className="ProgressWidgetSubtitle">Progress tracking</span>
      </div>
      
      <div className="ProgressWidgetCardContainer">
        <div className="ProgressWidgetCard">
          {progressGoals.map((goal) => {
            const IconComponent = iconComponents[goal.icon];
            return (
              <div key={goal.id} className="ProgressWidgetGoal">
                <div className="ProgressWidgetGoalHeader">
                  <div className="ProgressWidgetGoalName">
                    <IconComponent style={{ color: goal.color }} />
                    {goal.name}
                  </div>
                  <div className="ProgressWidgetGoalValue">
                    {goal.progress}%
                  </div>
                </div>
                <div className="ProgressWidgetBarContainer">
                  <div 
                    className="ProgressWidgetBar"
                    style={{ 
                      width: `${goal.progress}%`,
                      backgroundColor: goal.color
                    }}
                  ></div>
                </div>
                <div className="ProgressWidgetGoalFooter">
                  <span className="ProgressWidgetGoalTarget">
                    Target: {goal.target.toLocaleString()}
                  </span>
                  <span className="ProgressWidgetGoalPercentage">
                    {goal.progress}% Completed
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProgressWidget;