// Chiedere all’utente di inserire una parola


const oneWord = prompt("Digita una parola");
// Creare una funzione per capire se la parola inserita è palindroma

const checkWordPal = isWordPal(oneWord);
console.log(isWordPal);

// Verificare se la parola è palindroma o meno
if (isWordPal)

//FUNZIONE
/**
 * Descrivi la funzione di check, verificando se la parola è palindroma o meno
 * @param {String} stringToCheck
 * @returns {Boolean} 
 */

function isWordPal(stringToCheck) {
    let reverseWord = "";

    for (let i = stringToCheck.length - 1; i >= 0; i--) {
        const thisChar = stringToCheck[i];
        reverseWord += thisChar;
    }
    console.log(reverseWord);

    let isPalindrome = false;
    if (reverseWord === stringToCheck) {
        isPalindrome = true;
    }

    return isPalindrome;

}


//Metodo alternativo
//ARRAY

// const myArray = [1, 2, 3];
// console.log(myArray);

// myArray.reverse()
// console.log(myArray);

// const anotherArray = myArray;

// let isEqual = myArray === anotherArray;
// console.log(isEqual);