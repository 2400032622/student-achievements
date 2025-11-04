import React from "react";

function StudentPage({ achievements }) {
  return (
    <div className="dashboard">
      <h2>Student Achievements</h2>

      {achievements.map((a, i) => (
        <div className="achievement-card" key={i}>
          <div className="achievement-title">{a.title}</div>
          <div>{a.description}</div>
        </div>
      ))}
    </div>
  );
}

export default StudentPage;
