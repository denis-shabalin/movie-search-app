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
      Actors
   } = movie;

   movieNode.innerHTML = `
      <div class='inner-movie'>
         <div class='movie__box-img'>
            <img class='movie__img' src='${Poster}'
         </div>
      </div>
      <div>
         <h1> ${Title}</h1>
         <p>Год: ${Year}</p>
         <p>Рейтинг: ${Rated}</p>
         <p>Дата выхода: ${Released}</p>
         <p>Продрлжительность: ${Runtime}</p>
         <p>Жанр: ${Genre}</p>
         <p>Режиссер: ${Director}</p>
         <p>Сценарий: ${Writer}</p>
         <p>Актеры: ${Actors}</p>
      </div>
   `;
}