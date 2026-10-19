import "./PhotoPlaceholder.css";

// Espacio reservado para una foto que todavía no está
export default function PhotoPlaceholder() {
  return (
    <div className="placeholder">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
        <circle cx="12" cy="13" r="3.5" />
      </svg>
      <span>Foto pendiente</span>
    </div>
  );
}
