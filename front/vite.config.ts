import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // permite que o Vite aceite requisições vindas desse host
    allowedHosts: ["www.hackathon-ia.coppe.ufrj.br", "hackathon-ia.coppe.ufrj.br"],
  },
});
