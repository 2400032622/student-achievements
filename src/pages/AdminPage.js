import React, { useState } from 'react';
import AchievementList from '../components/AchievementList';

const AdminPage = ({ achievements, setAchievements }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddAchievement = () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('Please fill in both fields');
      return;
    }

    const newAchievement = {
      id: Date.now(),
      title,
      description,
    };

    setAchievements([...achievements, newAchievement]);
    setTitle('');
    setDescription('');
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto' }}>
      <h2>Admin: Add Achievements</h2>

      <input
        type="text"
        placeholder="Achievement Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
      />

      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        style={{ width: '100%', padding: '8px', marginBottom: '10px', height: '100px' }}
      />

      <button onClick={handleAddAchievement} style={{ padding: '10px 20px' }}>
        Add Achievement
      </button>

      <h3 style={{ marginTop: '30px' }}>All Achievements</h3>
      <AchievementList achievements={achievements} />
    </div>
  );
};

export default AdminPage;
