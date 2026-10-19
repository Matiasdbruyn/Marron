/* ============================================================
   MARRÓN — Interacciones
   ============================================================ */
document.documentElement.classList.remove("no-js");

const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

const igUrl = `https://www.instagram.com/${CONFIG.instagram}/`;
const waUrl = (msg = "¡Hola Marrón! Quería hacerles una consulta 😊") =>
  `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
const catName = (id) => (CATEGORIAS.find((c) => c.id === id) || {}).nombre || "";

const PLACEHOLDER = `
  <div class="placeholder">
    <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h3l1.5-2h7L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/></svg>
    <span>Foto pendiente</span>
  </div>`;

/* ---------- Links de contacto ---------- */
$$(".js-ig").forEach((a) => (a.href = igUrl));
$$(".js-wa").forEach((a) => (a.href = waUrl()));
$("#year").textContent = new Date().getFullYear();

/* ---------- Header: menú y sombra ---------- */
const burger = $("#burger");
const menu = $("#menu");
const toggleMenu = (open) => {
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? "Cerrar menú" : "Abrir menú");
  menu.classList.toggle("is-open", open);
};
burger.addEventListener("click", () => toggleMenu(burger.getAttribute("aria-expanded") !== "true"));
$$("a", menu).forEach((a) => a.addEventListener("click", () => toggleMenu(false)));

// El logo vuelve al principio de la página
$$(".js-top").forEach((a) =>
  a.addEventListener("click", (e) => {
    e.preventDefault();
    toggleMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(null, "", location.pathname);
  })
);

const header = $(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 8);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Categorías ---------- */
const catsEl = $("#cats");
const gridEl = $("#grid");
let currentCat = "todo";

const cats = [{ id: "todo", nombre: "Ver todo" }, ...CATEGORIAS];
catsEl.innerHTML = cats
  .map(
    (c) => `
    <button class="cat ${c.id === "todo" ? "cat--all" : ""}" role="tab" data-cat="${c.id}"
      aria-selected="${c.id === currentCat}"
      ${c.color ? `style="--c:${c.color};--t:${c.texto}"` : ""}>${c.nombre}</button>`
  )
  .join("");

catsEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".cat");
  if (!btn) return;
  currentCat = btn.dataset.cat;
  $$(".cat", catsEl).forEach((b) => b.setAttribute("aria-selected", b === btn));
  renderGrid();
});

/* ---------- Grilla ---------- */
function cardMedia(p) {
  if (!p.fotos.length) return PLACEHOLDER;
  const [a, b] = p.fotos;
  return `
    <img src="${a}" alt="${p.nombre}" loading="lazy" width="1200" height="1600">
    ${b ? `<img src="${b}" alt="" loading="lazy" width="1200" height="1600" aria-hidden="true">` : ""}
    ${p.fotos.length > 1 ? `<span class="card__count">${p.fotos.length} fotos</span>` : ""}`;
}

function renderGrid() {
  const list = PRODUCTOS.filter((p) => currentCat === "todo" || p.categoria === currentCat);
  if (!list.length) {
    gridEl.innerHTML = `<p class="grid__empty">Pronto vas a encontrar productos en esta categoría.</p>`;
    return;
  }
  gridEl.innerHTML = list
    .map(
      (p, i) => `
    <article class="card" style="animation-delay:${i * 70}ms">
      <button class="card__media" data-open="${p.id}" aria-label="Ver fotos de ${p.nombre}">
        <span class="card__tag">${catName(p.categoria)}</span>
        ${cardMedia(p)}
      </button>
      <div class="card__body">
        <h3 class="card__name">${p.nombre}</h3>
        <p class="card__sub">${p.bajada}</p>
        <div class="card__foot">
          <div class="swatches">${p.colores.map((c) => `<span style="background:${c}"></span>`).join("")}</div>
          <button class="card__link" data-open="${p.id}">Ver más</button>
        </div>
      </div>
    </article>`
    )
    .join("") + ctaCard(list.length);
}

// Tarjeta final: invita a consultar por otros modelos o compras mayoristas
function ctaCard(i) {
  return `
    <article class="card card--cta" style="animation-delay:${i * 70}ms">
      <div class="card__media">
        <img src="assets/img/logo-circulo.png" alt="" loading="lazy">
        <h3>¿Buscás otro modelo?</h3>
        <p>Consultanos por colores, pedidos especiales y compras mayoristas.</p>
        <a class="btn btn--light" href="${waUrl("¡Hola Marrón! Quería consultar por otros modelos / compras mayoristas 😊")}" target="_blank" rel="noopener">Escribinos</a>
      </div>
    </article>`;
}
renderGrid();

gridEl.addEventListener("click", (e) => {
  const btn = e.target.closest("[data-open]");
  if (btn) openModal(btn.dataset.open);
});

/* ---------- Modal de producto ---------- */
const modal = $("#modal");
const mainEl = $("#modal-main");
const thumbsEl = $("#modal-thumbs");
let gallery = [];
let idx = 0;

function showPhoto(i) {
  if (!gallery.length) {
    mainEl.innerHTML = PLACEHOLDER;
    return;
  }
  idx = (i + gallery.length) % gallery.length;
  const img = mainEl.querySelector("img");
  img.src = gallery[idx];
  $$("button", thumbsEl).forEach((t, j) => t.setAttribute("aria-current", j === idx));
}

function openModal(id) {
  const p = PRODUCTOS.find((x) => x.id === id);
  if (!p) return;
  gallery = p.fotos;

  $("#modal-cat").textContent = catName(p.categoria);
  $("#modal-title").textContent = p.nombre;
  $("#modal-sub").textContent = p.bajada;
  $("#modal-desc").textContent = p.descripcion;
  $("#modal-details").innerHTML = p.detalles.map((d) => `<li>${d}</li>`).join("");
  $("#modal-colors").innerHTML = p.colores.length
    ? `<small>Colores</small>${p.colores.map((c) => `<span style="background:${c}"></span>`).join("")}`
    : "";
  $("#modal-wa").href = waUrl(`¡Hola Marrón! Me interesa el producto "${p.nombre}". ¿Me pasan más info? 😊`);

  mainEl.innerHTML = gallery.length
    ? `<img src="${gallery[0]}" alt="${p.nombre}">
       ${gallery.length > 1 ? `
         <button class="modal__arrow modal__arrow--prev" aria-label="Foto anterior">‹</button>
         <button class="modal__arrow modal__arrow--next" aria-label="Foto siguiente">›</button>` : ""}`
    : "";
  thumbsEl.innerHTML = gallery.length > 1
    ? gallery.map((f, j) => `<button data-i="${j}" aria-label="Foto ${j + 1}"><img src="${f}" alt="" loading="lazy"></button>`).join("")
    : "";
  showPhoto(0);

  modal.showModal();
  document.body.classList.add("modal-open");
}

function closeModal() {
  modal.close();
}
modal.addEventListener("close", () => document.body.classList.remove("modal-open"));
$("#modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
  if (e.target.closest(".modal__arrow--prev")) showPhoto(idx - 1);
  if (e.target.closest(".modal__arrow--next")) showPhoto(idx + 1);
  const t = e.target.closest("[data-i]");
  if (t) showPhoto(+t.dataset.i);
});
modal.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") showPhoto(idx - 1);
  if (e.key === "ArrowRight") showPhoto(idx + 1);
});

// Deslizar con el dedo en celular
let touchX = null;
mainEl.addEventListener("touchstart", (e) => (touchX = e.touches[0].clientX), { passive: true });
mainEl.addEventListener("touchend", (e) => {
  if (touchX === null) return;
  const dx = e.changedTouches[0].clientX - touchX;
  if (Math.abs(dx) > 40) showPhoto(idx + (dx < 0 ? 1 : -1));
  touchX = null;
});

/* ---------- Animaciones al hacer scroll ---------- */
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
$$(".reveal").forEach((el) => io.observe(el));
