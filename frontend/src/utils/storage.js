// src/utils/storage.js
// Simple and clean localStorage handler (student-friendly)

const STUDENTS_KEY = "students";
const INIT_FLAG = "sa_initialized";

export function getStudents() {
  return JSON.parse(localStorage.getItem(STUDENTS_KEY)) || [];
}

export function saveStudents(list) {
  localStorage.setItem(STUDENTS_KEY, JSON.stringify(list));
}

export function addStudent(name) {
  const list = getStudents();
  if (list.includes(name)) return false;

  const updated = [...list, name];
  saveStudents(updated);

  return true;
}

export function removeStudent(name) {
  const list = getStudents().filter((s) => s !== name);
  saveStudents(list);

  localStorage.removeItem(name); // remove achievements
}

export function getAchievements(user) {
  return JSON.parse(localStorage.getItem(user)) || [];
}

export function saveAchievements(user, arr) {
  localStorage.setItem(user, JSON.stringify(arr));
}

export function addAchievement(user, obj) {
  const arr = getAchievements(user);
  arr.push(obj);
  saveAchievements(user, arr);
}

export function deleteAchievement(user, index) {
  const arr = getAchievements(user);
  arr.splice(index, 1);
  saveAchievements(user, arr);
}

export function editAchievement(user, index, updated) {
  const arr = getAchievements(user);
  arr[index] = updated;
  saveAchievements(user, arr);
}

export function isInitialized() {
  return localStorage.getItem(INIT_FLAG) === "true";
}

export function setInitialized() {
  localStorage.setItem(INIT_FLAG, "true");
}
