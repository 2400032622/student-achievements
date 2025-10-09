import React from 'react';

const AchievementList = ({ achievements }) => {
  if (!achievements || achievements.length === 0) {
    return <p>No achievements to display.</p>;
  }

  return (
    <ul>
      {achievements.map((ach) => (
        <li key={ach.id} style={{ marginBottom: '15px' }}>
          <strong>{ach.title}</strong>: {ach.description}
        </li>
      ))}
    </ul>
  );
};

export default AchievementList;
