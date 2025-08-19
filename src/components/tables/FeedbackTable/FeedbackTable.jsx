import React from "react";
import "./FeedbackTable.css";

const FeedbackTable = ({ data, onRowClick, onAction }) => {
  const getStatusBadge = (status) => {
    const statusConfig = {
      approved: { label: "Approved", class: "status-approved" },
      pending: { label: "Pending", class: "status-pending" },
      spam: { label: "Spam", class: "status-spam" },
      rejected: { label: "Rejected", class: "status-rejected" },
    };

    const config = statusConfig[status] || {
      label: status,
      class: "status-default",
    };

    return (
      <span className={`status-badge ${config.class}`}>{config.label}</span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="feedback-table-container">
      <table className="feedback-table">
        <thead>
          <tr>
            <th>User</th>
            <th>Comment</th>
            <th>On Post</th>
            <th>Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => onRowClick?.(item)}
              className="feedback-table-row"
            >
              <td>
                <div className="user-info">
                  <img
                    src={process.env.PUBLIC_URL + "/" + item.user.avatar}
                    alt={item.user.name}
                    className="user-avatar"
                  />
                  <div className="user-details">
                    <div className="user-name">{item.user.name}</div>
                    <div className="user-email">{item.user.email}</div>
                  </div>
                </div>
              </td>
              <td>
                <div className="comment-preview">
                  {item.comment.length > 50
                    ? `${item.comment.substring(0, 50)}...`
                    : item.comment}
                </div>
              </td>
              <td>
                <div
                  className="post-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Navigate to post
                  }}
                >
                  {item.post}
                </div>
              </td>
              <td>{formatDate(item.date)}</td>
              <td>{getStatusBadge(item.status)}</td>
              <td>
                <div
                  className="action-buttons"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="btn-icon approve"
                    onClick={() => onAction?.("approve", item)}
                  >
                    ✓
                  </button>
                  <button
                    className="btn-icon reject"
                    onClick={() => onAction?.("reject", item)}
                  >
                    ✕
                  </button>
                  <button
                    className="btn-icon reply"
                    onClick={() => onAction?.("reply", item)}
                  >
                    ↩
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
