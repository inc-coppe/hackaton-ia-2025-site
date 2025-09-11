import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { GoogleOAuthProvider } from "@react-oauth/google";

const cleanTrackingParams = () => {
  const url = new URL(window.location.href);
  ['_gl', '_ga', '_ga_PQWN9WZK16'].forEach(param => url.searchParams.delete(param));
  window.history.replaceState({}, document.title, url.pathname + url.search);
};

cleanTrackingParams();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="1087318908065-20g0p6u8iekaahup1qohlrpcantakf6e.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
