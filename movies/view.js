const MOVIE_TYPES = {
   movie: 'фильм',
   series: 'сериал',
   game: 'игра'
};


const searchListNode = document.querySelector('#search-list');

function render(movies) {
   let html = '';

   if(!movies) {
      html = 'Нет фильмов'
      searchListNode.innerHTML = html;

      return;
   }

   movies.forEach(movie => {
      const {
         Poster,
         Title,
         Year,
         Type,
         imdbID
      } = movie;


      html += `
         <a href='/movie.html?id=${imdbID}'>
            <img src=${movie.Poster} />
            <p>${Title}</p>
            <p>${Year}</p>
            <p>${MOVIE_TYPES[Type]}</p>
         </a>
      `;
   });

   searchListNode.innerHTML = html;
}