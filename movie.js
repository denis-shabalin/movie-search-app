const movieId = 'tt9336300';

getMovie(movieId) 
   .then(result => {
      const movies = result.Search;

      render(movie);
   })