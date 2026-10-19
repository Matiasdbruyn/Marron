/* ============================================================
   MARRÓN — Datos editables de la página
   ------------------------------------------------------------
   - Para cambiar el WhatsApp o el Instagram, editá CONFIG.
   - Para sumar fotos a un producto, agregá la ruta en "fotos".
     Si "fotos" está vacío, se muestra un espacio "Foto pendiente".
   - Para sumar un producto nuevo, copiá un bloque y cambiá los datos.
   ============================================================ */

const CONFIG = {
  // Número con código de país, sin "+", espacios ni guiones. Ej: 5491123456789
  // TODO: reemplazar por el número real de la clienta.
  whatsapp: "5491100000000",
  instagram: "marron.ar",
};

const CATEGORIAS = [
  { id: "bandoleras", nombre: "Bandoleras", color: "#F4EDE4", texto: "#4E4E4F" },
  { id: "rinoneras",  nombre: "Riñoneras",  color: "#9E9589", texto: "#F4EDE4" },
  { id: "totes",      nombre: "Tote Bags",  color: "#B8B491", texto: "#4E4E4F" },
  { id: "neceseres",  nombre: "Neceseres",  color: "#C8935F", texto: "#F4EDE4" },
];

const PRODUCTOS = [
  {
    id: "bandolera-tierra",
    categoria: "bandoleras",
    nombre: "Bandolera Tierra",
    bajada: "Crudo, caramelo y verde salvia",
    descripcion:
      "Bandolera de lona y gabardina en tres tonos. Bolsillo frontal con cierre, compartimento principal amplio y correa de algodón regulable con mosquetones metálicos.",
    detalles: ["Bolsillo frontal con cierre", "Correa regulable y desmontable", "Herrajes metálicos"],
    colores: ["#EDE6D6", "#B38256", "#A7B5A0"],
    fotos: [
      "assets/img/productos/bandolera-1.jpg",
      "assets/img/productos/bandolera-2.jpg",
      "assets/img/productos/bandolera-3.jpg",
      "assets/img/productos/bandolera-4.jpg",
      "assets/img/productos/bandolera-5.jpg",
      "assets/img/productos/bandolera-6.jpg",
      "assets/img/productos/bandolera-7.jpg",
      "assets/img/productos/bandolera-8.jpg",
      "assets/img/productos/bandolera-9.jpg",
    ],
  },
  {
    id: "tote-bordo",
    categoria: "totes",
    nombre: "Tote Bordó",
    bajada: "Lona bordó con bolsillo frontal",
    descripcion:
      "Tote de lona resistente con manijas cortas y correa larga regulable para llevar cruzada. Bolsillo frontal con broche y cierre superior.",
    detalles: ["Cierre superior", "Manijas + correa larga regulable", "Bolsillo frontal con broche"],
    colores: ["#7A1F2B"],
    fotos: [
      "assets/img/productos/tote-bordo-1.jpg",
      "assets/img/productos/tote-bordo-2.jpg",
      "assets/img/productos/tote-bordo-3.jpg",
      "assets/img/productos/tote-bordo-4.jpg",
    ],
  },
  {
    id: "tote-margarita",
    categoria: "totes",
    nombre: "Tote Margarita",
    bajada: "Lona negra con margarita bordada",
    descripcion:
      "La misma tote de siempre, en negro y con una margarita en el bolsillo frontal. Manijas cortas y correa larga para llevarla como quieras.",
    detalles: ["Detalle de margarita", "Manijas + correa larga regulable", "Bolsillo frontal"],
    colores: ["#1E1E1E", "#7A1F2B"],
    fotos: [
      "assets/img/productos/tote-negra-1.jpg",
      "assets/img/productos/tote-negra-2.jpg",
    ],
  },
  {
    id: "rinonera",
    categoria: "rinoneras",
    nombre: "Riñonera",
    bajada: "Próximamente fotos",
    descripcion:
      "Riñonera textil para el día a día. Escribinos para conocer modelos y colores disponibles.",
    detalles: ["Correa regulable", "Cierre metálico"],
    colores: [],
    fotos: [],
  },
  {
    id: "neceser",
    categoria: "neceseres",
    nombre: "Neceser",
    bajada: "Próximamente fotos",
    descripcion:
      "Neceser textil para tus cosas de todos los días. Escribinos para conocer modelos y colores disponibles.",
    detalles: ["Cierre metálico", "Interior práctico"],
    colores: [],
    fotos: [],
  },
];
