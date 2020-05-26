"use strict";



//alert(' ну здорово');
//confirm('are yuo here???');

const NumberOfFilms= +prompt('сколько фильмов вы уже посмотрели' , '');
console.log(NumberOfFilms);


const PersonalMovieDB = {
   count : NumberOfFilms,
   movies : {},
   actors : {},
   genres : [],
   private : false
};

const a = prompt('один из последних просмотренных фильмов?' , '');
const b = prompt('на сколько оцените его', '');
const c = prompt('один из последних просмотренных фильмов?' , '');
const d = prompt('на сколько оцените его', '');
PersonalMovieDB.movies[a] = b;
PersonalMovieDB.movies[c] = d;
console.log(PersonalMovieDB);