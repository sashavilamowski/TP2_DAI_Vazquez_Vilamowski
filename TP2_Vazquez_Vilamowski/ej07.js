const { getCurrencyByCountryCode } = require('currency-map-country');

function obtenerMonedaPorPais(codigoPais) {
  const moneda = getCurrencyByCountryCode(codigoPais);
  if (moneda) {
    return moneda;
  } else {
    return null;
  }
}

// Ejemplo de uso
const codigoPais1 = 'US'; // Código de país para Estados Unidos
const codigoPais2 = 'GB'; // Código de país para Reino Unido
const codigoPais3 = 'XX'; // Código de país inválido

console.log(`Moneda de ${codigoPais1}:`, obtenerMonedaPorPais(codigoPais1));
console.log(`Moneda de ${codigoPais2}:`, obtenerMonedaPorPais(codigoPais2));
console.log(`Moneda de ${codigoPais3}:`, obtenerMonedaPorPais(codigoPais3));
