import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

// Automatically attach JWT token to requests if available
API.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers.Authorization = `Bearer ${user.token}`;
  }
  return config;
});

export default API;
