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
// ===================================================================================
// lesson19
// let numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", 0);

// const persolnalMovieDB = {
//     count: numberOfFilms, 
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let movie_name = prompt("Один из последних просмотренных фильмов?", ''),
//     movie_rate = +prompt("На сколько оцените его?", 0),
//     movie_name2 = prompt("Один из последних просмотренных фильмов?", ''),
//     movie_rate2 = +prompt("На сколько оцените его?", 0);

// persolnalMovieDB.movies[movie_name] = movie_rate
// persolnalMovieDB.movies[movie_name2] = movie_rate2

// console.log(persolnalMovieDB)
// ===================================================================================
// lesson20
// let num = 50;

// (num == 50) ? console.log('Ok') : console.log('Error');

// switch (num){
//     case 49: console.log('not equal'); break;
//     case 100: console.log('not equal'); break;
//     case 50: console.log('equal'); break;
//     default: console.log('error'); break;
// };
// ===================================================================================
// lesson23
// #t1
// const arrayOfNumbers = [];

// for (let i = 5; i <= 10; i++){
//     arrayOfNumbers[i-5] = i;
//     // arrayOfNumbers.push(i);
// }
// console.log(arrayOfNumbers);
// -----------------------------------------------------------------------------------
// #t2
// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i=0; i<arr.length; i++){
//     result[i] = arr[i];
// }
// console.log(result)
// -----------------------------------------------------------------------------------
// #t3
// const data = [5, 10, 'Shopping', 20, 'Homework'];

// for (let i=0; i<data.length; i++){
    // if (typeof(data[i]) == 'number'){
    //     data[i] = data[i] * 2;
    // }else{
    //     data[i] = data[i] = data[i] + ' done';
    // };
    
    //// switch(typeof(data[i])){
    ////     case 'number':  data[i] = data[i] * 2;
    ////     case 'string':  data[i] = data[i] + ' done';
    //// }
// }
// console.log(data)
// -----------------------------------------------------------------------------------
// #t4
// const data = [5, 10, 'Shopping', 20, 'Homework'];
// const result = [];

// for (let i=0; i<=data.length - 1; i++){
//     result[i] = data[data.length - i - 1];
// }
// console.log(result);
// -----------------------------------------------------------------------------------
// #t5
// my var
// let lines = 6;
// let result = '';

// for (let row=0; row<=6; row++){
//     for (let i = 1; i<=lines; i++){
//         result += ' ';

//         if (i == lines){result += '*'.repeat(row + 1 + 1*row) + '\n'};   
//     }
//     --lines
// }
// console.log(result);
// -----------------------------------------------------------------------------------
// tech var
// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }

// console.log(result)
// ===================================================================================
// lesson25
// const calc = (a, b) => {return a + b};

// let x = calc(10, 15);

// console.log(x)
// ===================================================================================
// lesson26
// #t2
// function returnNeighboringNumbers(num) {
//     let list = [];
//     for (let i = num - 1; i<=num+1; i++){
//         list[i - num + 1] = i;
//     }
//     console.log(list);
// }

// returnNeighboringNumbers(10);
// -----------------------------------------------------------------------------------
// #t3
// function getMathResult(a, b){
//     let result = '';
//     let last = '';

//     if (typeof(b) == 'string' || b <= 0){
//         console.log(a);
//     }else{
//         for (let i = 0; i < b; i++){
//             if (i == 0){
//                 result += a;
//             }else{
//                 last = a + a * i;
//                 result += '---' + last;
//             };
//         };
//         console.log(result);
//     }
// }

// getMathResult(5, 3);
// getMathResult(3, 10);
// ===================================================================================
// lesson28
// const text = "Test. Hello world";

// console.log(text.toUpperCase());
// console.log(text.indexOf('s'));
// console.log(text.slice(6, 11));

// const num = '12.2px';

// console.log(parseInt(num));
// console.log(parseFloat(num));
// console.log(Math.round(num));
// ===================================================================================
// lesson29
// let numberOfFilms;


// function start(){
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", 0);
//     }
// }

// start()

// const persolnalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let movie_name = prompt("Один из последних просмотренных фильмов?", ''),
//     movie_rate = +prompt("На сколько оцените его?", 0),
//     movie_name2 = prompt("Один из последних просмотренных фильмов?", ''),
//     movie_rate2 = +prompt("На сколько оцените его?", 0);

// persolnalMovieDB.movies[movie_name] = movie_rate;
// persolnalMovieDB.movies[movie_name2] = movie_rate2;


// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++){
//         const a= prompt('Один из просмотреных фильмов?',''),
//             b= prompt('Как оцените его?','');

