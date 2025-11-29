import axios from "axios";

// 💥 IMPORTANT: Use your deployed backend URL
const API = axios.create({
  baseURL: "https://student-achievements-final-backend.onrender.com",
});

// ---------- LOGIN ----------
export const loginAPI = (data) => API.post("/login", data);

// ---------- ADD ACHIEVEMENT ----------
export const addAchievementAPI = (data) => API.post("/achievements", data);

// ---------- GET ACHIEVEMENTS OF ONE STUDENT ----------
export const getStudentAchievementsAPI = (username) =>
  API.get(`/achievements/${username}`);

export default API;
