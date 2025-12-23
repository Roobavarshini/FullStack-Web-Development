import React, { useState } from "react";

function ProfileEditingSystem() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let formErrors = {};
    let valid = true;

    if (!name.trim()) {
      formErrors.name = "Name is required.";
      valid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formErrors.email = "Enter a valid email address.";
      valid = false;
    }

    if (!age || isNaN(age) || age <= 0) {
      formErrors.age = "Enter a valid age.";
      valid = false;
    }

    setErrors(formErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitted(true);
      alert("✅ Profile Updated Successfully!");
    }
  };

  return (
    <div className="profile-container">
      <h2>👤 User Profile Editing</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="text"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <div className="error">{errors.age}</div>}

        <button type="submit">Save Profile</button>
      </form>

      {submitted && (
        <div className="output">
          <h3>📄 Updated Profile</h3>
          <p><b>Name:</b> {name}</p>
          <p><b>Email:</b> {email}</p>
          <p><b>Age:</b> {age}</p>
        </div>
      )}

      {/* Internal CSS */}
      <style>{`
        .profile-container {
          width: 420px;
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
          background: #009688;
          color: white;
          border: none;
          border-radius: 6px;
          cursor: pointer;
        }

        button:hover {
          background: #00796b;
        }

        .error {
          color: red;
          font-size: 14px;
          text-align: left;
          margin-bottom: 5px;
        }

        .output {
          margin-top: 20px;
          padding: 15px;
          background: #e0f2f1;
          border-radius: 8px;
          text-align: left;
        }
      `}</style>
    </div>
  );
}

export default ProfileEditingSystem;
