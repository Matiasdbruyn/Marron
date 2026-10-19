import "./HowToBuy.css";

const PASOS = [
  { titulo: "Elegí", texto: "Mirá los productos y guardá los que más te gusten." },
  { titulo: "Escribinos", texto: "Consultanos por WhatsApp o por mensaje en Instagram: stock, colores y precios." },
  { titulo: "Recibilo", texto: "Hacemos envíos a todo el país. Ventas mayoristas y minoristas." },
];

export default function HowToBuy() {
  return (
    <section className="section how" id="como-comprar">
      <header className="section__head">
        <p className="eyebrow">Simple y cercano</p>
        <h2 className="section__title">¿Cómo comprar?</h2>
      </header>

      <ol className="steps">
        {PASOS.map((paso, i) => (
          <li className="step reveal" key={paso.titulo}>
            <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
            <h3>{paso.titulo}</h3>
            <p>{paso.texto}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
