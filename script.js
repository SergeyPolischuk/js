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
// // #t4 (задача с собеседования)
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
// const options = {
//     name: 'test',
//     width: 1024,
//     hight: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function(){
//         console.log('Test');
//     }
// };

// // delete options.name;

// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }

// // вывести все ключи объекта в массив
// console.log(Object.keys(options));

// // количество ключей объекта в массив
// console.log(Object.keys(options).length);

// // вывести созданный прототип объекта
// options.makeTest();

// // получить значение ключей вложенных объектов в объект
// const {border, bg} = options.colors;
// console.log(border, bg);
// ===================================================================================
// lesson33

// const arr = [1, 2, 3, 6, 8];

// arr.pop();
// arr.push(100);

// console.log(arr);
// -----------------------------------------------------------------------------------
// // получить каждый из элементов массива (вариант1)
// for (let i = 0; i < arr.length ; i++){
//     console.log(arr[i]);
// }

// // получить каждый из элементов массива (вариант2)
// for (let value of arr){
//     console.log(value);
// }

// // получить каждый из элементов массива (вариант3)
// arr.forEach(function(value, i, arr){
//     console.log(`${i} элемент: ${value} внутри массива ${arr}`)
// });
// -----------------------------------------------------------------------------------
// // преобразовать строку в массив по разделителю
// const str = 'apple, banana, grapes, mango, orange';
// const fruits = str.split(', ');

// console.log(fruits);

// // преобразовать массив в строку по разделителю
// const listOfFruits = ['apple', 'banana', 'grapes', 'mango', 'orange']
// const strFruits = listOfFruits.join(' ');

// console.log(strFruits);
// -----------------------------------------------------------------------------------
//  сортировка массива
// const numsList = [2, 13, 26, 8, 10];

// numsList.sort(compareNumber);
// console.log(numsList);

// function compareNumber(a, b) {
//     return a - b;
//   }
// ===================================================================================
// lesson35

// let a = 5,
//     b = a;

// b += 5;

// console.log(b);
// console.log(a);
// // -----------------------------------------------------------------------------------
// const obj = {
//     a: 5,
//     b: 1
// }

// const copy_obj = obj;   //передача значения по ссылке на объект (копия объекта не создается)
// copy_obj.a = 10;

// console.log(copy_obj);
// console.log(obj);
// // -----------------------------------------------------------------------------------
// // создание копию объекта (клонирование) - создается поверхностная копия объекта (не глубокая копия!)
// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }
// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);
// newNumbers.a = 100;

// console.log(newNumbers);
// console.log(numbers);
// // -----------------------------------------------------------------------------------
// // объединение объектов
// const add = {
//     d: 17,
//     e: 20
// };

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);

// clone.d = 20;

// console.log(add);
// console.log(clone);
// // -----------------------------------------------------------------------------------
// // создание копию объекта (клонирование) - создается глубокая копия объекта

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'xyz';
// console.log(newArray);
// console.log(oldArray);
// // -----------------------------------------------------------------------------------
// оператор расшриения ...
// const video = ['youtube', 'vimeo', 'pornhub'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'facebook'];

// console.log(internet);

// function log(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];
// log(...num);
// // -----------------------------------------------------------------------------------
// #t1
// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     }
// };

// function showExperience(plan) {
//     // вытягивание свойства объекта по ключу
//     console.log(plan.skills.exp);

//     // деструктуризация объекта
//     const { exp } = plan.skills;
//     console.log(exp);

//     // разобрать объект на ключи var1
//     for (let value of Object.entries(plan)){
//         console.log(value);
//     }

//     // разобрать объект на ключи var2
//     for (let value in plan){
//         console.log(value);
//     }
// }

// showExperience(personalPlanPeter);
// // -----------------------------------------------------------------------------------
// #t2
// var1
// function showProgrammingLangs(plan) {
//     let { programmingLangs } = plan.skills;

//     let str = '';

//     for (let value of Object.entries(programmingLangs)){
//         str += `Язык ${value[0]} изучен на ${value[1]} `;
//     }
//     console.log(str);
// }

// showProgrammingLangs(personalPlanPeter);

// var2
// function showProgrammingLangs(plan) {
//     let { programmingLangs } = plan.skills;

//     let str = '';

