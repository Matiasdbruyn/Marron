import { CATEGORIAS } from "../../data/productos.js";

const OPCIONES = [{ id: "todo", nombre: "Ver todo" }, ...CATEGORIAS];

export default function CategoryFilter({ value, onChange }) {
  return (
    <div className="cats" role="tablist" aria-label="Categorías">
      {OPCIONES.map((c) => (
        <button
          key={c.id}
          className={`cat${c.id === "todo" ? " cat--all" : ""}`}
          role="tab"
          aria-selected={c.id === value}
          style={c.color ? { "--c": c.color, "--t": c.texto } : undefined}
          onClick={() => onChange(c.id)}
        >
          {c.nombre}
        </button>
      ))}
    </div>
  );
}
