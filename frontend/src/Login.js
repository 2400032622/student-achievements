import React, { useState } from "react";
import "./Login.css";

export default function Login({ onLogin }) {
  const [role, setRole] = useState("Student");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (role === "Admin" && password === "admin123") {
      onLogin("Admin", username);
    } else if (role === "Student" && password === "student") {
      onLogin("Student", username);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-bg">
      <div className="login-card">
        <h2 className="login-title">Welcome Back 👋</h2>

        <form onSubmit={handleSubmit}>
          <label>Select Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option>Student</option>
            <option>Admin</option>
          </select>

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="btn-login" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