//     for (let value in programmingLangs){
//         str += `Язык ${value} изучен на ${programmingLangs[value]} `;
//     }
//     console.log(str);
// }

// showProgrammingLangs(personalPlanPeter);
// // -----------------------------------------------------------------------------------
// #t3
// var1

// personalPlanPeter.showAgeAndLangs = function(){
//     console.log(`Мне ${personalPlanPeter.age} и я владею языками: ${personalPlanPeter.skills.languages.join(' ').toUpperCase()}`);
// };

// personalPlanPeter.showAgeAndLangs();

// var2

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let str = `Мне ${age} и я владею языками: `;

//         languages.forEach(function(lang) {
//             str += `${lang.toUpperCase()} `;
//         });

//         return str;
//     }
// };

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);
// // -----------------------------------------------------------------------------------
// #t4
// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     if (arr.length > 0){
//         console.log(`Семья состоит из: ${arr.join(' ')}`);
//     }else{
//         console.log('Семья пуста');
//     }   
// }

// showFamily(family);
// // -----------------------------------------------------------------------------------
// #t5
// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     for (let i = 0; i < arr.length; i++){
//         console.log(arr[i].toLowerCase());
//     }
// }

// standardizeStrings(favoriteCities);
// // -----------------------------------------------------------------------------------
// #t5 (задача с собеседования)
// Функцию reverse, которая принимает в себя строку и возвращает эту строку в обратном порядке.
// const someString = 'This is some strange string';

// // var1
// function reverse(str) {
//     let strReverse = '';

//     if (typeof(str) != 'string'){
//         strReverse = 'Ошибка!';
//     }else{
//         for (let i = 0; i < str.length; i++){
//             strReverse += str[str.length - i - 1];
//         }
//     }
//     console.log(strReverse);
// }

// // var2
// function reverse(str) {

//     let strReverse = '';

//     if (typeof(str) != 'string'){
//         strReverse = 'Ошибка!';
//     }else{
//         let strArray = [...str];
//         strReverse = strArray.reverse().join('');
//     }
//     console.log(strReverse);
// }

// reverse(someString);
// // -----------------------------------------------------------------------------------
// #t6
// const baseCurrencies = ['USD', 'EUR', 'CNY'];
// const additionalCurrencies = ['UAH', 'RUB'];

// function availableCurr(arr, missingCurr) {
//     if (arr.length == 0){
//         console.log('Нет доступных валют');
//     }else{
//         arr.forEach(function (value) {
//             if (missingCurr.length != 0){
//                 missingCurr.forEach(function (value2){

//                     if (value == value2){
//                         arr.splice(arr.indexOf(value), 1);
//                     };
//                 });
//             }
//         });

//         if (arr.length > 0){
//             console.log('Доступные валюты:');
//             arr.forEach(function (value){
//                 console.log(value);
//             });
//         }
//     }
// }

// availableCurr(baseCurrencies, additionalCurrencies);
// ===================================================================================
// lesson36
// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));
// // -----------------------------------------------------------------------------------
// const soldier = {
//     health: 400,
//     armor: 100
// };

// const Jonh = Object.create(soldier);

// // устаревший формат установки прототипа 
// // Jonh.__proto__ = soldier;

// // установить прототип для объекта
// Object.setPrototypeOf(Jonh, soldier);

// console.log(Jonh.health);

// // ===================================================================================
// // lesson37 (ООП)

// const persolnalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
//     start: function(){
//         while (persolnalMovieDB.count == '' || persolnalMovieDB.count == null || isNaN(persolnalMovieDB.count)){
//             persolnalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", 0);
//         }
//     },
//     rememberMyFilms: function(){
//         for (let i = 0; i < 2; i++){
//             const a = prompt('Один из просмотреных фильмов?',''),
//                 b = prompt('Как оцените его?','');
    
