import React from "react";
import { Link, Outlet } from "react-router-dom";

function MultiPageStudentDashboard() {
  return (
    <div className="dashboard-container">
      <h2>🎓 Student Dashboard</h2>

      {/* Navigation */}
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/courses">Courses</Link>
      </nav>

      {/* This is where pages will load */}
      <div className="content">
        <Outlet />
      </div>

      {/* Internal CSS */}
      <style>{`
        .dashboard-container {
          max-width: 700px;
          margin: 40px auto;
          padding: 25px;
          background: #f5f7fa;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        .nav {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 20px;
        }

        .nav a {
          text-decoration: none;
          font-weight: bold;
          color: #3f51b5;
        }

        .nav a:hover {
          text-decoration: underline;
        }

        .content {
          text-align: left;
          background: #fff;
          padding: 15px;
          border-radius: 8px;
        }
      `}</style>
    </div>
  );
}

/* Pages */
export function Home() {
  return <p>🏠 Welcome to the Student Dashboard</p>;
}

export function Profile() {
  return (
    <>
      <p><b>Name:</b> Arun</p>
      <p><b>Department:</b> Computer Science</p>
      <p><b>Year:</b> 3rd Year</p>
    </>
  );
}

export function Courses() {
  return (
    <ul>
      <li>React Basics</li>
      <li>Web Development</li>
      <li>Data Structures</li>
    </ul>
  );
}

export default MultiPageStudentDashboard;
