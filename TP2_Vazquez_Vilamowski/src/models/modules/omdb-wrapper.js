import axios from "axios";

const APIKEY = "7b62fa5d"; // Coloca aquí tu APIKEY de OMDB, esta es solo un ejemplo

const OMDBSearchByPage = async (searchText, page = 1) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}&page=${page}`);
    
    const returnObject = {
      respuesta: true,
      cantidadTotal: response.data.totalResults,
      datos: response.data.Search
    };

    return returnObject;
  } catch (error) {
    console.error("Error al buscar películas por página:", error.response.data.Error);
    
    const returnObject = {
      respuesta: false,
      cantidadTotal: 0,
      datos: []
    };

    return returnObject;
  }
};

const OMDBSearchComplete = async (searchText) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${searchText}`);
    
    const returnObject = {
      respuesta: true,
      cantidadTotal: response.data.totalResults,
      datos: response.data.Search
    };

    return returnObject;
  } catch (error) {
    console.error("Error al buscar películas completas:", error.response.data.Error);
    
    const returnObject = {
      respuesta: false,
      cantidadTotal: 0,
      datos: []
    };

    return returnObject;
  }
};

const OMDBGetByImdbID = async (imdbID) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?apikey=${APIKEY}&i=${imdbID}`);
    
    const returnObject = {
      respuesta: true,
      datos: response.data
    };

    return returnObject;
  } catch (error) {
    console.error("Error al obtener detalles de película por IMDb ID:", error.response.data.Error);
    
    const returnObject = {
      respuesta: false,
      datos: {}
    };

    return returnObject;
  }
};

export { OMDBSearchByPage, OMDBSearchComplete, OMDBGetByImdbID };