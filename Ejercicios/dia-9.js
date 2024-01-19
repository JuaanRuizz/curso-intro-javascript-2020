//Ejercicio 46
const array = [45, "Hola", 82, 2, 67, true, "Juan", 12.34];
array.forEach(function(elemento){
    console.log(elemento);
});

//Ejercicio 47
function pairs (myArray){
    return myArray.filter((num) => num % 2 === 0);
}
const myArray = [0, 1, 2, 3, 4];
console.log(pairs(myArray));

//Ejercicio 48
function posPairs (anotherArray){
    return anotherArray.filter((elemento, index) => index % 2 === 0); //Esto no lo entiendo. qué función hace el "elemento" en la función filter y por qué si lo quito el primer array lo devuekve en blanco ???
} 
console.log(posPairs(["a", "b", "c"]));
console.log(posPairs([0, 1, 2, 3, 4])); 

//Ejercicio 49
function multiply(numbersArray, number){
    return numbersArray.map((num) => num * number);
}
console.log(multiply([1, 2, 3], 2));
console.log(multiply([7, 4], 3));
console.log(multiply([], 10));

//Ejercicio 50
function cheapProducts (objectsArray){
    return objectsArray.filter((object) => object.price <= 10 && object.price >= 5);
}
let prods = [
    { name: "Arroz", price: 5 },
    { name: "Pan", price: 3 },
    { name: "Tomate", price: 8 },
    { name: "Leche", price: 15 }
];
console.log(cheapProducts(prods));