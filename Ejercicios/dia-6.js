//Ejercicio 29
function addition (num1, num2){
    return num1 + num2;
}
const numberaddition = addition(245, 923);
console.log(numberaddition);

//Ejercicio 30
function hola(string){
    return `Hola ${string}!`; 
}
const greeting = hola("Camilo");
console.log(greeting);

//Ejercicio 31
function bmi(weight, height) {
    return weight / height ** 2;
}
const result = bmi(72, 1.6);
console.log(result);

//Ejercicio 32
function colorCalculate (number){
    if (number === 1){
        return "El color es negro.";
    }else if (number === 2){
        return "El color es  blanco.";
    }else if (number === 3){
        return "El color es azul.";
    }else {
        return "El color es verde.";
    }
}
const colorIs = colorCalculate(1);
console.log(colorIs);

//Ejercicio 33
function capitalize (string){
    const dividedString = string.split(" ");
    const capitalizaedString = dividedString.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return capitalizaedString;
}
const capitalizaedPhrase = capitalize("mira como mira la señora desde la ventana");
console.log(capitalizaedPhrase);

//Ejercicio 34
function average(arrayCounter){
    const additionArray = arrayCounter.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const averageR = additionArray / arrayCounter.lenght;
    return averageR;
}
const array = [1, 2, 3, 4];
const averageResult = average(array);
console.log(averageResult);


