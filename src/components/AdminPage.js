import React, { useState } from "react";

function AdminPage({ achievements, setAchievements }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const addAchievement = () => {
    if (title && description) {
      setAchievements([...achievements, { title, description }]);
      setTitle("");
      setDescription("");
    }
  };

  return (
    <div className="dashboard">
      <h2>Admin Dashboard</h2>

      <input placeholder="Achievement Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <button onClick={addAchievement}>Add Achievement</button>

      <h3>Achievements</h3>

      {achievements.map((a, i) => (
        <div className="achievement-card" key={i}>
          <div className="achievement-title">{a.title}</div>
          <div>{a.description}</div>
        </div>
      ))}
    </div>
  );
}

export default AdminPage;
