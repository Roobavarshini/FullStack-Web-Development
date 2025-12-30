import React, { useState } from "react";

function DashboardNotificationSystem() {
  const [notifications, setNotifications] = useState([]);

  const addNotification = () => {
    const newNotification = `🔔 Notification ${notifications.length + 1}`;
    setNotifications([...notifications, newNotification]);
  };

  const clearNotifications = () => {
    if (notifications.length === 0) {
      alert("No notifications to clear.");
      return;
    }
    setNotifications([]);
    alert("All notifications cleared!");
  };

  return (
    <div className="dashboard-container">
      <h2>📊 Dashboard Notification System</h2>

      <div className="controls">
        <button onClick={addNotification}>Add Notification</button>
        <button onClick={clearNotifications}>Clear All</button>
      </div>

      <div className="notification-list">
        <h3>🔔 Notifications</h3>

        {notifications.length === 0 ? (
          <p>No notifications available</p>
        ) : (
          <ul>
            {notifications.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Internal CSS */}
      <style>{`
        .dashboard-container {
          width: 420px;
          margin: 50px auto;
          padding: 25px;
          text-align: center;
          background: #f5f7fa;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        .controls {
          display: flex;
          justify-content: space-between;
          gap: 10px;
          margin-bottom: 15px;
        }

        button {
          flex: 1;
          padding: 10px;
          font-size: 14px;
          background: #673ab7;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #512da8;
        }

        .notification-list {
          margin-top: 20px;
          padding: 15px;
          background: #ede7f6;
          border-radius: 8px;
          text-align: left;
        }

        ul {
          padding-left: 18px;
        }

        li {
          margin-bottom: 6px;
        }
      `}</style>
    </div>
  );
}

export default DashboardNotificationSystem;
