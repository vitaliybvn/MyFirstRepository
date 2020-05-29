"use strict";



//alert(' ну здорово');
//confirm('are yuo here???');


// ПЕРВАЯ ДОМАШКА
let NumberOfFilms;


function start() {
   NumberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');

   while (NumberOfFilms == '' || NumberOfFilms == null || isNaN(NumberOfFilms)) {
      NumberOfFilms = +prompt('сколько фильмов вы уже посмотрели', '');
   }
}
start();

let PersonalMovieDB = {
   count: NumberOfFilms,
   movies: {},
   actors: {},
   genres: [],
   private: true
};

// const a = prompt('один из последних просмотренных фильмов?' , '');
// const b = prompt('на сколько оцените его', '');
// const c = prompt('один из последних просмотренных фильмов?' , '');
// const d = prompt('на сколько оцените его', '');
// PersonalMovieDB.movies[a] = b;
// PersonalMovieDB.movies[c] = d;
// console.log(PersonalMovieDB);
//-----------------------------------------

// SWITCH case

//   let side = 888;

//   switch (side) {
//      case 50:
//         console.log('это 50');
//         break;

//       case 888:
//          console.log('сторона равна 888');
//          break;

//       default:
//             console.log('нужная сторона не найдена');
//             break;
//   }
//------------------------------------------------

// ЦИКЛЫ

function rememberMyFilms() {
   for (let i = 0; i < 2; i++) {
      const a = prompt('один из последних просмотренных фильмов?', '');
      const b = prompt('на сколько оцените его', '');
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
         PersonalMovieDB.movies[a] = b;
         console.log('done');
      } else {
         console.log('error');
         i--;
      }
   }
}
rememberMyFilms();

function detectPersonalLevel() {
   if (PersonalMovieDB.count < 10) {
      console.log('просмотренно довольно мало фильмов');
   } else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30) {
      console.log('вы классический зритель');
   } else if (PersonalMovieDB.count >= 30) {
      console.log('вы киноман');
   } else {
      console.log('произошла ошибка');
   }
}
detectPersonalLevel();

function showMyDB () {
   if(PersonalMovieDB.private == true) {
      console.log(PersonalMovieDB);
   }
}
showMyDB ();

function writeYourGenres () {
for(let i =1 ;i <= 3; i++ ) {
   const gener= prompt(`ваш любимый жанр под номером ${i}`);
   PersonalMovieDB.genres[i - 1]=gener;  
}
}
writeYourGenres ();


