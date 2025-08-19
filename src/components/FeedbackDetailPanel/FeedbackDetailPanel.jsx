import React, { useState } from "react";
import "./FeedbackDetailPanel.css";

const FeedbackDetailPanel = ({ 
  feedback, 
  onClose, 
  onStatusChange, 
  onReplySubmit,
  isOpen 
}) => {
  const [replyText, setReplyText] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !feedback) return null;

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    if (!replyText.trim()) return;

    setIsSubmitting(true);
    try {
      await onReplySubmit?.(feedback.id, replyText);
      setReplyText("");
    } catch (error) {
      console.error("Error submitting reply:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusChange = (newStatus) => {
    onStatusChange?.(feedback.id, newStatus);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const renderStars = (rating) => {
    return "⭐".repeat(rating) + "☆".repeat(5 - rating);
  };

  return (
    <div className="detail-panel-overlay" onClick={onClose}>
      <div className="detail-panel" onClick={(e) => e.stopPropagation()}>
        <div className="panel-header">
          <h2>Comment Details</h2>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>

        <div className="panel-content">
          {/* User Info Section */}
          <div className="user-section">
            <img src={feedback.user.avatar} alt={feedback.user.name} className="user-avatar-large" />
            <div className="user-info">
              <h3>{feedback.user.name}</h3>
              <p>{feedback.user.email}</p>
              <span className="user-join-date">
                Joined {new Date(feedback.user.joinDate).toLocaleDateString()}
              </span>
            </div>
          </div>

          {/* Comment Section */}
          <div className="comment-section">
            <h4>Comment</h4>
            <div className="comment-text">{feedback.comment}</div>
            <div className="comment-meta">
              <span className="comment-date">{formatDate(feedback.date)}</span>
              <span className="comment-rating">{renderStars(feedback.rating)}</span>
            </div>
          </div>

          {/* Post Info */}
          <div className="post-section">
            <h4>On Post</h4>
            <a href={feedback.post.url} className="post-link" target="_blank" rel="noopener noreferrer">
              {feedback.post.title}
            </a>
          </div>

          {/* Status Actions */}
          <div className="status-section">
            <h4>Status</h4>
            <div className="status-actions">
              <button
                className={`status-btn ${feedback.status === 'approved' ? 'active' : ''}`}
                onClick={() => handleStatusChange('approved')}
              >
                Approve
              </button>
              <button
                className={`status-btn ${feedback.status === 'pending' ? 'active' : ''}`}
                onClick={() => handleStatusChange('pending')}
              >
                Pending
              </button>
              <button
                className={`status-btn ${feedback.status === 'spam' ? 'active' : ''}`}
                onClick={() => handleStatusChange('spam')}
              >
                Spam
              </button>
              <button
                className={`status-btn ${feedback.status === 'rejected' ? 'active' : ''}`}
                onClick={() => handleStatusChange('rejected')}
              >
                Reject
              </button>
            </div>
          </div>

          {/* Reply Section */}
          <div className="reply-section">
            <h4>Reply</h4>
            <form onSubmit={handleReplySubmit} className="reply-form">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a response to this comment..."
                className="reply-textarea"
                rows="4"
              />
              <button 
                type="submit" 
                className="submit-reply-btn"
                disabled={isSubmitting || !replyText.trim()}
              >
                {isSubmitting ? "Sending..." : "Send Reply"}
              </button>
            </form>
          </div>

          {/* Previous Replies */}
          {feedback.replies && feedback.replies.length > 0 && (
            <div className="replies-section">
              <h4>Previous Replies ({feedback.replies.length})</h4>
              <div className="replies-list">
                {feedback.replies.map((reply, index) => (
                  <div key={index} className="reply-item">
                    <div className="reply-meta">
                      <span className="reply-author">Admin</span>
                      <span className="reply-date">{formatDate(reply.date)}</span>
                    </div>
                    <div className="reply-text">{reply.text}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedbackDetailPanel;