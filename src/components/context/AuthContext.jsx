import { createContext, useState, useEffect } from "react";
import API from "../../services/api";
import { useNavigate } from "react-router-dom";
import {jwtDecode} from "jwt-decode";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      const decoded = jwtDecode(JSON.parse(storedUser).jwt);
      if (decoded?.authorities === "ROLE_ADMIN") {
        setIsAdmin(true);
      }
    }
    setLoading(false);
  }, []);

  // Login function
  const login = async (credentials) => {
    try {
      const { data } = await API.post("/auth/login", credentials);
      localStorage.setItem("user", JSON.stringify(data)); // Store user data
      setUser(data);
      const decoded = jwtDecode(user.jwt);
      if (decoded?.authorities === "ROLE_ADMIN") {
        setIsAdmin(true);
      }
      return true;
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
      return false;
    }
  };

  // Register function
  const register = async (credentials) => {
    try {
      const { data } = await API.post("/auth/sign-up", credentials);
      localStorage.setItem("user", JSON.stringify(data)); // Store user data
      setUser(data);
      const decoded = jwtDecode(user.jwt);
      if (decoded?.authorities === "ROLE_ADMIN") {
        setIsAdmin(true);
      }
      return {success: true, error: null};
    } catch (error) {
      console.error("Registration failed:", error.response?.data || error.message);
      return {success: false, error: Object.values(error.response.data).join(", ") || error.message};
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout, loading, isAdmin }}>
      {children}
    </AuthContext.Provider>
  );
};
