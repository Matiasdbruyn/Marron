import { CONFIG } from "../../data/productos.js";
import { asset, igUrl, waUrl } from "../../utils/links.js";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer__inner">
        <img
          className="footer__seal"
          src={asset("img/logo-circulo.png")}
          alt="Marrón — Conexión natural, estilo urbano"
          loading="lazy"
          width="784"
          height="783"
        />

        <div className="footer__cta">
          <h2>¿Te gustó algo?</h2>
          <p>Escribinos y te contamos stock, colores y precios.</p>
          <div className="footer__btns">
            <a href={waUrl()} className="btn btn--light" target="_blank" rel="noopener">WhatsApp</a>
            <a href={igUrl} className="btn btn--outline-light" target="_blank" rel="noopener">Instagram</a>
          </div>
        </div>

        <ul className="footer__info">
          <li><span>Envíos</span>A todo el país</li>
          <li><span>Ventas</span>Mayoristas y minoristas</li>
          <li>
            <span>Instagram</span>
            <a href={igUrl} target="_blank" rel="noopener">@{CONFIG.instagram}</a>
          </li>
        </ul>
      </div>

      <p className="footer__copy">© {new Date().getFullYear()} Marrón · Marroquinería textil</p>
    </footer>
  );
}
