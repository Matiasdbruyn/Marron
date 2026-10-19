<p align="center">
  <img src="public/img/logo-circulo.png" alt="Marrón — Conexión natural, estilo urbano" width="140">
</p>

<h1 align="center">Marrón</h1>

<p align="center">
  Página web de <a href="https://www.instagram.com/marron.ar/">@marron.ar</a>, un emprendimiento de marroquinería textil.<br>
  <em>Conexión natural · Estilo urbano</em>
</p>

---

## De qué se trata

**Marrón** hace bandoleras, riñoneras, tote bags y neceseres en lona y gabardina, en tonos tierra. Vende por mayor y por menor y hace envíos a todo el país.

La página funciona como una vitrina:

- **Portada** con la identidad de la marca y acceso directo a WhatsApp.
- **Catálogo** filtrable por categoría. Cada producto abre una ventana con todas sus fotos, sus detalles y un botón de WhatsApp que ya trae escrito el nombre del producto.
- **Sobre Marrón**, con la historia y los valores de la marca.
- **¿Cómo comprar?**, explicado en tres pasos.
- **Grilla de Instagram** y **contacto**, más un botón flotante de WhatsApp siempre a mano.

Está adaptada a **computadora, tablet y celular**.

## Cómo la hice

### 1. Partir de la marca

Arranqué del material que me pasó la clienta: logos, fotos de productos y su paleta de colores. Toda la página se construye con esos seis colores:

| Color | Uso |
| --- | --- |
| `#815731` marrón | color principal, botones, pie de página |
| `#B38256` caramelo | detalles y subtítulos |
| `#F4EDE4` crema | fondo |
| `#9E9589` gris pardo | categoría Riñoneras |
| `#B8B491` verde salvia | categoría Tote Bags y detalles |
| `#4E4E4F` gris oscuro | texto |

Cada categoría del catálogo lleva el color que la marca ya le había asignado.

### 2. Diseño

Busqué algo cálido y con aire, que deje que las fotos sean las protagonistas. La página de [Marea Tienda](https://www.mareatienda.com.ar/) sirvió de inspiración en el tono, pero la estructura y el diseño son propios.

Algunos detalles:

- Foto de portada con forma de arco y el sello circular de la marca superpuesto.
- Cinta animada con las categorías y los servicios (envíos, venta mayorista).
- Al pasar el mouse por un producto aparece una segunda foto.
- Espacios de "Foto pendiente" para los productos que todavía no tienen fotos, así la página se puede publicar sin esperar.
- Animaciones suaves al hacer scroll, que se desactivan si la persona tiene configurado "reducir movimiento" en su dispositivo.
- Tipografías **Montserrat** (títulos) y **Noto Sans** (texto).

### 3. Primero un prototipo, después React

La primera versión fue una página estática en HTML, CSS y JavaScript, para validar rápido el diseño con la clienta e ir ajustando: tipografías, forma de los botones de categoría, orden del menú, etc.

Con el diseño aprobado, la pasé a **React + Vite**, con **cada sección en su propia carpeta** (componente + estilos). Así es más fácil de mantener y de sumar secciones nuevas.

### 4. Pensada para que la clienta la pueda actualizar

Todos los datos que cambian seguido (número de WhatsApp, usuario de Instagram, categorías y productos con sus fotos, colores y descripciones) están en un solo archivo: [`src/data/productos.js`](src/data/productos.js). Para sumar un producto o una foto no hace falta tocar ningún componente.

### 5. Publicación automática

Cada vez que se sube un cambio a la rama `main`, un workflow de GitHub Actions arma la página y la publica en **GitHub Pages**.

## Tecnologías

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 8
- CSS puro, sin frameworks (variables CSS para la paleta y un archivo de estilos por sección)
- GitHub Actions + GitHub Pages

---

## Cómo levantarla en tu compu

Necesitás [Node.js](https://nodejs.org/) instalado.

```bash
npm install
```

```bash
npm run dev
```

y abrir http://localhost:5173 (el puerto se configura en `vite.config.js`). La página se actualiza sola cuando guardás un cambio.

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Levanta la página en modo desarrollo. |
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

## Cómo actualizar el contenido

- **Sumar fotos a un producto:** copiar la imagen a `public/img/productos/` y agregar su ruta en `fotos: [...]` del producto en `src/data/productos.js` (por ejemplo `"img/productos/rinonera-1.jpg"`).
- **Sumar un producto:** copiar un bloque de `PRODUCTOS` en el mismo archivo y cambiar los datos.
- **Cambiar WhatsApp o Instagram:** editar `CONFIG` en el mismo archivo.

### Pendiente

- Fotos de **Riñoneras** y **Neceseres** (hoy se muestra el espacio "Foto pendiente").

## Publicar en GitHub Pages

El workflow `.github/workflows/deploy.yml` publica la página sola en cada cambio a `main`. Solo hay que activarlo una vez en GitHub: **Settings → Pages → Source: GitHub Actions**. La página queda en `https://<usuario>.github.io/<repo>/`.
