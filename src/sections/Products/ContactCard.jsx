import { asset, waUrl } from "../../utils/links.js";

// Tarjeta final: invita a consultar por otros modelos o compras mayoristas
export default function ContactCard({ index }) {
  return (
    <article className="card card--cta" style={{ animationDelay: `${index * 70}ms` }}>
      <div className="card__media">
        <img src={asset("img/logo-circulo.png")} alt="" loading="lazy" />
        <h3>¿Buscás otro modelo?</h3>
        <p>Consultanos por colores, pedidos especiales y compras mayoristas.</p>
        <a
          className="btn btn--light"
          href={waUrl("¡Hola Marrón! Quería consultar por otros modelos / compras mayoristas 😊")}
          target="_blank"
          rel="noopener"
        >
          Escribinos
        </a>
      </div>
    </article>
  );
}
