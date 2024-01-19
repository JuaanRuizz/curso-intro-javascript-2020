//Ejercicio 18
let names = ["Pedro", "Pablo", "María", "Juan", "Diana"]; //array
const name1 = prompt("Ingrese un nombre");
names.push(name1);
const name2 = prompt("Ingrese otro nombre para colocarlo en tercera posición de la lista");
if (names.length >= 3) { //Este length hace referencia a la cantidad de elementos que tiene el array
    names[2] = name2;
} else {
    console.log("No hay suficientes elementos en el arreglo para realizar el reemplazo.");
}
console.log("Elementos del arreglo después de las modificaciones:");
for (let i = 0; i < names.length; i++) {
    console.log(`Posición ${i + 1}: ${names[i]}`);
}

//Ejercicio 19
const addedNumber = parseInt(prompt("Ingresa un número:"));
let numberArray = [];
for (let i = 1; i <= addedNumber; i++) {
    numberArray.push(i);
}
if (numberArray.length >= 2) {
    numberArray.splice(1, 1); 
} else {
    console.log("No hay suficientes elementos para eliminar el segundo elemento.");
}
console.log("Arreglo de números después de eliminar el segundo elemento:");
for (let i = 0; i < numberArray.length; i++) {
    console.log(`${numberArray[i]}`);
}


//Ejercicio 20
const mat = [
    ["Pablo", "Maria", "Pedro"],
    ["Diana", "Juan", "Federico"],
    ["Roberto", "Daniel", "Sandra"]
];

for (let i = 0; i < mat.length; i++) {
    console.log(`Grupo ${i + 1}:`);
    for (let j = 0; j < mat[i].length; j++) {
        console.log(`  ${mat[i][j]}`); //[i] Para que acceda a la fila de la matriz - [j] Accede a la columna de la matriz. 
    }
}

//Ejercicio 21
const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];
for (let i = 0; i < nums.length; i++){
    if (nums[i] > 10){ //nums[i] porque esta accediendo al eleemnto en la posición i, como en el for recorremos todas las posiciones, i hace referencia a todas la posiciones
        console.log(nums[i]);
    }
}

//Ejercicio 21 con filter
const nums2 = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39];
const numsMayoresDeDiez = nums2.filter((num) => num > 10);
const nuevonums2 = numsMayoresDeDiez.map((num) => num * 2);
console.log(nuevonums2);

//Ejercicio 22
const numbers = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
let quantityof1 = 0;
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] === 1){
        quantityof1++;


    }
}
console.log(quantityof1);

//Ejercicio 22 con reduce
const numbers1 = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1];
let quantityofOne = 0;
const counter = numbers1.reduce((accumulator, currentValue) => {
    if (currentValue === 1) {
        return accumulator + 1;
    } else {
        return accumulator;
    }
}, 0);

//Qué es una expresión ternaria.
console.log(counter);


