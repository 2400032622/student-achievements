import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form } from "react-bootstrap";

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme to document
  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Navbar
      bg={darkMode ? "dark" : "primary"}
      variant={darkMode ? "dark" : "light"}
      expand="lg"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="fw-bold text-light">
          🎓 Student Achievements Portal
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>

          <Form.Check
            type="switch"
            id="dark-mode-toggle"
            label={darkMode ? "🌙 Dark" : "☀️ Light"}
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="ms-3 text-light"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
