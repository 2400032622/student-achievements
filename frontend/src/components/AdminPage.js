import React, { useState } from "react";
import "./AdminPage.css";

export default function AdminPage({ achievements, setAchievements }) {
  const [student, setStudent] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const addAchievement = () => {
    if (!student || !title || !description || !category) {
      alert("Please fill all fields");
      return;
    }

    setAchievements([
      ...achievements,
      { student, title, description, category },
    ]);

    setStudent("");
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <div className="admin-container">
      <h1 className="admin-title">
        Admin Dashboard <span>⚙️</span>
      </h1>
      <p className="admin-subtitle">Manage student achievements</p>

      <label className="admin-label">Student Name</label>
      <input
        className="admin-input"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
        placeholder="Enter student name"
      />

      <label className="admin-label">Achievement Title</label>
      <input
        className="admin-input"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter title"
      />

      <label className="admin-label">Description</label>
      <input
        className="admin-input"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />

      <label className="admin-label">Category</label>
      <input
        className="admin-input"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Sports / Academics / Technical"
      />

      <button className="add-btn" onClick={addAchievement}>
        Add Achievement
      </button>

      <h2 className="table-title">All Achievements</h2>

      <table className="achievements-table">
        <thead>
          <tr>
            <th>Student</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {achievements.map((a, index) => (
            <tr key={index}>
              <td>{a.student}</td>
              <td>{a.title}</td>
              <td>{a.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
