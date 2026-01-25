import { useState } from "react";
import { calcularCuil } from "../utils/cuil";
import { PersonaTipo } from "../types/cuils";

export default function CuilCalculator() {
  const [dni, setDni] = useState("");
  const [tipo, setTipo] = useState<PersonaTipo>("HOMBRE");
  const [resultado, setResultado] = useState<string | null>(null);

  const handleCalcular = () => {
    try {
      setResultado(calcularCuil(dni, tipo));
    } catch {
      setResultado("DNI inválido");
    }
  };

  return (
    <div>
      <h3>Calculadora CUIL</h3>

      <input
        value={dni}
        onChange={(e) => setDni(e.target.value)}
        placeholder="DNI"
      />

      <select
        value={tipo}
        onChange={(e) => setTipo(e.target.value as PersonaTipo)}
      >
        <option value="HOMBRE">Hombre</option>
        <option value="MUJER">Mujer</option>
      </select>

      <button onClick={handleCalcular}>Calcular</button>

      {resultado && <p>{resultado}</p>}
    </div>
  );
}
