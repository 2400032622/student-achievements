import React, { useState } from "react";
import Login from "./Login";
import AdminPage from "./components/AdminPage";
import StudentPage from "./components/StudentPage";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [user, setUser] = useState(null);

  const [achievements, setAchievements] = useState([
    { title: "Hackathon Winner", description: "Won college coding hackathon" },
    { title: "Sports Medal", description: "Gold medal in football" }
  ]);

  const handleLogin = (role, username) => {
    setUser({ role, username });
  };

  const handleLogout = () => setUser(null);

  return (
    <Router>
      {user && <Navigation user={user} logout={handleLogout} />}

      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to={user.role === "admin" ? "/admin" : "/student"} />
            ) : (
              <Login onLogin={handleLogin} />
            )
          }
        />

        <Route
          path="/admin"
          element={
            user?.role === "admin" ? (
              <AdminPage achievements={achievements} setAchievements={setAchievements} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/student"
          element={
            user?.role === "student" ? (
              <StudentPage achievements={achievements} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
