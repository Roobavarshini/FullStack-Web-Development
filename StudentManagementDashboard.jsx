import React, { useState } from "react";

function StudentManagementDashboard() {
  const [activeTab, setActiveTab] = useState("students");

  const students = [
    { id: 1, name: "Arun", dept: "Computer Science", year: "3rd Year" },
    { id: 2, name: "Divya", dept: "Information Technology", year: "2nd Year" },
    { id: 3, name: "Karthik", dept: "Electronics", year: "4th Year" },
  ];

  return (
    <div className="dashboard-container">
      <h2>🎓 Student Management Dashboard</h2>

      {/* Navigation */}
      <div className="nav">
        <button onClick={() => setActiveTab("students")}>
          Students
        </button>
        <button onClick={() => setActiveTab("about")}>
          About
        </button>
      </div>

      {/* Content */}
      <div className="content">
        {activeTab === "students" && (
          <>
            <h3>📋 Student List</h3>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Year</th>
                </tr>
              </thead>
              <tbody>
                {students.map((s) => (
                  <tr key={s.id}>
                    <td>{s.name}</td>
                    <td>{s.dept}</td>
                    <td>{s.year}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}

        {activeTab === "about" && (
          <>
            <h3>ℹ️ About Dashboard</h3>
            <p>
              This dashboard helps manage and view student details such as
              department and year. It demonstrates navigation and dynamic data
              display using React.
            </p>
          </>
        )}
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
          gap: 10px;
          margin-bottom: 20px;
        }

        .nav button {
          padding: 10px 15px;
          background: #3f51b5;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        .nav button:hover {
          background: #303f9f;
        }

        table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 10px;
        }

        th, td {
          padding: 10px;
          border: 1px solid #ccc;
        }

        th {
          background: #e8eaf6;
        }

        .content {
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default StudentManagementDashboard;
