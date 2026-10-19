import { Fragment } from "react";
import "./Ribbon.css";

const ITEMS = ["Riñoneras", "Totes", "Neceseres", "Bandoleras", "Envíos a todo el país", "Mayorista y minorista"];

// Cinta animada; la lista se repite dos veces para que el movimiento sea continuo
export default function Ribbon() {
  return (
    <div className="ribbon" aria-hidden="true">
      <div className="ribbon__track">
        {[...ITEMS, ...ITEMS].map((item, i) => (
          <Fragment key={i}>
            <span>{item}</span>
            <i>✦</i>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
