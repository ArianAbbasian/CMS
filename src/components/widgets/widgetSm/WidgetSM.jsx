import React from "react";
import { Visibility } from "@mui/icons-material";
import { newMembers } from "./../../../datas";
import "./WidgetSM.css";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newMembers.map((user) => (
          <li key={user.id} className="widgetSmListItem">
            <img
              src={process.env.PUBLIC_URL + "/" + user.img}
              className="widgetSmImg"
              alt={user.username}
            />
            <div className="widgetSmUser">
              <span className="widgetSmUserName">{user.username}</span>
              <span className="widgetSmUserTitle">{user.title}</span>
            </div>
            <button className="widgetSmButton" title="View profile">
              <Visibility className="widgetSmIcon" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
