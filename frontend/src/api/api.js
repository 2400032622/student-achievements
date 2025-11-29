import axios from "axios";

const API = axios.create({
 baseURL: "https://student-achievements-final-backend.onrender.com",
});


// Add student achievement
export const addAchievementAPI = (data) => API.post("/achievements", data);

// Get all achievements of a student
export const getAchievementsAPI = (username) => API.get(`/achievements/${username}`);

// Student login
export const studentLoginAPI = (data) => API.post("/login", data);

// Admin login
export const adminLoginAPI = (data) => API.post("/login", data);

export default API;
