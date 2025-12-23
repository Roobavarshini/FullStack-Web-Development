import React, { useState } from "react";

function EventRegistration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");

  const registerEvent = (e) => {
    e.preventDefault();

    if (!name || !email || !event) {
      alert("Please fill all the fields!");
      return;
    }

    // Confirmation alert
    const confirmRegistration = confirm(
      `Confirm your registration:\n\nName: ${name}\nEmail: ${email}\nEvent: ${event}`
    );

    if (confirmRegistration) {
      alert("✅ Event Registered Successfully!");
      setName("");
      setEmail("");
      setEvent("");
    } else {
      alert("❌ Event Registration Cancelled.");
    }
  };

  return (
    <div className="event-container">
      <h2>🎉 Event Registration</h2>

      <form onSubmit={registerEvent}>
        <input
          type="text"
          placeholder="Participant Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <select
          value={event}
          onChange={(e) => setEvent(e.target.value)}
        >
          <option value="">Select Event</option>
          <option>Tech Talk</option>
          <option>Workshop</option>
          <option>Hackathon</option>
        </select>

        <button type="submit">Register</button>
      </form>

      {/* Internal CSS */}
      <style>{`
        .event-container {
          width: 420px;
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
          background: #673ab7;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #512da8;
        }
      `}</style>
    </div>
  );
}

export default EventRegistration;