//             if (a != null && b != null && a != '' && b != ' && ' && a.length < 50) {
//                 persolnalMovieDB.movies[a] = b;
//                 console.log ('done');
//             } else {
//                 console.log('errror');
//                 i--;
//             }
//     }
// }

// // rememberMyFilms();


// function detectPersonalLevel(){
//     if (persolnalMovieDB.count < 10) {
//         console.log('Мало');
//         } else if (persolnalMovieDB.count < 30 && persolnalMovieDB.count >= 10){
//             console.log('Normalno');
//         } else if (persolnalMovieDB.count >= 30){
//             console.log('ZBS');
//         }else { 
//             console.log("Error");
//         }
// }

// // detectPersonalLevel();

// // console.log(persolnalMovieDB);


// function showMyDB(hidden){
//     if (!hidden){
//         console.log(persolnalMovieDB);
//     }
// }

// showMyDB(persolnalMovieDB.privat);

// function writeYourGenres(){
//     for(let i = 1; i<=3; i++){
//         persolnalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();
// -----------------------------------------------------------------------------------
// #t1
// объем и площадь полной поверхности куба
// function calculateVolumeAndArea(){
    
//     let a = +prompt('Введите сторону куба', '');

//     if (a == '' || a == null || isNaN(a)){
//         console.log('При вычислении произошла ошибка');       
//     }else{
//         let volume = a * a * a;
//         let area = a * a * 6;
//         console.log(`Объем куба: ${volume}, площадь всей поверхности: ${area}`);
//     }
// }

// calculateVolumeAndArea();
// -----------------------------------------------------------------------------------
// #t2
// function getCoupeNumber(){
//     let a = prompt('Введите номер купе', '');

//     if (+a > 36 || +a === 0){
//         console.log("Таких мест в вагоне не существует");
//     }else if (isNaN(a) || a < 0 || a % 1 > 0){
//         console.log("Ошибка. Проверьте правильность введенного номера места");
//     }else if(a >= 1 && a <= 36){
//         console.log(`Ваше купе ${Math.ceil(a / 4,0)}`);
//     }
// }

// getCoupeNumber();
// -----------------------------------------------------------------------------------
// #t3
// function getTimeFromMinutes(a) {
//     if (isNaN(a) || a < 0 || a % 1 > 0){
//         console.log("Ошибка, проверьте данные");
//     }else if (a <= 600){
//         let hour = Math.floor(a/60);
//         let minute = Math.floor(a % 60);
//         let hourText = '';

//         if (hour == 1){hourText = 'час'};
//         if (hour >= 2 && hour <= 4){hourText = 'часа'};
//         if (hour >= 5){hourText = 'часов'};

//         console.log(`Это ${hour} ${hourText} ${minute} минут`);
//     }   
// }

// getTimeFromMinutes(185);
// -----------------------------------------------------------------------------------
// #t4
// function findMaxNumber(a, b, c, d) {

//     let maxNum = '';

//     if ((isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d))){
//         console.log(0);
//     }else{
//         if (a >= b){maxNum = a}else{maxNum=b};
//         if (c >= maxNum){maxNum = c};
//         if (d >= maxNum){maxNum = d};
//         console.log(maxNum);
//     }

// }

// findMaxNumber(1, 1.1, 2.5, 101)
// -----------------------------------------------------------------------------------
// // #t4
// function fib(a) {
//     if (isNaN(a) || a < 0 || a % 1 > 0){
//         console.log("Ошибка, проверьте данные");
//     }else{
//         let fibResult = '';
//         for (let i = 0; i <= a - 1; i++){
//             if (i == 0){fibResult += i}else 
//             if (i == 1){fibResult += ' ' + i}else{
//                 let lastValue1 = i - 1,
//                     lastValue2 = i - 2;
//                 console.log(lastValue2, lastValue1);
//                 let lastValue = lastValue1 + lastValue2;

//                 fibResult += ' ' + lastValue;
//             }
//         }
//         console.log(fibResult);
//     }
// }

// fib(5);
// ===================================================================================
// lesson32
const options = {
    name: 'test',
    width: 1024,
    hight: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function(){
        console.log('Test');
    }
};

// delete options.name;

for (let key in options){
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}

// вывести все ключи объекта в массив
console.log(Object.keys(options));

// количество ключей объекта в массив
console.log(Object.keys(options).length);

// вывести созданный прототип объекта
options.makeTest();

// получить значение ключей вложенных объектов в объект
const {border, bg} = options.colors;
console.log(border, bg)