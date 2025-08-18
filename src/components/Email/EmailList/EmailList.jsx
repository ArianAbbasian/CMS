import React from "react";
import { emails } from "../../../datas";
import "./EmailList.css";

const EmailList = () => {
  return (
    <div className="email-list">
      {emails.map((email) => (
        <div key={email.id} className={`email-item ${!email.read ? "unread" : ""}`}>
          <div className="email-header">
            <span className="email-star">{email.starred ? "★" : "☆"}</span>
            <span className="email-from">{email.from}</span>
            <span className="email-date">{email.date}</span>
          </div>
          <div className="email-subject">{email.subject}</div>
          {email.hasAttachment && <span className="email-attachment">📎</span>}
        </div>
      ))}
    </div>
  );
};

export default EmailList;