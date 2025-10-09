import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminPage from './pages/AdminPage';
import StudentPage from './pages/StudentPage';
import './App.css';  // Import the CSS file

function App() {
  const [achievements, setAchievements] = useState([]);

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/admin">Admin</Link></li>
          <li><Link to="/student">Student</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route
          path="/admin"
          element={<AdminPage achievements={achievements} setAchievements={setAchievements} />}
        />
        <Route
          path="/student"
          element={<StudentPage achievements={achievements} />}
        />
        <Route path="/" element={<div><h2>Welcome! Select a page.</h2></div>} />
      </Routes>
    </Router>
  );
}

export default App;
