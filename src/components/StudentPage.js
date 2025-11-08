import React, { useEffect, useState } from "react";
import AchievementList from "./AchievementList";
import { Container } from "react-bootstrap";
import getGreeting from "../utils/getGreeting";
import "./PageFade.css";

export default function StudentPage({ username }) {
  const greeting = getGreeting();
  const [achievements, setAchievements] = useState([]);

  // Load only this student's achievements
  useEffect(() => {
    if (username) {
      const stored = JSON.parse(localStorage.getItem(username)) || [];
      setAchievements(stored);
    }
  }, [username]);

  return (
    <Container className="page-fade" style={{ marginTop: "30px" }}>
      <h2 className="text-center mb-3">
        👋 {greeting}, {username || "Student"}!
      </h2>
      <p className="text-center text-muted">
        Here are your latest extracurricular achievements 🎯
      </p>

      {achievements.length > 0 ? (
        <AchievementList achievements={achievements} />
      ) : (
        <p className="text-center text-secondary">
          No achievements found for <strong>{username}</strong>. 🎓
        </p>
      )}
    </Container>
  );
}
