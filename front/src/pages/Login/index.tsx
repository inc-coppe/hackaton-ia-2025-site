import React, { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";
import {
  LoginContainer,
  LoginCard,
  Title,
  Subtitle,
  ErrorMessage,
  GoogleButtonWrapper,
  Logo,
} from "./style";
import LogoHackaton from "../../assets/Logo.png";

function Login() {
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSuccess = async (credentialResponse: any) => {
    try {
      if (!credentialResponse?.credential) {
        console.error("No credential received from Google");
        setError("No credential received from Google");
        return;
      }

      const response = await fetch("http://localhost:8000/api/google/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_token: credentialResponse.credential }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        window.location.href = "/complete-profile";
      } else {
        console.error("Authentication error:", data.detail);
        setError(data.detail || "Error during authentication");
      }
    } catch (error) {
      console.error("Login request error:", error);
      setError("Network error during login");
    }
  };

  const handleGoogleFailure = (error: any) => {
    console.error("Google login failure:", error);
    setError("Failed to login with Google");
  };

  return (
    <LoginContainer>
      <LoginCard>
        <Logo src={LogoHackaton} alt="Hackathon IA 2025" />
        <Title>Bem vindo!</Title>
        <Subtitle>
          Faça Login para continuar navegando pelo site, após preencher o
          formulário e entrar no Discord{" "}
        </Subtitle>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <GoogleButtonWrapper>
          <GoogleLogin
            onSuccess={handleGoogleSuccess}
            onError={handleGoogleFailure}
            theme="filled_blue"
            size="large"
            shape="rectangular"
            locale="en"
          />
        </GoogleButtonWrapper>
      </LoginCard>
    </LoginContainer>
  );
}

export default Login;
