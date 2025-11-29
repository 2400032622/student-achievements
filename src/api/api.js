import axios from "axios";

const API = axios.create({
  baseURL: "https://student-achievements-final-backend.onrender.com",
});

// Add student achievement
export const addAchievementAPI = (data) => API.post("/achievements", data);

// Get student achievements
export const getAchievementsAPI = (username) =>
  API.get(`/achievements/${username}`);

// Login (same route for both)
export const loginAPI = (data) => API.post("/login", data);

export default API;
