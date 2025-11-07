import Dashboard from "./components/Dashboard";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import AdminPage from "./components/AdminPage";
import StudentPage from "./components/StudentPage";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./Login";
import HomePage from "./components/HomePage";

function App() {
  const [user, setUser] = useState(null);
  const [achievements, setAchievements] = useState([
    { title: "Hackathon Winner", description: "Won college coding hackathon" },
    { title: "Sports Medal", description: "Gold medal in football" },
  ]);

  const handleLogin = (role, username) => {
    setUser({ role, username });
  };

  const handleLogout = () => setUser(null);

  return (
    <Router>
      <Navigation />
      {user && (
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <button
            onClick={handleLogout}
            style={{
              margin: "10px",
              padding: "8px 16px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      )}

      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Login route */}
        <Route
          path="/login"
          element={
            user ? (
              <Navigate to={user.role === "admin" ? "/admin" : "/student"} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />
        <Route
  path="/dashboard"
  element={
    user ? (
      <Dashboard achievements={achievements} />
    ) : (
      <Navigate to="/login" />
    )
  }
/>

        {/* Role-based routes */}
        <Route
          path="/admin"
          element={
            user?.role === "admin" ? (
              <AdminPage achievements={achievements} setAchievements={setAchievements} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/student"
          element={
            user?.role === "student" ? (
              <StudentPage username={user.username} achievements={achievements} />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
