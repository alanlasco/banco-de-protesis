import { PersonaTipo } from "../types/cuils";

const PESOS = [5, 4, 3, 2, 7, 6, 5, 4, 3, 2];

const calcularDV = (base: string): number => {
  const suma = base
    .split("")
    .reduce((acc, d, i) => acc + Number(d) * PESOS[i], 0);

  const resto = suma % 11;
  return 11 - resto;
};

export const calcularCuil = (dniInput: string, tipo: PersonaTipo): string => {
  const dni = dniInput.padStart(8, "0");

  const prefijoBase = tipo === "HOMBRE" ? "20" : "27";
  const prefijoAlt = tipo === "HOMBRE" ? "23" : "24";

  // intento con prefijo base
  let dv = calcularDV(prefijoBase + dni);

  if (dv === 11) dv = 0;

  if (dv === 10) {
    // usar prefijo alternativo
    return `${prefijoAlt}-${dni}-9`;
  }

  return `${prefijoBase}-${dni}-${dv}`;
};
