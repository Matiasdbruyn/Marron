import { waUrl } from "../../utils/links.js";
import "./WhatsAppFloat.css";

// Botón flotante de WhatsApp (abajo a la derecha)
export default function WhatsAppFloat() {
  return (
    <a href={waUrl()} className="wa-float" target="_blank" rel="noopener" aria-label="Escribinos por WhatsApp">
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M4 20l1.2-3.9A8.2 8.2 0 1 1 8 19.1z" />
        <path
          className="fill"
          d="M9 8.6c0 3.3 3 6.4 6.4 6.4l1-1.3-1.9-1-.8.8c-1.2-.5-2.2-1.5-2.7-2.7l.8-.8-1-1.9z"
        />
      </svg>
    </a>
  );
}
