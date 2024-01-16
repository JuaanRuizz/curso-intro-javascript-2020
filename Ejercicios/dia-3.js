// Ejercicio 12
let frase1 = prompt("Ingrese una frase para que sea repetida 10 veces");
for (let i = 0; i < 10; i++) {
    console.log(frase);
}

// Ejercicio 13

let frase2 = prompt("Ingrese una frase que quiera repetir");
let numeroRepe = prompt("Ingrese el numero de veces que quiere que se repita la frase",);
for (let i = 0; i < numeroRepe; i++) {
    console.log(frase);
}

//Ejercicio 14
let numero1 = prompt("Ingrese un número para que se imprima desde el 1 hasta su número");
    for (let i = 1; i <= numero1; i++) {
        console.log(i);
    }

//Ejercicio 15
let numero2 = prompt("Digite el primer número");
let numero3 = prompt("Digite el segundo número");

for (let i = parseInt(numero2); i <= numero3; i++) {
    console.log(i);
}

//Ejercicio 16
let palabraMagica = prompt('Ingrese "salir" para detener el programa, de lo contrario ingrese cualquier otra cosa');
    while (palabraMagica.toLowerCase() != "salir") {
        console.log(palabraMagica);
        palabraMagica = prompt("Ingrese 'salir' para detener el programa, de lo contrario ingrese cualquier otra cosa");
    }
console.log("El programa ha sido detenido");

//Ejercicio 17

