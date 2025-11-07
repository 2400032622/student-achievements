import React, { useState } from "react";
import AchievementList from "./AchievementList";
import { Container, Form, Button } from "react-bootstrap";
import getGreeting from "../utils/getGreeting";
import "./PageFade.css";

export default function AdminPage({ achievements, setAchievements }) {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("Academic");
  const greeting = getGreeting();

  const addAchievement = () => {
    if (!title || !desc) return alert("Please fill all fields");
    setAchievements([...achievements, { title, description: desc, category }]);
    setTitle("");
    setDesc("");
    setCategory("Academic");
  };

  return (
    <Container className="page-fade" style={{ marginTop: "30px" }}>
      <h2 className="text-center mb-3">
        👋 {greeting}, Admin!
      </h2>
      <p className="text-center text-muted mb-4">
        Manage and record all student achievements here 🏆
      </p>

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
        <Button onClick={addAchievement}>Add Achievement</Button>
      </div>

      <AchievementList achievements={achievements} />
    </Container>
  );
}
