import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import "./Navigation.css";

export default function Navigation() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="brand-text">
          🎓 Student Achievements Portal
        </Navbar.Brand>

        {/* Hamburger */}
        <Navbar.Toggle aria-controls="main-nav" className="hamburger" />

        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto nav-links">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
          </Nav>

          <Form.Check
            type="switch"
            id="dark-mode-toggle"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            label={darkMode ? "🌙 Dark" : "🌞 Light"}
            className="theme-switch"
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
