// Ejercicio 6
let numero2 = parseInt(prompt("Ingresa un número: "));
if (numero2 > 10) {
    console.log("El número es mayor que 10");
}else if (numero2 <= 10) {
    console.log("El número es menor o igual a 10");
}

// Ejercicio 7
let numeroRandom = Math.floor(Math.random() * 10) + 1;
let numeroAdivina = parseInt(prompt("Pensé un número del 1 al 10 ¿Podrias adivinar cúal es?"));
if (numeroAdivina === numeroRandom) {
    console.log("Felicitaciones, ese era!");
}else (numeroAdivina !== numeroRandom);
console.log("Lo siento, intenta nuevamente!");

// Ejercicio 8
let numero1 = prompt("Confirma si tu númeor es múltiplo de 5");
if (numero1 % 5 == 0) {
    console.log(`Si, el número ${numero1} es múltiplo 5`);
}else
    console.log(`No, el número ${numero1} no es múltiplo de 5`);

// Ejercicio 9
let numero3 = parseInt(prompt("Ingrese un numero"));
if (numero3 > 10) {
    console.log("El número es mayor a 10");
} else if (numero3 < 10) {
    console.log("El número es menor a 10");
} else {
    console.log("El número es igual a 10");
}   

// Ejercicio 10
let peso = prompt("Ingrese su peso en kilogramos");
let pesoNumero = parseFloat(peso);
let altura = prompt("Ingrese su altura en metros");
let alturaNumero = parseFloat(altura);
const BMI = pesoNumero / (alturaNumero ** 2);
if (BMI < 18.5) {
    console.log("Bajo de peso");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Normal");
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log("Sobrepeso");
} else {
    console.log("Obeso");
}

// Ejercicio 11
let multiplo = prompt("Ingrese un número");

if (multiplo % 5 == 0 && multiplo % 3 == 0) {
    console.log("bingbong");
} else if (multiplo % 5 == 0) {
    console.log("bong");
} else if (multiplo % 3 == 0) {
    console.log("bing");
} else {
    console.log(multiplo);
}
