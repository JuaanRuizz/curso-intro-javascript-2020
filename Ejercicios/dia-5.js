// Ejercicio 23
const phrase = prompt("Ingrese una phrase para que sea devuelta en mayuscula");
console.log(phrase.toUpperCase());

//Ejercicio 24
const phrase2 = prompt("Ingrese una frase para que sea devuelta en mayuscula");
console.log(`La phrase2 tiene ${phrase2.length} caracteres "a"`);

//Ejercicio 25
const phrase3 = prompt("Ingrese una frase para que sea devuelta en mayuscula");
let modifiedPhrase = "";
for (let i = 0; i < phrase3.length; i++) {
    let lowerCase = phrase3[i].toLowerCase();
    switch (lowerCase) {
    case "a":
        modifiedPhrase += "4";
        break;
    case "e":
        modifiedPhrase += "3";
        break;
    case "i":
        modifiedPhrase += "1";
    // eslint-disable-next-line no-fallthrough
    case "o":
        modifiedPhrase += "0";
        break;
    case "":
        break;
    default:
        modifiedPhrase += lowerCase;
    }
}
console.log(`Frase original > ${phrase3}`);
console.log(`Frase modificada > ${modifiedPhrase}`);

//Ejercicio 26
const phrase4 = prompt("Ingresa la frase");
const dividedWords = phrase4.split(" "); 
const capitalizedPhrase = dividedWords.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");  
console.log("Frase original:", phrase4);
console.log("Frase capitalizada:", capitalizedPhrase);

//Ejercicio 27
const phrase5 = prompt("Ingresa una frase");
const dividePhrase2 = phrase5.split(" ");
for (const dividePhrase of dividePhrase2){
    console.log(dividePhrase); 
}