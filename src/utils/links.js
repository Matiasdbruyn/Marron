import { CONFIG } from "../data/productos.js";

export const igUrl = `https://www.instagram.com/${CONFIG.instagram}/`;

export const waUrl = (msg = "¡Hola Marrón! Quería hacerles una consulta 😊") =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;

// Ruta a un archivo de la carpeta /public (funciona también en GitHub Pages)
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`;
