import { CONFIG } from "../../data/productos.js";
import { asset, igUrl } from "../../utils/links.js";
import "./Instagram.css";

const FOTOS = [
  { src: "img/productos/tote-bordo-1.jpg", alt: "Tote Bordó" },
  { src: "img/productos/bandolera-9.jpg", alt: "Detalle de bandoleras" },
  { src: "img/productos/tote-negra-1.jpg", alt: "Tote Margarita y Tote Bordó" },
  { src: "img/productos/bandolera-5.jpg", alt: "Bandolera Tierra con el bolsillo frontal" },
  { src: "img/productos/bandolera-2.jpg", alt: "Bandolera Tierra de frente" },
  { src: "img/productos/bandolera-6.jpg", alt: "Bandolera Tierra de costado" },
];

export default function Instagram() {
  return (
    <section className="section insta">
      <header className="section__head">
        <p className="eyebrow">Seguinos</p>
        <h2 className="section__title">
          <a href={igUrl} target="_blank" rel="noopener">@{CONFIG.instagram}</a>
        </h2>
      </header>

      <div className="insta__grid">
        {FOTOS.map((foto) => (
          <a key={foto.src} href={igUrl} target="_blank" rel="noopener">
            <img src={asset(foto.src)} alt={foto.alt} loading="lazy" />
          </a>
        ))}
      </div>
    </section>
  );
}
