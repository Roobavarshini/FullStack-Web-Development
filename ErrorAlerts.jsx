import React, { useState } from "react";

function ErrorAlerts() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Hardcoded credentials for simulation
  const validUser = "admin";
  const validPass = "12345";

  const handleLogin = (e) => {
    e.preventDefault();

    // Error checks
    if (!username || !password) {
      alert("❌ Error: All fields are required!");
      return;
    }

    if (username !== validUser || password !== validPass) {
      alert("❌ Invalid Username or Password!");
      return;
    }

    alert("✅ Login Successful! Welcome " + username);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="auth-container">
      <h2>🔐 Basic Authentication System</h2>

      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Login</button>
      </form>

      {/* Internal CSS */}
      <style>{`
        .auth-container {
          width: 380px;
          margin: 50px auto;
          padding: 25px;
          text-align: center;
          background: #f5f7fa;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        }

        input {
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
          background: #e53935;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #c62828;
        }
      `}</style>
    </div>
  );
}

export default ErrorAlerts;
