const movieNode = document.querySelector('#movie');

function render(movie) {

   const {
      Title
   } = movie;

   movieNode.innerHTML = `
      <div>
         <h1>${Title}</h1>
      </div>
   `;




   /* let html = '';

   movies.forEach(movie => {
      const {
         Poster,
         Title,
         Year,
         Type,
         imdbID

      } = movie;

      html += `
         <a href ="/movie.html?id={imdbID}">
            <img src=${Poster} />
            <p>${Title}</p>
            <p>${Year}</p>
            <p>${MOVIE_TYPES[Type]}</p>
         </a>
      `;
   });

   searchListNode.innerHTML = html; */
}