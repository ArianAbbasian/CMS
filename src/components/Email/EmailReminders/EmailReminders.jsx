import React, { useState } from "react";
import { 
  AccessTime,
  Delete,
  Edit,
  Notifications,
  Add,
  CheckCircle,
} from "@mui/icons-material";
import "./EmailReminders.css";

const EmailReminders = () => {
  const [reminders, setReminders] = useState([
    {
      id: 1,
      emailId: 101,
      title: "Follow up on client email",
      date: "2025-06-20",
      time: "14:30",
      completed: false,
      notification: true
    },
    {
      id: 2,
      emailId: 102,
      title: "Send project update",
      date: "2025-06-18",
      time: "09:00",
      completed: true,
      notification: false
    }
  ]);

  const [newReminder, setNewReminder] = useState({
    title: "",
    date: "",
    time: "",
    notification: true
  });

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const handleAddReminder = () => {
    if (newReminder.title && newReminder.date && newReminder.time) {
      setReminders([...reminders, {
        id: Date.now(),
        ...newReminder,
        completed: false
      }]);
      setNewReminder({
        title: "",
        date: "",
        time: "",
        notification: true
      });
      setShowForm(false);
    }
  };

  const handleEditReminder = (id) => {
    const reminderToEdit = reminders.find(r => r.id === id);
    setNewReminder({
      title: reminderToEdit.title,
      date: reminderToEdit.date,
      time: reminderToEdit.time,
      notification: reminderToEdit.notification
    });
    setEditingId(id);
    setShowForm(true);
  };

  const handleUpdateReminder = () => {
    setReminders(reminders.map(r => 
      r.id === editingId ? { ...r, ...newReminder } : r
    ));
    setEditingId(null);
    setShowForm(false);
    setNewReminder({
      title: "",
      date: "",
      time: "",
      notification: true
    });
  };

  const toggleComplete = (id) => {
    setReminders(reminders.map(r => 
      r.id === id ? { ...r, completed: !r.completed } : r
    ));
  };

  const deleteReminder = (id) => {
    setReminders(reminders.filter(r => r.id !== id));
  };

  return (
    <div className="reminders-container">
      <div className="reminders-header">
        <div className="header-title">
          <Notifications className="header-icon" />
          <h3>Email Reminders</h3>
        </div>
        <button 
          className="add-button"
          onClick={() => setShowForm(!showForm)}
        >
          <Add />
        </button>
      </div>

      {showForm && (
        <div className="reminder-form">
          <input
            type="text"
            placeholder="Reminder title"
            value={newReminder.title}
            onChange={(e) => setNewReminder({...newReminder, title: e.target.value})}
          />
          <div className="form-row">
            <input
              type="date"
              value={newReminder.date}
              onChange={(e) => setNewReminder({...newReminder, date: e.target.value})}
            />
            <input
              type="time"
              value={newReminder.time}
              onChange={(e) => setNewReminder({...newReminder, time: e.target.value})}
            />
          </div>
          <div className="form-actions">
            <label className="notification-switch">
              <input
                type="checkbox"
                checked={newReminder.notification}
                onChange={(e) => setNewReminder({...newReminder, notification: e.target.checked})}
              />
              <span>Notification</span>
            </label>
            {editingId ? (
              <button className="update-button" onClick={handleUpdateReminder}>
                Update
              </button>
            ) : (
              <button className="add-button-form" onClick={handleAddReminder}>
                Add Reminder
              </button>
            )}
          </div>
        </div>
      )}

      <div className="reminders-list">
        {reminders.map((reminder) => (
          <div 
            key={reminder.id} 
            className={`reminder-item ${reminder.completed ? "completed" : ""}`}
          >
            <div className="reminder-main">
              <button 
                className="complete-button"
                onClick={() => toggleComplete(reminder.id)}
              >
                {reminder.completed ? <CheckCircle /> : <div className="circle" />}
              </button>
              <div className="reminder-content">
                <div className="reminder-title">{reminder.title}</div>
                <div className="reminder-time">
                  <AccessTime className="time-icon" />
                  {reminder.date} at {reminder.time}
                  {reminder.notification && <span className="notification-badge">Alert</span>}
                </div>
              </div>
            </div>
            <div className="reminder-actions">
              <button 
                className="edit-button"
                onClick={() => handleEditReminder(reminder.id)}
              >
                <Edit />
              </button>
              <button 
                className="delete-button"
                onClick={() => deleteReminder(reminder.id)}
              >
                <Delete />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailReminders;