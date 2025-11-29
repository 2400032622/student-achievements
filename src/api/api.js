import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // your backend URL
});

// Add student achievement
export const addAchievementAPI = (data) => API.post("/achievements", data);

// Get all achievements
export const getAchievementsAPI = () => API.get("/achievements");

// Student login
export const studentLoginAPI = (data) => API.post("/login/student", data);

// Admin login
export const adminLoginAPI = (data) => API.post("/login/admin", data);

export default API;
