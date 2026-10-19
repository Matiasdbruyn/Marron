import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Rutas relativas: así la página funciona en GitHub Pages (usuario.github.io/repo/) o en cualquier hosting
  base: "./",
  server: { port: 5173 },
});
