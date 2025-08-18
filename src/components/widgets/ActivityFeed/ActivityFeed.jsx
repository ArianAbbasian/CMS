import React from "react";
import {
  ShoppingCart,
  Payment,
  PersonAdd,
  AccountCircle,
  Store,
} from "@mui/icons-material";
import "./ActivityFeed.css";
import { activityFeedData } from "../../../datas";

const iconComponents = {
  ShoppingCart: ShoppingCart,
  Payment: Payment,
  PersonAdd: PersonAdd,
  AccountCircle: AccountCircle,
  Store: Store,
};

const ActivityFeed = () => {
  return (
    <div className="ActivityFeed">
      <div className="ActivityFeedHeader">
        <h3 className="ActivityFeedTitle">Recent Activities</h3>
        <span className="ActivityFeedSubtitle">User interactions timeline</span>
      </div>
      
      <div className="ActivityFeedList">
        {activityFeedData.map((activity) => {
          const IconComponent = iconComponents[activity.icon];
          
          return (
            <div key={activity.id} className="ActivityItem">
              <div className="ActivityUser">
                <div className="ActivityAvatar" style={{ backgroundColor: activity.color }}>
                  {IconComponent && <IconComponent style={{ color: "#fff" }} />}
                </div>
                <div className="ActivityUserInfo">
                  <div className="ActivityUserName">{activity.user}</div>
                  <div className="ActivityTime">{activity.time}</div>
                </div>
              </div>
              <div className="ActivityContent">
                {activity.action}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ActivityFeed;