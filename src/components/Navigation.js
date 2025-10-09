import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav style={{ marginBottom: '20px' }}>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/student">Student</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
