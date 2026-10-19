import { useEffect } from "react";

// Muestra con una animación suave los elementos con la clase "reveal" cuando entran en pantalla
export function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((en) => {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