//                 if (a != null && b != null && a != '' && b != ' && ' && a.length < 50) {
//                     persolnalMovieDB.movies[a] = b;
//                     console.log ('done');
//                 } else {
//                     console.log('errror');
//                     i--;
//                 }
//         }
//     },
//     detectPersonalLevel: function(){
//         if (persolnalMovieDB.count < 10) {
//             console.log('Мало');
//             } else if (persolnalMovieDB.count < 30 && persolnalMovieDB.count >= 10){
//                 console.log('Normalno');
//             } else if (persolnalMovieDB.count >= 30){
//                 console.log('ZBS');
//             }else { 
//                 console.log("Error");
//             }
//     },
//     showMyDB: function(hidden){
//         if (!hidden){
//             console.log(persolnalMovieDB);
//         }
//     },
//     writeYourGenres: function(){
//         for(let i = 1; i<=3; i++){
//             while (persolnalMovieDB.genres[i - 1] == null || persolnalMovieDB.genres[i - 1] == '' || persolnalMovieDB.genres[i - 1].length == 0) {
//                 persolnalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//             }
//         }

//         persolnalMovieDB.genres.forEach(function(value, i){
//             console.log(`Любимый жанр #${i+1} - это ${value}`);
//         });
//     },
//     toggleVisibleMyDB: function(){
//         persolnalMovieDB.privat = (!persolnalMovieDB.privat);
//     }
// };
// // -----------------------------------------------------------------------------------
// // #t1
// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     let squareTotal = 0;

//     shoppingMallData.shops.forEach((value) => {
//         squareTotal += value.width * value.length;
//     });

//     if (squareTotal * shoppingMallData.height * shoppingMallData.moneyPer1m3 <= shoppingMallData.budget){
//         console.log('Бюджета достаточно');
//     }else{
//         console.log('Бюджета недостаточно');
//     }
// }

// isBudgetEnough(shoppingMallData);
// // -----------------------------------------------------------------------------------
// // #t2
// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'Paul'];

// function sortStudentsByGroups(arr) {
    
//     let allGroups = [],
//         group1 = [],
//         group2 = [],
//         group3 = [],
//         otherStudents = '';

//     let studentsSort = arr.sort();

//     let countStudents = 0;
//     studentsSort.forEach((name) =>{countStudents += 1;});

//     for (let i = 0; i < countStudents; i++){
            
//         if (i <= 2){group1.push(studentsSort[i]);}
//         if (i >= 3 && i <= 5){group2.push(studentsSort[i]);}
//         if (i >= 6 && i <= 8){group3.push(studentsSort[i]);}
//         else if(i == 9){
//             otherStudents += 'Оставшиеся студенты: ' + studentsSort[i];
//         }else if(i > 9){
//             otherStudents += ', ' + studentsSort[i];
//         }
//     }

//     allGroups.push(group1, group2, group3, otherStudents);

//     console.log(allGroups);
// }

// sortStudentsByGroups(students);
// ===================================================================================
// lesson38
// function createCounter() {
//     let counter = 0;

//     const myFunction = function(){
//         counter += 1;
//         return counter;
//     };
//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);
// ===================================================================================
// task1
// console.log(true > true)    //true > true >> результат false
// console.log(0 || NaN || false || null)  //результат null (т.к. все значения false)
// -----------------------------------------------------------------------------------
// task2
// function foo(a,b) {
//     const [first] = a;
//     const {eng} = b;
 
//     console.log( `${first} ${eng}`);
// }
 
// const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
// ===================================================================================
// // задачи для собеседования
// // Какое будет выведено значение: 
// let x = 5; 
// console.log( x++ ); //5

// // Чему равно такое выражение: 
// console.log([ ] + false - null + true)  //Nan >> пустой массив (string) - false (number)

// // Что выведет этот код: 
// let y = 1; let x = y = 2; console.log(x);   //2 >> конструкция присваивания читается справа-налево x = y = 2

// // Чему равна сумма
// console.log([ ] + 1 + 2);   //'12'

// // Что выведет этот код: 
// console.log( "1"[0] );  //1 >> берется 0 элемент строки

// // Чему равно 
// console.log(2 && 1 && null && 0 && undefined)   //null >> оператор && возращает значение элемента, для которого первое найденное условие было false

// // Есть ли разница между выражениями? 
// console.log((!!( 1 && 2 )) === (1 && 2));   //false >> оператор !! приводит значения к булевому типу данных >> true <> 1
// console.log(!!( 1 && 2 ));
// console.log(1 && 2);

// // Что выведет этот код: 
// console.log( null || 2 && 3 || 4 ); //3 >> приоритет && выше чем у ||, 2 && 3 >> 3; null || 3 >> 3; 3 || 4 >> 3 (или запинается на лжи)

