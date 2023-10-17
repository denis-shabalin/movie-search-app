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
         <a href='./movie.html?id=${imdbID}' class = 'movies__box'>
            <div class='movies__box-img'>
               <img src=${Poster}  class='movies__img' />
            </div>
            <div class="movies__box-text">
               <p class='movies__title'>${Title}</p>
               <p class='movies__year'>${Year}</p>
               <p class='movies__view'>${MOVIE_TYPES[Type]}</p>
            </div>
         </a>
      `;
   });

   searchListNode.innerHTML = html;
}