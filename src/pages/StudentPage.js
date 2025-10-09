import React from 'react';
import AchievementList from '../components/AchievementList';

const StudentPage = ({ achievements }) => {
  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Student Achievements</h2>
      <AchievementList achievements={achievements} />
    </div>
  );
};

export default StudentPage;
