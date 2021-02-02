import dayjs from "dayjs";

const createFilmCardTemplate = (movie) => {

  const {comments, filmInfo: {title, totalRating, release: {date}, runtime, genre, poster, description}} = movie;
  const releaseDate = dayjs(date).format(`YYYY`);
  const hours = Math.floor(runtime / 60);
  const minutes = runtime % 60;

  return `<article class="film-card">
            <h3 class="film-card__title">${title}</h3>
            <p class="film-card__rating">${totalRating}</p>
            <p class="film-card__info">
              <span class="film-card__year">${releaseDate}</span>
              <span class="film-card__duration">${(hours !== 0 ? hours + `h` : ``)} ${minutes}m</span>
              <span class="film-card__genre">${genre}</span>
            </p>
            <img src=${poster} alt="" class="film-card__poster">
            <p class="film-card__description">${description}</p>
            <a class="film-card__comments">${comments.length} comments</a>
            <div class="film-card__controls">
              <button class="film-card__controls-item button film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
              <button class="film-card__controls-item button film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
              <button class="film-card__controls-item button film-card__controls-item--favorite" type="button">Mark as favorite</button>
            </div>
          </article>`;
};

export {createFilmCardTemplate};