// // Правда ли что a == b
// let a = [1, 2, 3]; 
// let b = [1, 2, 3];
// console.log(a == b);    //false >> считается как 2 отдельных объекта

// // Что выведет этот код: 
// console.log( +"Infinity" ); //Infinity

// // Верно ли сравнение: 
// console.log("Ёжик" > "яблоко"); //false >> происходит посимвольное сравнение по таблице Unicode 

// // Чему равно 
// console.log(0 || "" || 2 || undefined || true || falsе);  //2 >> "" пустая строка false
// ===================================================================================
// lesson
// task1

// const restorantData = {
//     menu: [
//         {
//             name: 'Salad Caesar',
//             price: '14$'
//         },
//         {
//             name: 'Pizza Diavola',
//             price: '9$'
//         },
//         {
//             name: 'Beefsteak',
//             price: '17$'
//         },
//         {
//             name: 'Napoleon',
//             price: '7$'
//         }
//     ],
//     waitors: [
//         {name: 'Alice', age: 22}, {name: 'John', age: 24}
//     ],
//     averageLunchPrice: '20$',
//     openNow: true
// };

// function isOpen(prop) {
//     let answer = '';
//     prop ? answer = 'Открыто' : answer = 'Закрыто';

//     return answer;
// }

// console.log(isOpen(restorantData.openNow));

// function isAverageLunchPriceTrue(fDish, sDish, average) {  

//     if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
//         return 'Цена ниже средней';
//     } else {
//         return 'Цена выше средней';
//     }
// }

// console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

// function transferWaitors(data) {
//     const copy = Object.assign({}, data);    

//     // copy.waitors[0] = {name: 'Mike', age: 32};
//     // return copy;
// }

// transferWaitors(restorantData);



// function decryptMessage(message) {
//     // write code here
//     let strReverse = '';
    
//     for (let i = 0; i < message.length; i++){
//         strReverse += message[message.length - i - 1];
//     }
//     console.log(strReverse);
//   }
  
  
//   // 'We like drinking beer!!!'
//   decryptMessage('!!!reeb gniknird ekil eW');
  
//   // 'A coronavirus pandemic will be in 2020'
//   decryptMessage('0202 ni eb lliw cimednap surivanoroc A');
  
// ===================================================================================
// mate academy - exam1
// function isWerewolf(target) {
//     // write code here
//     let strReverse = '';
//     let str = target.toLowerCase().split(' ').join('').split(',').join('');

//     for (let i = str.length - 1; i >= 0; i--){
//         strReverse += str[i];
//     }

//     if (str == strReverse){
//         console.log(`${true} ('${str}' -> '${strReverse}')`);
//     }else{
//         console.log(`${false} ('${str}' -> '${strReverse}')`);
//     }
// }

// isWerewolf('rotator'); // true ('rotator' -> 'rotator')
// isWerewolf('home'); // false ('home' -> 'emoh')
// isWerewolf('Racecar'); // true (регистр игнорируется)
// isWerewolf('eva, can i see bees in a cave'); // true (пробелы и знаки препинания игнорируются)
// isWerewolf('Was it a rat I saw?');

// ===================================================================================
// mate academy - exam2
// function getSuccessRate(statistic) {
//     // write code here

//     let strCount = 0;

//     if (statistic == ''){
//         return 0;
//     }else{
//         for (let val of statistic){
//             strCount += +val;
//         }

//         return Math.round(strCount / statistic.length * 100);
//     }
// }

// getSuccessRate('11100'); // 60
// getSuccessRate('1100'); // 50
// getSuccessRate('000000'); // 0
// getSuccessRate('11111'); // 100
// getSuccessRate(''); // 0
// ===================================================================================
// mate academy - exam3
// function getLargestExpressionResultOfTwo(a, b) {
//     // write code here
//      let result = a + b;
  
//     if (a - b > result){
//       result = a - b;
//     };
//     if (a * b > result ){
//       result = a * b;
//     }
//     return result    ;
//   }
// getLargestExpressionResultOfTwo();

// ===================================================================================
// mate academy - exam4
// function getLargestExpressionResult(a, b){
//     let maxVal = a + b;

//     //     let result = a + b;
//     //     if (result < a - b) {
//     //       result = a - b
//     //     } 
//     //     if (result < a * b) {
//     //       result = a * b
//     //     }
//     //     if (result < a / b) {
//     //       result = a / b
//     //     }
//     //     console.log(result);


