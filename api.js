   const BASE_URL = 'https://omdbapi.com/';
const API_KEY = '7e7514ca';

function getMovies(searchQuery) {
   return fetch(`${BASE_URL}?s=${searchQuery}&apikey=${API_KEY}`)
      .then(data => data.json())
}

function getMovie(id) {
   return fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`)
      .then(data => data.json())
}