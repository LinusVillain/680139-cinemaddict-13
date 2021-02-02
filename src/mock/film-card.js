import dayjs from "dayjs";

const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

const shuffleArray = (arrayForShuffle) => {
  for (let i = arrayForShuffle.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let x = arrayForShuffle[i];
    arrayForShuffle[i] = arrayForShuffle[j];
    arrayForShuffle[j] = x;
  }
  return arrayForShuffle;
};

const MIN_ID = 1;
const MAX_ID = 1000;

const getIdNumber = () => {
  const id = getRandomInteger(MIN_ID, MAX_ID);
  return id;
};

const names = [`Ilya O'Reilly`, `John Doe`, `Tim Macoveev`];

const getName = () => {
  const randomIndex = getRandomInteger(0, (names.length - 1));
  return names[randomIndex];
};

const textComments = [`a film that changed my life, a true masterpiece, post-credit scene was just amazing omg.`, `Booooooooooring`, `Very very old. Meh`];

const getText = () => {
  const randomIndex = getRandomInteger(0, (textComments.length - 1));
  return textComments[randomIndex];
};

const emotions = [`smile`, `sleeping`, `puke`, `angry`];

const getEmotion = () => {
  const randomIndex = getRandomInteger(0, (emotions.length - 1));
  return emotions[randomIndex];
};

const getComment = () => {
  return {
    id: getIdNumber(),
    author: getName(),
    comment: getText(),
    date: null, // date
    emotion: getEmotion()
  };
};

const MAX_COMMENTS = 5;

const getComments = () => {
  const randomLength = getRandomInteger(0, MAX_COMMENTS);
  const comments = [];
  for (let i = 0; i < randomLength; i++) {
    comments.push(getComment());
  }
  return comments;
};

const filmTitles = [`Lord of the Rings`, `The Hateful Eight`, `Lucky Number Slevin`, `Harry Potter`, `Home Alone`, `Ring`, `Gladiator`, `One Flew Over the Cuckoo’s Nest`, `Cinderella`, `Little Women`];

const getFilmTitle = () => {
  const randomIndex = getRandomInteger(0, (filmTitles.length - 1));
  return filmTitles[randomIndex];
};

const MAX_RATING = 10;

const getFilmRating = () => {
  const rating = getRandomInteger(0, MAX_RATING);
  return rating;
};

const posters = [`images/posters/made-for-each-other.png`, `images/posters/popeye-meets-sinbad.png`, `images/posters/sagebrush-trail.jpg`, `images/posters/santa-claus-conquers-the-martians.jpg`, `images/posters/the-dance-of-life.jpg`, `images/posters/the-great-flamarion.jpg`, `images/posters/the-man-with-the-golden-arm.jpg`];

const getFilmPoster = () => {
  const randomIndex = getRandomInteger(0, (posters.length - 1));
  return posters[randomIndex];
};

const ageRestrictions = [0, 6, 12, 16, 18];

const getAgeRating = () => {
  const randomIndex = getRandomInteger(0, (ageRestrictions.length - 1));
  return ageRestrictions[randomIndex];
};

const directors = [`Chris Columbus`, `Peter Jackson`, `Quentin Tarantino`, `Ridley Scott`, `Gore Verbinski`];

const getDirector = () => {
  const randomIndex = getRandomInteger(0, (directors.length - 1));
  return directors[randomIndex];
};

const writers = [`Joanne Rowling`, `Quentin Tarantino`, `John Logan`, `Ken Kesey`, `Frances Walsh`];

const getWriters = () => {
  const randomLength = getRandomInteger(0, (writers.length - 1));
  const writersForThisFilm = (shuffleArray(writers)).slice(randomLength);
  return writersForThisFilm;
}; // array

const actors = [`Daniel Radcliffe`, `Macaulay Culkin`, `Morgan Freeman`, `Orlando Bloom`, `Russell Crowe`, `Lily James`, `Saoirse Ronan`];

const getActors = () => {
  const randomLength = getRandomInteger(0, (actors.length - 1));
  const actorsForThisFilm = (shuffleArray(actors)).slice(randomLength);
  return actorsForThisFilm;
}; // array

const MIN_FILM_TIME = 40;
const MAX_FILM_TIME = 190;

const getRunTime = () => {
  return getRandomInteger(MIN_FILM_TIME, MAX_FILM_TIME);
};

const countries = [`USA`, `UK`, `New Zealand`, `France`];

const getCountry = () => {
  const randomIndex = getRandomInteger(0, (countries.length - 1));
  return countries[randomIndex];
};

const genres = [`Fantasy`, `Action`, `Family`, `Comedy`, `Western`, `Drama`];

const getGenre = () => {
  const randomLength = getRandomInteger(0, (genres.length - 1));
  const genresForThisFilm = (shuffleArray(genres)).slice(randomLength);
  return genresForThisFilm;
}; // array

const descriptions = [`Lorem ipsum dolor sit amet, consectetur adipiscing elit.`, `Cras aliquet varius magna, non porta ligula feugiat eget.`, `Fusce tristique felis at fermentum pharetra.`, `Aliquam id orci ut lectus varius viverra.`, `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`, `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`, `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`, `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat.`, `Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`];

const getDescription = () => {
  const randomLength = getRandomInteger(0, (descriptions.length - 1));
  const genresForThisFilm = (shuffleArray(descriptions)).slice(randomLength);
  return genresForThisFilm;
}; // array

const getReleaseDate = () => {
  const maxYearsGap = 30;
  const yearsGap = getRandomInteger(0, maxYearsGap);

  return dayjs().subtract(yearsGap, `year`).toDate();
  // .format(`YYYY-MM-DDTHH:mm:ss.ZZZ[Z]`)
};

const getBoolean = () => {
  return Boolean(getRandomInteger(0, 1));
};

const getViewDay = () => {
  const maxMonthsGap = 20;
  const monthsGap = getRandomInteger(0, maxMonthsGap);

  return dayjs().subtract(monthsGap, `month`).toDate();
  // format(`YYYY-MM-DDTHH:mm:ss.ZZZ[Z]`)
};

const generateFilmCard = () => {
  const isAlreadyWatched = getBoolean();
  const watchingDate = isAlreadyWatched === false ? null : getViewDay();

  return {
    id: getIdNumber(),
    comments: getComments(),
    filmInfo: {
      title: getFilmTitle(),
      alternativeTitle: getFilmTitle(),
      totalRating: getFilmRating(),
      poster: getFilmPoster(),
      ageRating: getAgeRating(),
      director: getDirector(),
      writers: getWriters(),
      actors: getActors(),
      release: {
        date: getReleaseDate(), // "2019-05-11T00:00:00.000Z", определить дату
        releaseCountry: getCountry()
      },
      runtime: getRunTime(),
      genre: getGenre(),
      description: getDescription()
    },
    userDetails: {
      isInWatchlist: getBoolean(),
      isAlreadyWatched,
      watchingDate, // "2019-04-12T16:12:32.554Z",
      isFavorite: getBoolean()
    }
  };
};

export {generateFilmCard};
