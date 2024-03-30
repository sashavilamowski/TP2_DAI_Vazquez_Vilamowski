import { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID } from './omdb-wrapper.js';

(async () => {
  console.clear();

  const busquedaPaginada = await OMDBSearchByPage("Avengers", 1);
  console.log("Búsqueda paginada de películas 'Avengers':", busquedaPaginada);

  const busquedaCompleta = await OMDBSearchComplete("Batman");
  console.log("Búsqueda completa de películas 'Batman':", busquedaCompleta);

  const detallesPelicula = await OMDBGetByImdbID("tt0372784"); // IMDb ID de Avengers: Endgame
  console.log("Detalles de la película Avengers: Endgame:", detallesPelicula);
})();