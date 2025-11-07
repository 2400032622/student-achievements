import React from "react";
import AchievementList from "./AchievementList";
import { Container } from "react-bootstrap";
import getGreeting from "../utils/getGreeting";
import "./PageFade.css";

export default function StudentPage({ username, achievements }) {
  const greeting = getGreeting();

  return (
    <Container className="page-fade" style={{ marginTop: "30px" }}>
      <h2 className="text-center mb-3">
        👋 {greeting}, {username || "Student"}!
      </h2>
      <p className="text-center text-muted">
        Here are your latest extracurricular achievements 🎯
      </p>
      <AchievementList achievements={achievements} />
    </Container>
  );
}
