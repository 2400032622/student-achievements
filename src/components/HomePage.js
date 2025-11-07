import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-container">
      <h1>🎓 Student Achievements Portal</h1>
      <p>Track and manage all student achievements in one place.</p>
      <div className="home-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/about" className="btn">About</Link>
      </div>
    </div>
  );
}
