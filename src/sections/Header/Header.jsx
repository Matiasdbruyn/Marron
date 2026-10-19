import { useEffect, useState } from "react";
import { asset } from "../../utils/links.js";
import "./Header.css";

const LINKS = [
  { href: "#productos", label: "Productos" },
  { href: "#esencia", label: "Nosotros" },
  { href: "#como-comprar", label: "Cómo comprar" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // El logo vuelve al principio de la página
  const goTop = (e) => {
    e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", location.pathname + location.search);
  };

  return (
    <header className={`header${scrolled ? " is-scrolled" : ""}`}>
      <div className="header__inner">
        <a href="#top" className="header__logo" aria-label="Marrón, volver al inicio" onClick={goTop}>
          <img src={asset("img/logo-marron.png")} alt="Marrón" width="723" height="152" />
        </a>

        <nav className={`header__nav${open ? " is-open" : ""}`} id="menu" aria-label="Principal">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <button
          className="header__burger"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
