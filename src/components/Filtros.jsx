import { useState, useEffect } from "react";

const Filtros = ({ filtro, setFiltro }) => {
  return (
    <div className="filtros sombra contenedor">
      <form className="campo">
        <label>Gastos</label>
        <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
          <option value="">-- Todas las Categorias --</option>
          <option value="ahorro">Ahorro</option>
          <option value="comida">Comida</option>
          <option value="Casa">Casa</option>
          <option value="ocio">Ocio</option>
          <option value="Salud">Salud</option>
          <option value="suscripciones">Suscripciones</option>
          <option value="varios">Varios</option>
        </select>
      </form>
    </div>
  );
};

export default Filtros;
