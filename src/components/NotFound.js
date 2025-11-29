import React from "react";
import { Container } from "react-bootstrap";

export default function NotFound() {
  return (
    <Container style={{ textAlign: "center", marginTop: "70px" }}>
      <h1 style={{ fontSize: "90px", color: "#ff4757" }}>404</h1>
      <h3>Oops! Page Not Found</h3>
      <p className="text-muted">The page you are looking for doesn’t exist.</p>
    </Container>
  );
}
