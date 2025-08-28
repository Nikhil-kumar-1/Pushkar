// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const isAuthenticated = localStorage.getItem("isAuthenticated");

  // Agar token ya isAuthenticated missing hai to login par bhejo
  if (!token || isAuthenticated !== "true") {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;