"use strict";

// const obj = {
//     Anna: 500,
//     Alice: 800
// }

// obj.Bond = 1000;
// console.log(obj.Bond)

// const category = 'toys';

// let url = `https://someurl.com/${category}/5`

// console.log(url)

let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);

const persolnalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let movie_name = prompt("Один из последних просмотренных фильмов?", ''),
    movie_rate = +prompt("На сколько оцените его?", 0),
    movie_name2 = prompt("Один из последних просмотренных фильмов?", ''),
    movie_rate2 = +prompt("На сколько оцените его?", 0);

persolnalMovieDB.movies[movie_name] = movie_rate
persolnalMovieDB.movies[movie_name2] = movie_rate2

console.log(persolnalMovieDB)
