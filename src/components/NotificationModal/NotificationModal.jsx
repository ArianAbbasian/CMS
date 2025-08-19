import React from "react";
import {
  Notifications,
  Close,
  CheckCircle,
  Warning,
  Info,
  Error,
  MarkEmailRead,
  ShoppingCart,
  AccountCircle,
  Payment
} from "@mui/icons-material";
import "./NotificationModal.css";

const NotificationModal = ({ isOpen, onClose, notifications }) => {
  if (!isOpen) return null;

  const getNotificationIcon = (type) => {
    switch (type) {
      case "success":
        return <CheckCircle className="notification-icon success" />;
      case "warning":
        return <Warning className="notification-icon warning" />;
      case "error":
        return <Error className="notification-icon error" />;
      case "info":
        return <Info className="notification-icon info" />;
      case "order":
        return <ShoppingCart className="notification-icon order" />;
      case "user":
        return <AccountCircle className="notification-icon user" />;
      case "payment":
        return <Payment className="notification-icon payment" />;
      default:
        return <Notifications className="notification-icon default" />;
    }
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <>
      <div className="modal-overlay" onClick={onClose} />
      <div className="notification-modal">
        <div className="modal-header">
          <div className="modal-title">
            <Notifications className="title-icon" />
            <h3>Notifications</h3>
            <span className="notification-count">{notifications.length}</span>
          </div>
          <button className="close-button" onClick={onClose}>
            <Close />
          </button>
        </div>

        <div className="modal-content">
          {notifications.length === 0 ? (
            <div className="empty-state">
              <MarkEmailRead className="empty-icon" />
              <p>No notifications yet</p>
              <span>You're all caught up!</span>
            </div>
          ) : (
            <div className="notifications-list">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`notification-item ${notification.unread ? "unread" : ""}`}
                >
                  <div className="notification-icon-container">
                    {getNotificationIcon(notification.type)}
                  </div>
                  <div className="notification-content">
                    <div className="notification-message">
                      {notification.message}
                    </div>
                    <div className="notification-time">
                      {formatTime(notification.time)}
                    </div>
                  </div>
                  {notification.unread && (
                    <div className="unread-dot" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {notifications.length > 0 && (
          <div className="modal-footer">
            <button className="mark-all-read">
              Mark all as read
            </button>
            <button className="view-all">
              View all notifications
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default NotificationModal;