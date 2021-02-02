import {createHeaderProfileTemplate} from "./view/header-profile";
import {createMainNavigationTemplate} from "./view/main-navigation";
import {createSortTemplate} from "./view/sort";
import {createFilmsTemplate} from "./view/films";
import {createFilmListTemplate} from "./view/film-list";
import {createButtonShowMoreTemplate} from "./view/button-show-more";
import {createFilmCardTemplate} from "./view/film-card";
import {createTopRatedListTemplate} from "./view/top-rated-list";
import {createMostCommentedListTemplate} from "./view/most-commented-list";
import {createStatisticTemplate} from "./view/statistic";
import {createPopupTemplate} from "./view/popup";
import {generateFilmCard} from "./mock/film-card";

const MAIN_LIST_COUNT = 8;
const EXTRA_LIST_COUNT = 2;

const movies = new Array(MAIN_LIST_COUNT).fill().map(generateFilmCard);

const render = (container, template, place) => {
  container.insertAdjacentHTML(place, template);
};

const siteHeader = document.querySelector(`.header`);

render(siteHeader, createHeaderProfileTemplate(), `beforeend`);

const siteMain = document.querySelector(`.main`);

render(siteMain, createMainNavigationTemplate(), `beforeend`);
render(siteMain, createSortTemplate(), `beforeend`);
render(siteMain, createFilmsTemplate(), `beforeend`);

const films = siteMain.querySelector(`.films`);

render(films, createFilmListTemplate(), `beforeend`);

const filmList = films.querySelector(`.films-list`);

render(filmList, createButtonShowMoreTemplate(), `beforeend`);

const filmListContainer = films.querySelector(`.films-list__container`);

for (let i = 0; i < MAIN_LIST_COUNT; i++) {
  render(filmListContainer, createFilmCardTemplate(movies[i]), `beforeend`);
}

render(films, createTopRatedListTemplate(), `beforeend`);
render(films, createMostCommentedListTemplate(), `beforeend`);

const filmListsExtra = films.querySelectorAll(`.films-list--extra`);

filmListsExtra.forEach((filmListExtra) => {
  const filmListExtraContainer = filmListExtra.querySelector(`.films-list__container`);

  for (let i = 0; i < EXTRA_LIST_COUNT; i++) {
    render(filmListExtraContainer, createFilmCardTemplate(movies[i]), `beforeend`);
  }
});

const footer = document.querySelector(`.footer`);
const footerStatistics = footer.querySelector(`.footer__statistics`);

render(footerStatistics, createStatisticTemplate(), `beforeend`);
// render(footer, createPopupTemplate(), `afterend`);
