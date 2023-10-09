const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const movieId = urlParams.get('id');

getMovie(movieId) 
   .then(movie => {
      render(movie);
   })