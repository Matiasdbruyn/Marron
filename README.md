# Marrón — Página web

Página informativa de **Marrón** (marroquinería textil): muestra los productos y lleva a Instagram y WhatsApp. No tiene carrito de compras.

Hecha con **React + Vite**. Adaptada a computadora, tablet y celular.

## Cómo levantarla en tu compu

Necesitás [Node.js](https://nodejs.org/) instalado.

```bash
npm install
```

```bash
npm run dev
```

y abrir http://localhost:5173 (el puerto se configura en `vite.config.js`). La página se actualiza sola cuando guardás un cambio.

Otros comandos:

| Comando | Qué hace |
| --- | --- |
| `npm run build` | Genera la versión final en la carpeta `dist/` (la que se publica). |
| `npm run preview` | Muestra en local la versión de `dist/` para revisarla antes de publicar. |

## Estructura

```
index.html                  → HTML base (título, descripción, tipografías)
public/img/                 → logos y fotos de productos
src/
  main.jsx                  → punto de entrada
  App.jsx                   → arma la página con todas las secciones en orden
  data/productos.js         → ⭐ LO QUE SE EDITA SEGUIDO: WhatsApp, Instagram, categorías y productos
  styles/global.css         → paleta de colores, tipografías, botones y estilos comunes
  utils/links.js            → links de WhatsApp / Instagram y rutas de imágenes
  hooks/useReveal.js        → animación suave al aparecer los elementos
  components/
    PhotoPlaceholder/       → espacio "Foto pendiente"
    WhatsAppFloat/          → botón flotante de WhatsApp
  sections/                 → una carpeta por sección (JSX + CSS)
    Header/                 → logo + menú
    Hero/                   → portada
    Ribbon/                 → cinta animada
    Products/               → filtro de categorías, tarjetas y ventana de fotos
    About/                  → "Sobre Marrón"
    HowToBuy/               → "¿Cómo comprar?"
    Instagram/              → grilla de fotos que lleva a Instagram
    Footer/                 → contacto y pie de página
```

Tipografías: **Montserrat** (títulos) y **Noto Sans** (texto), cargadas desde Google Fonts en `index.html`.

## Tareas pendientes

1. Poner el número real de WhatsApp en `src/data/productos.js` → `CONFIG.whatsapp` (formato `549` + característica + número, sin espacios).
2. Sumar fotos de **Riñoneras** y **Neceseres**: copiar las imágenes a `public/img/productos/` y agregar sus rutas en `fotos: [...]` del producto (por ejemplo `"img/productos/rinonera-1.jpg"`). Mientras esté vacío se ve el espacio "Foto pendiente".

## Publicar en GitHub Pages

El repo trae un workflow (`.github/workflows/deploy.yml`) que publica la página sola cada vez que se sube un cambio a `main`.

Solo hay que activarlo una vez: en GitHub, **Settings → Pages → Source: GitHub Actions**. La página queda en `https://<usuario>.github.io/<repo>/`.
