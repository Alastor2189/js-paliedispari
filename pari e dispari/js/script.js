// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// richiesta della scelta all'utente

const userEvOd = prompt("Scegli pari o dispari")
const userNumber = parseInt(prompt("Digita un numero che va da 1 a 5"));

//generare un numero casuale del computer

const randomNumber = getRndInteger(1, 5);
console.log(randomNumber);

// somma dei numeri

const resultSum = randomNumber + userNumber;
console.log(resultSum);

//controllo che sia pari o dispari

const sumOddEven = evenOrOdd(resultSum);
console.log(sumOddEven);

//visualizzare chi ha vinto

if (sumOddEven === userEvOd) {
    console.log("hai vinto");
} else {
    console.log("hai perso");
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * 
 * @param {Number} numberToCheck
 * @returns {String}  
 */

function evenOrOdd(numberToCheck) {
    let EvenorOdd = "dispari";
    if (numberToCheck % 2 === 0) {
        EvenorOdd = "pari";

    }
    return isEvenorOdd;
}