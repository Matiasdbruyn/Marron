import { useCallback, useState } from "react";
import { PRODUCTOS } from "../../data/productos.js";
import CategoryFilter from "./CategoryFilter.jsx";
import ProductCard from "./ProductCard.jsx";
import ContactCard from "./ContactCard.jsx";
import ProductModal from "./ProductModal.jsx";
import "./Products.css";

export default function Products() {
  const [categoria, setCategoria] = useState("todo");
  const [seleccionado, setSeleccionado] = useState(null);
  const cerrarModal = useCallback(() => setSeleccionado(null), []);

  const lista = PRODUCTOS.filter((p) => categoria === "todo" || p.categoria === categoria);

  return (
    <section className="section products" id="productos">
      <header className="section__head">
        <p className="eyebrow">Colección</p>
        <h2 className="section__title">Nuestros productos</h2>
        <p className="section__lead">Elegí una categoría y tocá cada producto para ver todas sus fotos.</p>
      </header>

      <CategoryFilter value={categoria} onChange={setCategoria} />

      {/* key: al cambiar de categoría, las tarjetas vuelven a animarse */}
      <div className="grid" key={categoria}>
        {lista.length ? (
          <>
            {lista.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} onOpen={setSeleccionado} />
            ))}
            <ContactCard index={lista.length} />
          </>
        ) : (
          <p className="grid__empty">Pronto vas a encontrar productos en esta categoría.</p>
        )}
      </div>

      <ProductModal product={seleccionado} onClose={cerrarModal} />
    </section>
  );
}
