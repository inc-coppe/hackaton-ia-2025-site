import React, { useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import UserRegistrationForm from "./pages/UserRegistrationForm";
import Cronograma from "./pages/Cronograma";
import Patrocinador from "./pages/Patrocinador";
import Regulamento from "./pages/Regulamento";
import Desafios from "./pages/Desafios";
import Materiais from "./pages/Materiais";
import "antd/dist/reset.css";

function Logout() {
  localStorage.clear();
  window.location.href = "/";
  return null;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const location = useLocation();
  const token = localStorage.getItem("access_token");

  useEffect(() => {
    if (!token) {
      setIsLoading(false);
      return;
    }

    const checkStatus = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/profile/check/",
          {
            headers: { Authorization: `Bearer ${token}` },
          },
        );
        if (response.ok) {
          const data = await response.json();
          setIsProfileComplete(data.form_completed);
        } else {
          setIsProfileComplete(false);
        }
      } catch (error) {
        console.error("Failed to check profile status", error);
        setIsProfileComplete(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkStatus();
  }, [token]);

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (!isProfileComplete) {
    if (location.pathname !== "/complete-profile") {
      return <Navigate to="/complete-profile" replace />;
    }
  } else {
    if (location.pathname === "/complete-profile") {
      return <Navigate to="/profile" replace />;
    }
  }

  return children;
};

const PublicOnlyRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    return <Navigate to="/profile" replace />;
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/login"
          element={
            <PublicOnlyRoute>
              <Login />
            </PublicOnlyRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicOnlyRoute>
              <RegisterAndLogout />
            </PublicOnlyRoute>
          }
        />
        <Route path="/logout" element={<Logout />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cronograma"
          element={
            <ProtectedRoute>
              <Cronograma />
            </ProtectedRoute>
          }
        />
        <Route
          path="/regulamento"
          element={
            <ProtectedRoute>
              <Regulamento />
            </ProtectedRoute>
          }
        />
        <Route
          path="/desafios"
          element={
            <ProtectedRoute>
              <Desafios />
            </ProtectedRoute>
          }
        />
        <Route
          path="/patrocinador"
          element={
            <ProtectedRoute>
              <Patrocinador />
            </ProtectedRoute>
          }
        />
        <Route
          path="/materiais"
          element={
            <ProtectedRoute>
              <Materiais />
            </ProtectedRoute>
          }
        />
        <Route
          path="/complete-profile"
          element={
            <ProtectedRoute>
              <UserRegistrationForm />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
