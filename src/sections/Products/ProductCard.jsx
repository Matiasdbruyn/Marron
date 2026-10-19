import { nombreCategoria } from "../../data/productos.js";
import { asset } from "../../utils/links.js";
import PhotoPlaceholder from "../../components/PhotoPlaceholder/PhotoPlaceholder.jsx";

export default function ProductCard({ product, index, onOpen }) {
  const { nombre, bajada, categoria, colores, fotos } = product;
  const [foto1, foto2] = fotos;

  return (
    <article className="card" style={{ animationDelay: `${index * 70}ms` }}>
      <button className="card__media" onClick={() => onOpen(product)} aria-label={`Ver fotos de ${nombre}`}>
        <span className="card__tag">{nombreCategoria(categoria)}</span>
        {foto1 ? (
          <>
            <img src={asset(foto1)} alt={nombre} loading="lazy" width="1200" height="1600" />
            {/* La segunda foto aparece al pasar el mouse */}
            {foto2 && <img src={asset(foto2)} alt="" aria-hidden="true" loading="lazy" width="1200" height="1600" />}
            {fotos.length > 1 && <span className="card__count">{fotos.length} fotos</span>}
          </>
        ) : (
          <PhotoPlaceholder />
        )}
      </button>

      <div className="card__body">
        <h3 className="card__name">{nombre}</h3>
        <p className="card__sub">{bajada}</p>
        <div className="card__foot">
          <div className="swatches">
            {colores.map((c) => (
              <span key={c} style={{ background: c }} />
            ))}
          </div>
          <button className="card__link" onClick={() => onOpen(product)}>
            Ver más
          </button>
        </div>
      </div>
    </article>
  );
}
