import React from "react";
import "./StudentPage.css";

export default function StudentPage({ username, achievements }) {

  // Filter only the logged-in student’s achievements
  const userAchievements = achievements.filter(
    (a) => a.student.toLowerCase() === username.toLowerCase()
  );

  return (
    <div className="student-container">

      <h2 className="student-title">
        Welcome, {username} 🎓
      </h2>
      <p className="student-subtitle">Your Achievements</p>

      <div className="achievements-grid">
        {userAchievements.length > 0 ? (
          userAchievements.map((a, i) => (
            <div key={i} className="achievement-card">
              <h3 className="achievement-title">{a.title}</h3>
              <p className="achievement-category">{a.category}</p>
              <p className="achievement-desc">{a.description}</p>
            </div>
          ))
        ) : (
          <p className="no-data">No achievements found 😢</p>
        )}
      </div>

    </div>
  );
}
