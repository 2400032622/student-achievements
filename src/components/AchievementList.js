import React from "react";

export default function AchievementList({ achievements }) {
  return (
    <div>
      <h3>All Achievements</h3>
      {achievements.length === 0 ? (
        <p>No achievements to display.</p>
      ) : (
        <ul>
          {achievements.map((a, i) => (
            <li key={i}>
              <strong>{a.title}</strong> - {a.description}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
