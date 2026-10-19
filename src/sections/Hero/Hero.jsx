import { asset, waUrl } from "../../utils/links.js";
import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="eyebrow reveal">
          Conexión natural <span className="dot">✦</span> Estilo urbano
        </p>
        <h1 className="hero__title reveal">
          Marroquinería textil
          <br />
          <em>para andar liviano</em>
        </h1>
        <p className="hero__lead reveal">
          Bandoleras, riñoneras, tote bags y neceseres hechos en lona y gabardina, pensados para
          acompañarte todos los días.
        </p>
        <div className="hero__ctas reveal">
          <a href="#productos" className="btn btn--solid">Ver productos</a>
          <a href={waUrl()} className="btn btn--ghost" target="_blank" rel="noopener">
            Consultar por WhatsApp
          </a>
        </div>
      </div>

      <div className="hero__media reveal">
        <div className="hero__arch">
          <img
            src={asset("img/productos/bandolera-10.jpg")}
            alt="Bandolera Tierra llevada cruzada en un parque"
            width="1200"
            height="1600"
          />
        </div>
        <img
          className="hero__seal"
          src={asset("img/logo-circulo.png")}
          alt=""
          aria-hidden="true"
          width="784"
          height="783"
        />
      </div>
    </section>
  );
}
