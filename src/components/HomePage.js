import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <div className="home-card">
        <h1 className="home-title">🎓 Student Achievements Portal</h1>
        <p className="home-subtitle">Track and manage student achievements in one place.</p>

        <Link to="/login" className="home-btn">Login</Link>
        <Link to="/about" className="home-btn">About</Link>
      </div>
    </div>
  );
}
