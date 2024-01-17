//Ejercicio 1
let edad = prompt("¿Cuál es tu edad?");
console.log(edad);

//Ejercicio 2
let nombre = prompt ("¿Cúal es tu nombre?");
let saludo = "Hola, " + nombre + "!";
console.log(saludo);

//Ejercicio 3
let sumando1 = prompt("Ingresa un número");
let sumando2 = prompt("Ingresa otro número");
const suma = parseInt(sumando1) + parseInt(sumando2);
console.log(suma);


//Ejercicio 4 
let anyoNacimiento = parseInt(prompt("Ingrese un año"));
let anyoActual = new Date().getFullYear();
const resta = anyoActual - anyoNacimiento;  
console.log(`Tienes ${resta} años de edad.`);


//Ejercicio 5
let peso = prompt("Ingrese su peso en Kilogramos");
let pesoNumero = parseFloat(peso);
let altura = prompt("Ingrese su altura en metros");
let alturaNumero = parseFloat(altura);
let bmi = pesoNumero / (alturaNumero ** 2); 
console.log(`Tu BMI es ${bmi}`);


