# Marrón — Página web

Sitio estático (HTML + CSS + JS, sin dependencias). Se puede subir tal cual a Netlify, Vercel, GitHub Pages o cualquier hosting.

## Estructura
- `index.html` — la página.
- `css/styles.css` — estilos (paleta y tipografías al principio del archivo).
- `js/productos.js` — **lo que se edita seguido**: WhatsApp, Instagram, categorías y productos.
- `js/main.js` — interacciones (filtros, ventana de producto, menú).
- Tipografías: Montserrat (títulos) y Noto Sans (texto), cargadas desde Google Fonts.
- `assets/img` — logos y fotos de productos.
- `scripts/serve.js` — servidor local para `npm run dev`.
- `_drive/` — material original del Drive. No se sube a GitHub (está en `.gitignore`).

## Tareas pendientes
1. Poner el número real de WhatsApp en `js/productos.js` → `CONFIG.whatsapp` (formato `549` + característica + número, sin espacios).
2. Sumar fotos de **Riñoneras** y **Neceseres**: copiar las imágenes a `assets/img/productos/` y agregar sus rutas en `fotos: [...]` del producto. Mientras esté vacío se ve el espacio "Foto pendiente".

## Ver la página en local
```bash
npm run dev
```
y abrir http://localhost:5173
