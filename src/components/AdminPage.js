import React, { useState, useEffect } from "react";
import AchievementList from "./AchievementList";
import { Container, Form, Button, Badge } from "react-bootstrap";
import getGreeting from "../utils/getGreeting";
import "./PageFade.css";

export default function AdminPage() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Academic");
  const [selectedUser, setSelectedUser] = useState("");
  const [newStudent, setNewStudent] = useState("");
  const [students, setStudents] = useState([]);
  const [achievements] = useState([]); // ✅ removed unused setAchievements
  const greeting = getGreeting();

  // 🧩 Load existing student list from localStorage
  useEffect(() => {
    const savedStudents = JSON.parse(localStorage.getItem("students")) || [];
    setStudents(savedStudents);
  }, []);

  // 🧠 Add new student
  const addStudent = () => {
    if (!newStudent.trim()) {
      alert("Enter a valid student name!");
      return;
    }
    const updatedStudents = [...students, newStudent];
    setStudents(updatedStudents);
    localStorage.setItem("students", JSON.stringify(updatedStudents));
    alert(`New student '${newStudent}' added ✅`);
    setNewStudent("");
  };

  // 🏅 Add achievement for selected student
  const addAchievement = () => {
    if (!title || !desc || !selectedUser) {
      alert("Please fill all fields and select a student.");
      return;
    }

    const newAchievement = { title, description: desc, category };
    const storedData = JSON.parse(localStorage.getItem(selectedUser)) || [];
    storedData.push(newAchievement);
    localStorage.setItem(selectedUser, JSON.stringify(storedData));

    alert(`Achievement added for ${selectedUser}! 🎉`);
    setTitle("");
    setDesc("");
    setCategory("Academic");
  };

  return (
    <Container className="page-fade" style={{ marginTop: "30px" }}>
      <h2 className="text-center mb-3">👋 {greeting}, Admin!</h2>
      <p className="text-center text-muted mb-4">
        Manage and record all student achievements here 🏆
      </p>

      {/* 🧑‍🎓 Add new student */}
      <div
        className="d-flex justify-content-center mb-4 flex-wrap gap-2"
        style={{ background: "#f9f9f9", padding: "15px", borderRadius: "8px" }}
      >
        <Form.Control
          placeholder="Enter new student username"
          value={newStudent}
          onChange={(e) => setNewStudent(e.target.value)}
          style={{ width: "250px" }}
        />
        <Button variant="success" onClick={addStudent}>
          ➕ Add Student
        </Button>
      </div>

      {/* 🏅 Add achievement section */}
      <div className="d-flex justify-content-center mb-3 flex-wrap gap-2">
        <Form.Control
          placeholder="Achievement Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "200px" }}
        />
        <Form.Control
          placeholder="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          style={{ width: "250px" }}
        />
        <Form.Select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ width: "160px" }}
        >
          <option>Academic</option>
          <option>Sports</option>
          <option>Cultural</option>
          <option>Technical</option>
        </Form.Select>

        {/* 👇 Dynamic Student Selector */}
        <Form.Select
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
          style={{ width: "180px" }}
        >
          <option value="">Select Student</option>
          {students.map((s, i) => (
            <option key={i} value={s}>
              {s}
            </option>
          ))}
        </Form.Select>

        <Button onClick={addAchievement}>Add Achievement</Button>
      </div>

      {/* 🧾 Show all registered students */}
      <div className="text-center mb-4">
        <h5>Registered Students:</h5>
        {students.length === 0 ? (
          <p>No students added yet.</p>
        ) : (
          students.map((s, i) => (
            <Badge key={i} bg="info" className="m-1">
              {s}
            </Badge>
          ))
        )}
      </div>

      {/* Achievements preview (optional global view) */}
      <AchievementList achievements={achievements} />
    </Container>
  );
}