//     if (a - b > maxVal){maxVal = a - b};
//     if (a * b > maxVal){maxVal = a * b};
//     if (a / b > maxVal){maxVal = a / b};

//     return maxVal;
// } 

// getLargestExpressionResult(10, 5); // 50 
// getLargestExpressionResult(10, -5); // 15
// // ===================================================================================
// // mate academy - exam5
// function calculateProfit(amount, percent, period) {
//     // write code here
//     let totalSum = amount;
//     let i = 0;
  
//     if (amount != 0 && percent != 0 && period != 0){
//         do {
//           totalSum += totalSum * percent/100;
//           i++;
//         } while (period > i);
  
//         return Math.floor(totalSum - amount);
//       }else{
//         return 0
//       }
//     }
  
  
//   calculateProfit(1000, 5, 1); // 50
//   calculateProfit(12500, 3, 12); // 5322
//   calculateProfit(1000, 5.5, 7); // 454
//   calculateProfit(8000, 5, 0); // 454
// ===================================================================================
// // mate academy - exam6
// function isSorted(boxNumbers) {
//     // write code here
//     let result = true;

//     if (boxNumbers.length > 1){
//         for(let i = 0; i < boxNumbers.length - 1; i++){
//             if(boxNumbers[i] <= boxNumbers[i + 1]){
//                 result = true;
//             }else {
//                 result = false;
//                 break;
//             }
//         }
//     }
//     console.log(result);
//   }
  
// isSorted([1, 2, 3, 4, 5]); // true
// isSorted([0, 1, 1, 1, 2]); // true
// isSorted([1, 2, 11]); // true
// isSorted([5]); // true
// isSorted([]); // true
// isSorted([0, 3, 1, 2, 2, 2]); // false
// isSorted([1, 11, 2]); // false
// // ===================================================================================
// // mate academy - exam7
// Реализуй функцию getSpeedStatistic, которая принимает массив скоростей роботов testResults и возвращает статистику в виде массива, в котором:

// первый элемент — самая низкая скорость;
// второй элемент — самая высокая скорость;
// третий элемент — среднее значение всех скоростей, округленное вниз (используй Math.floor).
// Обрати внимание: если входной массив скоростей пуст — верни массив [0, 0, 0].

// function getSpeedStatistic(testResults) {
// // write code here

//     if (testResults.length === 0) {
//         return [0,0,0];
//     }

//     let min = testResults[0];
//     let max = testResults[0];
//     let sum = 0;

//     for(let element of testResults) {
//         sum += element;

//         if (element > max) {
//             max = element;
//         } if (element < min) {
//             min = element;
//         }
//     }

//     let average = Math.floor(sum / testResults.length);
//     return [min, max, average];
// }

// getSpeedStatistic([]); // [0, 0, 0]
// getSpeedStatistic([10]); // [10, 10, 10]
// getSpeedStatistic([8, 9, 3, 12]); // [3, 12, 8]
// getSpeedStatistic([10, 10, 11, 9, 12, 8]); // [8, 12, 10]
// // ===================================================================================
// // mate academy - exam7
// Давай напишем функцию compareRobots, которая получает два массива. 
// Первый массив firstRobotResults — это веса грузов, перевезенных за день первым роботом, 
// второй secondRobotResults — соответственно, вторым.
// Проверь, кто из роботов может перевезти больший вес, и верни строку с рекомендацией, кого из роботов стоит купить:
// function compareRobots(firstRobotResults, secondRobotResults) {
//     // write code here
//     let firstRobotMass = 0,
//         secondRobotMass = 0,
//         firstReply = 'Both robots for sale!',
//         secondReply = 'First robot for sale!',
//         thirdReply =  'Second robot for sale!';

//     for( let i = 0; i < firstRobotResults.length; i++){
//         firstRobotMass += firstRobotResults[i];
//     }
//     for( let j = 0; j < secondRobotResults.length; j++){
//         secondRobotMass += secondRobotResults[j];
//     }
//     if(firstRobotMass === secondRobotMass){
//         console.log( firstReply);
//     }else if(firstRobotMass > secondRobotMass){
//         console.log( secondReply);
//     } else{
//         console.log(thirdReply) ;
//     }
//   }
  
