import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";

import "antd/dist/reset.css";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import UserRegistrationForm from "./pages/UserRegistrationForm";
import Cronograma from "./pages/Cronograma";
import Patrocinador from "./pages/Patrocinador";
import Regulamento from "./pages/Regulamento";
import Desafios from "./pages/Desafios";
import Materiais from "./pages/Materiais";

function Logout() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  return <Navigate to="/" />;
}

function RegisterAndLogout() {
  localStorage.clear();
  return <Register />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/cronograma" element={<Cronograma />} />
        <Route path="/regulamento" element={<Regulamento />} />
        <Route path="/desafios" element={<Desafios />} />
        <Route path="/patrocinador" element={<Patrocinador />} />
        <Route path="/materiais" element={<Materiais />} />

        <Route path="profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<RegisterAndLogout />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/complete-profile" element={<UserRegistrationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
