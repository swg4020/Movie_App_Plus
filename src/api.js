const fatch = require("node-fetch");

const baseUrl = "https://api.themoviedb.org/3/";
const url = (urlName) => {
  return baseUrl + `${urlName}?language=ko-kr`;
};

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTgyNGZhMmFhY2FhZDNlNzMwMmY5NDM2YjYzNGNlNiIsInN1YiI6IjY1ZjAwZWYwOTQ2MzE4MDE4NTYxODc2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RX9WJ0-yxJEvHww8KqLucMqZbmKwiu802Nc32L69PEo",
  },
};

//영화
export const nowPlaying = () =>
  fatch(url("movie/now_playing"), options).then((res) => res.json());

export const poPular = () =>
  fatch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () =>
  fatch(url("movie/top_rated"), options).then((res) => res.json());

export const trending = () =>
  fatch(url("trending/movie/day"), options).then((res) => res.json());

export const upComing = () =>
  fatch(url("movie/upcoming"), options).then((res) => res.json());

//영상
export const videosMovie = (id) => {
  const videosUrl = baseUrl + `movie/${id}/videos?language=ko-kr`;
  return fatch(videosUrl, options).then((res) => res.json());
};

//검색
export const searchMovie = (keyword) => {
  const searchUrl = baseUrl + `search/movie?query=${keyword}&language=ko-kr`;
  return fatch(searchUrl, options).then((res) => res.json());
};

//정보
export const movieDetail = (id) => {
  const detailUrl = baseUrl + `movie/${id}?language=ko-kr`;
  return fatch(detailUrl, options).then((res) => res.json());
};

//장르
export const genre = () => {
  const detailUrl = baseUrl + `genre/movie/list?language=ko-kr`;
  return fatch(detailUrl, options).then((res) => res.json());
};

export const genres = (id) => {
  const genresData = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&with_genres=${id}
  `;
  return fatch(genresData, options).then((res) => res.json());
};

//배우
export const person = () => {
  const pers = baseUrl + `person/popular?language=ko-KR&page=1`;
  return fatch(pers, options).then((res) => res.json());
};