// compareRobots([12, 4, 13], [1, 1, 4, 5, 12]); // 'First robot for sale!' (29 > 23)
// compareRobots([9, 7, 9], [1, 3, 4, 5, 12]); // 'Both robots for sale!' (25 = 25)
// compareRobots([1, 3, 4], [1, 1, 4, 5]); // 'Second robot for sale!' (8 < 11)

// // ===================================================================================
// // mate academy - exam8
// // Напиши функцию scrollingText, которая:
// // принимает строку word;
// // последовательно переставляет все символы в строке с нулевого индекса на последний;
// // возвращает массив с полученными комбинациями этой строки в верхнем регистре.

// function scrollingText(word) {
//     let wordUpper = word.toUpperCase(),
//         wordModified = wordUpper,
//         arr = [wordUpper];

//     for (let i = 0; i < wordUpper.length - 1; i++){
//         // console.log(wordUpper[i]);

//         wordModified = wordModified.slice(1) + wordUpper[i];
//         arr.push(wordModified);
//     }
//     console.log(arr);
// }

// scrollingText('robot'); // [ 'ROBOT', 'OBOTR', 'BOTRO', 'OTROB', 'TROBO' ]

// // ===================================================================================
// // mate academy - exam9
// // Создай функцию isSpecialNumber, которая принимает положительное число n и определяет, является ли оно особенным.
// // Число называется особенным, если каждая его цифра не больше чем 5 (0, 1, 2, 3, 4 или 5).
// // Функция должна возвращать строку 'Special!!', если число особенное, и 'NOT!!' – если нет.

// function isSpecialNumber(n) {
//     let str = '' + n,
//         result = 'Special!!';

//     for (let i = 0; i < str.length; i++){
//         if (str[i] < 0 || str[i] > 5){
//             result = 'NOT!!';
//         }
//     }

//     console.log(result);
// }
  
// isSpecialNumber(2); // 'Special!!'  // 2 — находится в интервале от 0 до 5
// isSpecialNumber(9); // 'NOT!!'  // 9 > 5
// isSpecialNumber(23); // 'Special!!'  // все цифры числа 23 находятся в интервале от 0 до 5
// isSpecialNumber(38); // 'NOT!!'  // 8 > 5

// // ===================================================================================
// // mate academy - exam10
// // Давай проверим, все ли наши числа опрятные. Число считается опрятным, если каждая его цифра не меньше предыдущей.
// // Реализуй функцию isTidy, которая принимает положительное число number и возвращает true, если оно опрятное, иначе — false.

// function isTidy(number) {
//     let str = '' + number,
//         result = true;

//     for (let i = 0; i < str.length; i++){
//         if (+str[i] > +str[i + 1]){
//             result = false;
//         }
//     }
//     console.log(result);
// }

// isTidy (12); // true // цифры расположены по возрастатанию
// isTidy (32); // false // цифры расположены в убывающем порядке 
// isTidy (1024); // false // 1 > 0
// isTidy(3445); // true // одинаковые цифры могут стоять рядом
// isTidy (13579); // true // цифры расположены по возрастатанию


// // ===================================================================================
// // mate academy - exam11
// Реализуй функцию isJumping, которая принимает число number и возвращает строку 'JUMPING', 
// если каждая цифра в числе отличается от соседней на 1. Если условие не выполняется — строку 'NOT JUMPING'.
// исходное число всегда положительное;
// разница между 9 и 0 не равна 1;
// если рядом стоят одинаковые цифры, то число 'NOT JUMPING';
// если число состоит из одной цифры - оно JUMPING.

// function isJumping(number) {
//     let str = '' + number,
//         result = 'JUMPING';

//     if (str.length > 1){
//         for (let i = 1; i < str.length; i++){

//             if (Math.abs(+str[i - 1] - +str[i]) > 1){
//                 result = 'NOT JUMPING';
//             }
//         }
//     }
//     console.log(result);

//   }


// isJumping(9); // 'JUMPING' // число из одной цифры
// isJumping(79); // 'NOT JUMPING' // 7 и 9 отличаются на 2 а не на 1
// isJumping(23454); // 'JUMPING' // все cоседние цифры отличаются на 1
// isJumping(90); // 'NOT JUMPING'
