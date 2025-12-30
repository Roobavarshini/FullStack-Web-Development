import React, { useState } from "react";

function RoleSelection() {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!username || !role) {
      alert("Please enter username and select a role!");
      return;
    }

    if (role === "Admin") {
      setMessage("🔐 Welcome Admin! Redirecting to Admin Dashboard...");
    } else if (role === "Student") {
      setMessage("🎓 Welcome Student! Redirecting to Student Dashboard...");
    } else if (role === "Instructor") {
      setMessage("📘 Welcome Instructor! Redirecting to Instructor Dashboard...");
    }
  };

  return (
    <div className="role-container">
      <h2>🔑 Role-Based Login</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option>Admin</option>
          <option>Student</option>
          <option>Instructor</option>
        </select>

        <button type="submit">Login</button>
      </form>

      {message && (
        <div className="message">
          <p>{message}</p>
        </div>
      )}

      {/* Internal CSS */}
      <style>{`
        .role-container {
          width: 400px;
          margin: 50px auto;
          padding: 25px;
          text-align: center;
          background: #f5f7fa;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        input, select {
          width: 100%;
          padding: 10px;
          margin: 8px 0;
          border-radius: 6px;
          border: 1px solid #aaa;
        }

        button {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          font-size: 16px;
          background: #3f51b5;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #303f9f;
        }

        .message {
          margin-top: 20px;
          padding: 15px;
          background: #e8eaf6;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}

export default RoleSelection;
