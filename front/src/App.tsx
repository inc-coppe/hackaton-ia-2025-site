import React, { useState, useEffect, useCallback } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
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

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isProfileComplete, setIsProfileComplete] = useState(false);
  const location = useLocation();
  const token = localStorage.getItem("access_token");

  const checkProfileStatus = useCallback(async () => {
    console.log("ProtectedRoute: checkProfileStatus called. Token:", !!token);
    if (!token) {
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/profile/check/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        const data = await response.json();
        console.log("ProtectedRoute: /api/profile/check/ response:", data);
        setIsProfileComplete(data.form_completed);
      } else {
        console.error(
          "ProtectedRoute: Failed to fetch profile status",
          response.status,
        );
        setIsProfileComplete(false);
      }
    } catch (error) {
      console.error(
        "ProtectedRoute: Network error checking profile status",
        error,
      );
      setIsProfileComplete(false);
    } finally {
      setIsLoading(false);
    }
  }, [token]);

  useEffect(() => {
    console.log("ProtectedRoute: useEffect triggered.");
    checkProfileStatus();
  }, [checkProfileStatus]);

  const handleProfileComplete = useCallback(() => {
    console.log(
      "ProtectedRoute: handleProfileComplete triggered by child form. Setting isProfileComplete to TRUE.",
    );
    setIsProfileComplete(true);
  }, []);

  console.log(
    `ProtectedRoute: Render cycle: isLoading=${isLoading}, isProfileComplete=${isProfileComplete}, pathname=${location.pathname}`,
  );

  if (isLoading) {
    console.log("ProtectedRoute: Rendering loading state.");
    return <p>Carregando...</p>;
  }

  if (!token) {
    console.log("ProtectedRoute: No token found, redirecting to /login.");
    return <Navigate to="/login" replace />;
  }

  if (!isProfileComplete) {
    console.log("ProtectedRoute: Profile is NOT complete.");
    if (location.pathname !== "/complete-profile") {
      console.log(
        "ProtectedRoute: Not on /complete-profile, redirecting to /complete-profile.",
      );
      return <Navigate to="/complete-profile" replace />;
    }
    console.log(
      "ProtectedRoute: On /complete-profile, rendering UserRegistrationForm.",
    );
    return React.cloneElement(children, {
      onProfileComplete: handleProfileComplete,
    });
  } else {
    console.log("ProtectedRoute: Profile IS complete.");
    if (location.pathname === "/complete-profile") {
      console.log(
        "ProtectedRoute: On /complete-profile with completed profile, redirecting to /profile.",
      );
      return <Navigate to="/profile" replace />;
    }
    console.log(
      "ProtectedRoute: Profile complete, rendering children normally.",
    );
    return children;
  }
};

const PublicOnlyRoute = ({ children }: { children: JSX.Element }) => {
  const token = localStorage.getItem("access_token");
  if (token) {
    console.log(
      "PublicOnlyRoute: Token found, redirecting to root to re-evaluate protected routes.",
    );
    return <Navigate to="/" replace />; // Redirect to root so ProtectedRoute can handle
  }
  return children;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Use PublicOnlyRoute for login/register to prevent logged-in users from seeing them */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Login />} />
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
          path="/profile/:userId"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/regulamento" element={<Regulamento />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/patrocinador" element={<Patrocinador />} />
        <Route path="/materiais" element={<Materiais />} />
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
