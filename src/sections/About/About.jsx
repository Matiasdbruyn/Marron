import { asset } from "../../utils/links.js";
import "./About.css";

const VALORES = [
  { titulo: "Textiles nobles", texto: "Lona y gabardina resistentes" },
  { titulo: "Tonos tierra", texto: "Una paleta que combina con todo" },
  { titulo: "Hecho con detalle", texto: "Costuras y herrajes cuidados" },
];

export default function About() {
  return (
    <section className="section essence" id="esencia">
      <div className="essence__media">
        <figure className="essence__img essence__img--a reveal">
          <img
            src={asset("img/productos/bandolera-8.jpg")}
            alt="Detalle de la bandolera llevada al hombro"
            loading="lazy"
            width="1200"
            height="1600"
          />
        </figure>
        <figure className="essence__img essence__img--b reveal">
          <img
            src={asset("img/productos/bandolera-7.jpg")}
            alt="Bandolera Tierra a la altura de la cadera"
            loading="lazy"
            width="1200"
            height="1600"
          />
        </figure>
      </div>

      <div className="essence__text">
        <p className="eyebrow reveal">Sobre Marrón</p>
        <h2 className="section__title reveal">Hecho para el día&nbsp;a&nbsp;día</h2>
        <p className="reveal">
          Marrón nace de las ganas de crear accesorios simples, resistentes y lindos de usar. Trabajamos con
          textiles nobles en tonos tierra que combinan con todo, y cuidamos cada costura y cada herraje.
        </p>
        <p className="reveal">Piezas utilitarias para moverte por la ciudad con lo justo y necesario.</p>
        <ul className="values reveal">
          {VALORES.map((v) => (
            <li key={v.titulo}>
              <strong>{v.titulo}</strong>
              <span>{v.texto}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
