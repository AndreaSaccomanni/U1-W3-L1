/* ESERCIZIO 1
  Scrivi una funzione per concatenare due stringhe ricevute come parametri, selezionando solamente i primi 2 caratteri della
  prima e gli ultimi 3 della seconda. Converti la stringa risultante in maiuscolo e mostrala con un console.log().
*/
console.log("_____Esercizio 1_____");
const concatString = function (string1, string2) {
  string1 = string1.slice(0, 2);
  string2 = string2.slice(-3);
  const newString = string1.concat(string2);
  const newStringUpperCase = newString.toUpperCase();
  return newStringUpperCase;
};
console.log(concatString("epicode", "school"));

/* ESERCIZIO 2 (for)
  Scrivi una funzione che torni un array di 10 elementi; ognuno di essi deve essere un valore random compreso tra 0 e 100 (incluso).
*/ console.log("_____Esercizio 2_____");

const randomNum = function () {
  let array = [];
  for (let i = 0; i < 10; i++) {
    let newNum = Math.floor(Math.random() * 101);
    array.push(newNum);
  }
  return array;
};
let randomArr = randomNum();
console.log(randomArr);
/* ESERCIZIO 3 (filter)
  Scrivi una funzione per ricavare solamente i valori PARI da un array composto da soli valori numerici
*/
console.log("_____Esercizio 3_____");
function evenNum(array) {
  return array.filter(function (number) {
    return number % 2 === 0;
  });
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = evenNum(numbers);
console.log(evenNumbers);

/* ESERCIZIO 4 (forEach)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/ console.log("_____Esercizio 4_____");

const sumArrNum = function (array) {
  /*ciclo forEach*/
  let newSum = 0;
  array.forEach((number) => {
    newSum += number;
  });
  return newSum;

  /*Ciclo for
  /*let newSum = 0;
  for (let i = 0; i < array.length; i++) {
    newSum += array[i];
  }
  return newSum;*/
};
const numbers1 = [1, 4, 10];
const numbers1Sum = sumArrNum(numbers1);
console.log("La somma totale dei numeri nell array è: ", numbers1Sum);

/* ESERCIZIO 5 (reduce)
  Scrivi una funzione per sommare i numeri contenuti in un array
*/ console.log("_____Esercizio 5_____");

/* ESERCIZIO 6 (map)
  Scrivi una funzione che, dato un array di soli numeri e un numero n come parametri, ritorni un secondo array con tutti i valori del precedente incrementati di n
*/ console.log("_____Esercizio 6_____");

const nArray = function (array, n) {
  const nSum = array.map((num) => num + n);
  return nSum;
};
const numbers2 = [1, 2, 3, 4, 5, 6];
console.log(nArray(numbers2, 2));

/* ESERCIZIO 7 (map)
  Scrivi una funzione che, dato un array di stringhe, ritorni un nuovo array contenente le lunghezze delle rispettive stringhe dell'array di partenza
  es.: ["EPICODE", "is", "great"] => [7, 2, 5]
*/ console.log("_____Esercizio 7_____");

const stringArray = function (array) {
  const newstringArr = array.map((string) => string.length);
  return newstringArr;
};

let string1 = ["ciao", "come", "stai?"];
console.log(stringArray(string1));

/* ESERCIZIO 8 (forEach o for)
  Scrivi una funzione per creare un array contenente tutti i valori DISPARI da 1 a 99.
*/ console.log("_____Esercizio 8_____");

function createOddNumArray() {
  let oddNumbers = [];

  for (let i = 1; i <= 99; i++) {
    if (i % 2 !== 0) {
      oddNumbers.push(i);
    }
  }

  return oddNumbers;
}
const oddNumbersArray = createOddNumArray();
console.log(oddNumbersArray);

/* Questo array di film verrà usato negli esercizi a seguire. Non modificarlo e scorri oltre per riprendere gli esercizi :) */
const movies = [
  {
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    imdbID: "tt0120737",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Return of the King",
    Year: "2003",
    imdbID: "tt0167260",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings: The Two Towers",
    Year: "2002",
    imdbID: "tt0167261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
  },
  {
    Title: "Lord of War",
    Year: "2005",
    imdbID: "tt0399295",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "Lords of Dogtown",
    Year: "2005",
    imdbID: "tt0355702",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
  },
  {
    Title: "The Lord of the Rings",
    Year: "1978",
    imdbID: "tt0077869",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1990",
    imdbID: "tt0100054",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
  },
  {
    Title: "The Lords of Salem",
    Year: "2012",
    imdbID: "tt1731697",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
  },
  {
    Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
    Year: "1984",
    imdbID: "tt0087365",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
  },
  {
    Title: "Lord of the Flies",
    Year: "1963",
    imdbID: "tt0057261",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
  },
  {
    Title: "The Avengers",
    Year: "2012",
    imdbID: "tt0848228",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Infinity War",
    Year: "2018",
    imdbID: "tt4154756",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Age of Ultron",
    Year: "2015",
    imdbID: "tt2395427",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
  },
  {
    Title: "Avengers: Endgame",
    Year: "2019",
    imdbID: "tt4154796",
    Type: "movie",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
  },
];

