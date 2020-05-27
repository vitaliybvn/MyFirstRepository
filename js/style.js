"use strict";



//alert(' ну здорово');
//confirm('are yuo here???');


                    // ПЕРВАЯ ДОМАШКА
 const NumberOfFilms= +prompt('сколько фильмов вы уже посмотрели' , '');
 console.log(NumberOfFilms);


 let PersonalMovieDB = {
   count : NumberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
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

           for(let i = 0; i < 2; i++){
            const a = prompt('один из последних просмотренных фильмов?' , '');
            const b = prompt('на сколько оцените его', '');
            if(a != null && b != null && a != '' && b != '' && a.length < 50 ){
               PersonalMovieDB.movies[a] = b;
               console.log('done');
            }
            else{
               console.log('error');
               i--;
            }
           }

           if(PersonalMovieDB.count < 10){
              console.log('просмотренно довольно мало фильмов');              
           }
              else if (PersonalMovieDB.count >= 10 && PersonalMovieDB.count < 30){
               console.log('вы классический зритель');
              }
              else if(PersonalMovieDB.count >= 30){
               console.log('вы киноман');
              }
              else{
               console.log('произошла ошибка');
              }

              console.log(PersonalMovieDB);