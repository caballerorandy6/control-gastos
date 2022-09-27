import { useState, useEffect } from "react";
import { formatearCantidad } from "../helpers";

const ControlPresupuesto = ({ gastos, presupuesto }) => {
  const [disponible, setDisponible] = useState(0);
  const [gastado, setGastado] = useState(0);

  useEffect(() => {
    console.log("listo");
  }, [gastos]);

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>Grafica Aqui</p>
      </div>
      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto</span> {formatearCantidad(presupuesto)}
        </p>
        <p>
          <span>Disponible</span> {formatearCantidad(0)}
        </p>
        <p>
          <span>Gastado</span> {formatearCantidad(0)}
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
