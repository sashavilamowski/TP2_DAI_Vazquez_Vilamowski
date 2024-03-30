import { URL } from 'url';

function parsearUrl(laURL) {
  const urlObj = new URL(laURL);
  const host = urlObj.host;
  const pathname = urlObj.pathname;
  const parametros = {};
  urlObj.searchParams.forEach((value, key) => {
    parametros[key] = value;
  });
  return {
    host,
    pathname,
    parametros,
  };
}

// Ejemplo de uso
let miUrl = 'http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo';
let miObjeto = parsearUrl(miUrl);
console.log(miObjeto);