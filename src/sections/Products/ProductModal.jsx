import { useCallback, useEffect, useRef, useState } from "react";
import { nombreCategoria } from "../../data/productos.js";
import { asset, igUrl, waUrl } from "../../utils/links.js";
import PhotoPlaceholder from "../../components/PhotoPlaceholder/PhotoPlaceholder.jsx";
import "./ProductModal.css";

// Ventana con todas las fotos y la info de un producto
export default function ProductModal({ product, onClose }) {
  const dialogRef = useRef(null);
  const touchX = useRef(null);
  const [idx, setIdx] = useState(0);

  const fotos = product?.fotos ?? [];
  const mostrar = (i) => fotos.length && setIdx((i + fotos.length) % fotos.length);

  // Cierra la ventana (con la X, con Esc o tocando afuera) y vuelve a habilitar el scroll de la página
  const cerrar = useCallback(() => {
    const dialog = dialogRef.current;
    if (dialog?.open) dialog.close();
    document.body.classList.remove("modal-open");
    onClose();
  }, [onClose]);

  // Abrir la ventana cuando se elige un producto
  useEffect(() => {
    const dialog = dialogRef.current;
    if (product) {
      setIdx(0);
      if (!dialog.open) dialog.showModal();
      document.body.classList.add("modal-open");
    } else if (dialog.open) {
      dialog.close();
      document.body.classList.remove("modal-open");
    }
  }, [product]);

  // Por si el navegador cierra la ventana por su cuenta
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog.addEventListener("close", cerrar);
    return () => {
      dialog.removeEventListener("close", cerrar);
      document.body.classList.remove("modal-open");
    };
  }, [cerrar]);

  const onKeyDown = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      cerrar();
    }
    if (e.key === "ArrowLeft") mostrar(idx - 1);
    if (e.key === "ArrowRight") mostrar(idx + 1);
  };

  // Deslizar con el dedo en celular
  const onTouchStart = (e) => (touchX.current = e.touches[0].clientX);
  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 40) mostrar(idx + (dx < 0 ? 1 : -1));
    touchX.current = null;
  };

  return (
    <dialog
      className="modal"
      ref={dialogRef}
      aria-labelledby="modal-title"
      onKeyDown={onKeyDown}
      onClick={(e) => e.target === dialogRef.current && cerrar()}
    >
      {product && (
        <>
          <button className="modal__close" aria-label="Cerrar" onClick={cerrar}>
            ×
          </button>

          <div className="modal__body">
            <div className="modal__gallery">
              <div className="modal__main" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
                {fotos.length ? (
                  <>
                    <img src={asset(fotos[idx])} alt={product.nombre} />
                    {fotos.length > 1 && (
                      <>
                        <button className="modal__arrow modal__arrow--prev" aria-label="Foto anterior" onClick={() => mostrar(idx - 1)}>
                          ‹
                        </button>
                        <button className="modal__arrow modal__arrow--next" aria-label="Foto siguiente" onClick={() => mostrar(idx + 1)}>
                          ›
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <PhotoPlaceholder />
                )}
              </div>

              {fotos.length > 1 && (
                <div className="modal__thumbs">
                  {fotos.map((f, j) => (
                    <button key={f} aria-label={`Foto ${j + 1}`} aria-current={j === idx} onClick={() => mostrar(j)}>
                      <img src={asset(f)} alt="" loading="lazy" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="modal__info">
              <p className="eyebrow">{nombreCategoria(product.categoria)}</p>
              <h3 id="modal-title">{product.nombre}</h3>
              <p className="modal__sub">{product.bajada}</p>
              <p>{product.descripcion}</p>

              <ul className="modal__details">
                {product.detalles.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>

              {product.colores.length > 0 && (
                <div className="modal__colors">
                  <small>Colores</small>
                  {product.colores.map((c) => (
                    <span key={c} style={{ background: c }} />
                  ))}
                </div>
              )}

              <div className="modal__btns">
                <a
                  className="btn btn--solid"
                  href={waUrl(`¡Hola Marrón! Me interesa el producto "${product.nombre}". ¿Me pasan más info? 😊`)}
                  target="_blank"
                  rel="noopener"
                >
                  Consultar por WhatsApp
                </a>
                <a className="btn btn--ghost" href={igUrl} target="_blank" rel="noopener">
                  Ver en Instagram
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
