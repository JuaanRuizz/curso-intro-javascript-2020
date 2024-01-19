// Ejercicio 35
let pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]  
};

console.log(pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;
for (let key in pedro) {
    console.log(key + ":" + pedro[key]); //key es la variable que se crea para que se pueda recorrer el objeto. (Es el nombre de la propiedad)
}

// Ejercicio 36
function greeting (object) {
    return object;
}
const juan = greeting({ nombre: "Juan", edad: 22 });
console.log(juan);

// Ejercicio 37
function searchProduct (objectArr, number){
    const numberId = objectArr.filter(function(product) {
        return product.id === number;
    });
    if (numberId.length > 0){
        return numberId;
    }else{
        return null;
    }
}
const products = [{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }];
console.log(searchProduct(products, 1));

// Ejercicio 38
function decipher (string, replaceObject){
    const letters = string.split("");
    for (let i = 0; i < letters.length; i++){
        const currentLetter = letters[i];
        if(replaceObject.hasOwnProperty(currentLetter)){
            letters[i] = replaceObject[currentLetter];
        }
    }
    const decipherString = letters.join("");
    return decipherString;
}

console.log(decipher("h0l4", { 0: "o", 4: "a" }));

// Ejercicio 39
function frequencies(string) {
    let freqLetters = {};
    for (let i = 0; i < string.length; i++) {
        let letter = string[i];
        if (letter !== " ") {
            freqLetters[letter] = (freqLetters[letter] || 0) + 1;
        }
    }
    return freqLetters;
}

console.log(frequencies("hola mundo"));




// Ejercicio 40 
let person = {
    peso: 65,
    altura: 1.8,
    bmi() {
        console.log(this.peso / this.altura ** 2);
    }
};

person.bmi();
