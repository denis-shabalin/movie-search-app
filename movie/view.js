const movieNode = document.querySelector('#movie');

function render(movie) {

   const {
      Poster,
      Title,
      Year,
      Rated,
      Released,
      Runtime,
      Genre,
      Director,
      Writer,
      Actors,
      Plot
   } = movie;

   movieNode.innerHTML = `
         <div class="movie-wrapper">
            <div class='movie__box-img'>
               <img src='${Poster}'>
            </div>
            <div class='movie__box-text'>
               <h1 class='movie__title'> ${Title}</h1>
               <p>Год: <span>${Year}</span></p>
               <p>Рейтинг: <span>${Rated}</span></p>
               <p>Дата выхода: <span>${Released}</span></p>
               <p>Продолжительность: <span>${Runtime}</span></p>
               <p>Жанр: <span>${Genre}</span></p>
               <p>Режиссер: <span>${Director}</span></p>
               <p>Сценарий: <span>${Writer}</span></p>
               <p>Актеры: <span>${Actors}</span></p>
            </div>
         </div>
         <div class="inner-movie__info">
            <p class='movie__info'> ${Plot}</p>
         </div>
   `;
}