/* ESERCIZIO 9 (forEach)
  Scrivi una funzione per trovare il film più vecchio nell'array fornito.
*/ console.log("_____Esercizio 9_____");
const oldestMovie = function (array) {
  //smallestElement verrà utilizzato per essere confontato con tutti gli altri elementi degli array e risulterà il più piccolo
  let smallestElement = array[0];
  array.forEach((film) => {
    if (parseInt(film.Year) < parseInt(smallestElement.Year)) {
      smallestElement = film;
    }
  });
  return smallestElement;
};
console.log(oldestMovie(movies));

/* ESERCIZIO 10
  Scrivi una funzione per ottenere il numero di film contenuti nell'array fornito.
*/ console.log("_____Esercizio 10_____");

const totMovies = function (array) {
  return array.length;
};
totFilm = totMovies(movies);
console.log(totFilm);

/* ESERCIZIO 11 (map)
  Scrivi una funzione per creare un array con solamente i titoli dei film contenuti nell'array fornito.
*/ console.log("_____Esercizio 11_____");
const onlyTitle = function (array) {
  let arrayOnlyTitle = [];
  for (let i = 0; i < array.length; i++) {
    let onlyTitle = array[i].Title;
    //verifico se onlyTitle, quindi la prorpietà.Title di ogni oggetto presente nell'array esiste. Se esiste la mette nell'array vuoto arrayOnlyTitle
    if (onlyTitle) {
      arrayOnlyTitle.push(onlyTitle);
    }
  }
  return arrayOnlyTitle;
};
let titleMovie = onlyTitle(movies);
console.log("Con il ciclo for: ", titleMovie);

const onlyTitle1 = function (array) {
  return array.map(function (obj) {
    // entra nell'array che fornirò dopo e in ogni elemento(ogni oggetto) prende la proprietà .Title
    return obj.Title;
  });
};
let titleMovie1 = onlyTitle(movies);
console.log("con il metodo.map: ", titleMovie1);

/* ESERCIZIO 12 (filter)
  Scrivi una funzione per ottenere dall'array fornito solamente i film usciti nel millennio corrente.
*/ console.log("_____Esercizio 12_____");
const only2000 = function (array) {
  let array2000 = [];
  for (let i = 0; i < array.length; i++) {
    let OnlyFilm2000 = array[i].Year;
    if (OnlyFilm2000 >= 2000) {
      array2000.push(array[i]);
    }
  }
  return array2000;
};
let year2000 = only2000(movies);
console.log("con il ciclo for: ", year2000);

const filterOnly2000 = function (array) {
  return array.filter(function (obj) {
    return obj.Year >= 2000;
  });
};
let year2000_1 = filterOnly2000(movies);
console.log("con il metodo filter: ", year2000_1);
/* ESERCIZIO 13 (reduce)
  Scrivi una funzione per calcolare la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array fornito.
*/ console.log("_____Esercizio 13_____");

const yearSum = function (array) {
  return array.reduce(function (sumOfTheYear, film) {
    return sumOfTheYear + parseInt(film.Year);
  }, 0); //Se il primo elemento dell'array non è del tipo giusto (è una stringa e non un numero) da errore. quindi assegno un valore di default a sumOfTheYear
};
const totYear = yearSum(movies);
console.log(totYear);

/* ESERCIZIO 14 (find)
  Scrivi una funzione per ottenere dall'array fornito uno specifico film (la funzione riceve un imdbID come parametro).
*/ console.log("_____Esercizio 14_____");
const findMovie = function (array, imdbID) {
  const movie = array.find((movie) => movie.imdbID === imdbID);
  return { title: movie.Title, year: movie.Year };
};
console.log(findMovie(movies, "tt4154796"));

/* ESERCIZIO 15 (findIndex)
  Scrivi una funzione per ottenere dall'array fornito l'indice del primo film uscito nell'anno fornito come parametro.
*/ console.log("_____Esercizio 15_____");

const movieIndexFromYear = function (array, year) {
  const movieIndex = array.findIndex((movie) => movie.Year === year);
  return movieIndex;
};
const year = "2005";
console.log(`l indice del primo film uscito nel ${year} è: `, movieIndexFromYear(movies, "2005"));
