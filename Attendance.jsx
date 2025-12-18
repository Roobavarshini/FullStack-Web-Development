import React, { useState } from "react";

function Attendance() {
  const [students, setStudents] = useState([
    { name: "Arun", present: false },
    { name: "Divya", present: false },
    { name: "Karthik", present: false },
    { name: "Meena", present: false },
  ]);

  const toggleAttendance = (index) => {
    const updatedStudents = [...students];
    updatedStudents[index].present = !updatedStudents[index].present;
    setStudents(updatedStudents);
  };

  return (
    <div className="attendance-container">
      <h2>📋 Attendance Tracker</h2>

      <ul>
        {students.map((student, index) => (
          <li key={index}>
            <span>
              {student.name} —{" "}
              <b style={{ color: student.present ? "green" : "red" }}>
                {student.present ? "Present" : "Absent"}
              </b>
            </span>

            <button onClick={() => toggleAttendance(index)}>
              Mark {student.present ? "Absent" : "Present"}
            </button>
          </li>
        ))}
      </ul>

      {/* Internal CSS */}
      <style>{`
        .attendance-container {
          width: 420px;
          margin: 40px auto;
          padding: 20px;
          background: #f5f7fa;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          text-align: center;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 10px 0;
          padding: 10px;
          background: white;
          border-radius: 6px;
        }

        button {
          padding: 6px 10px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          background: #4a4aff;
          color: white;
        }

        button:hover {
          background: #2c2cff;
        }
      `}</style>
    </div>
  );
}

export default Attendance;
