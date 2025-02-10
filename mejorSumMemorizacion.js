const mejorSuma = (suma, monedas, memo = {}) => {
  if (suma in memo) return memo[suma];
  if (suma === 0) return [];
  if (suma < 0) return null;

  let combinacionMasCorta = null;

  for (let moneda of monedas) {
    const resto = suma - moneda;
    const combinacionRestante = mejorSuma(resto, monedas, memo);
    if (combinacionRestante !== null) {
      const combinacion = [...combinacionRestante, moneda];
      if (
        combinacionMasCorta === null ||
        combinacion.length < combinacionMasCorta.length
      ) {
        combinacionMasCorta = combinacion;
      }
    }
  }
  memo[suma] = combinacionMasCorta;
  return combinacionMasCorta;
};


const tiempoInicio = new Date();
console.log(mejorSuma(7, [5, 3, 4, 7])); // [7]
console.log(mejorSuma(8, [2, 3, 5])); // [7]
console.log(mejorSuma(8, [1, 4, 5])); // [7]
console.log(mejorSuma(100, [1, 2, 5, 25])); // [7]
const tiempoFin = new Date();

const tiempoTotal = tiempoFin - tiempoInicio;
console.log(`finalizado en ${tiempoTotal} ms`);
