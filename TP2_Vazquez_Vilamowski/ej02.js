import { PI, sumar, restar, multiplicar, dividir, arrayStrings } from './src/modules/matematica.js';
console.clear();
console.log(`La constante PI vale '${PI}'`);

let numero1 = 10;
let numero2 = 20;

let resultadoSuma = sumar(numero1, numero2);
console.log(`Suma de ${numero1} + ${numero2} = ${resultadoSuma}`);

let resultadoResta = restar(numero2, numero1);
console.log(`Resta de ${numero2} - ${numero1} = ${resultadoResta}`);

let resultadoMultiplicacion = multiplicar(numero1, numero2);
console.log(`Multiplicación de ${numero1} * ${numero2} = ${resultadoMultiplicacion}`);

let resultadoDivision = dividir(numero2, numero1);
console.log(`División de ${numero2} / ${numero1} = ${resultadoDivision}`);

console.log("Array de strings:");
arrayStrings.forEach((elemento, indice) => {
  console.log(`[${indice + 1}] ${elemento}`);
});