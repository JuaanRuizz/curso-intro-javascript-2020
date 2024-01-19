// Ejercicio 41
function product(name, price) {
    this.name = name;
    this.price = price;
}
const pan = new product("Pan", 2.5);
console.log(pan.name);
console.log(pan.price);

// Ejercicio 42
function Person(name, weight, height){
    this.name = name,
    this.weight = weight,
    this.height = height,
    this.greet = function(name2){
        return `Hola ${name2}, me llamo ${this.name}`;
    };
    this.bmi = function(){
        return this.weight / this.height ** 2;
    };  
}
const pedro = new Person("Pedro", 72, 1.5);
console.log(pedro.greet("Maria"));
console.log(pedro.bmi());

// Ejercicio 43
function Car() {
    this.speed = 0;
    this.speedUp = function(number) {
        this.speed += number;
    };
    this.curb = function(number) {
        this.speed -= number;
        if (this.speed < 0) {
            this.speed = 0;
        }
    };
}

const a1 = new Car();
console.log(a1.speed);

a1.speedUp(1);
a1.speedUp(2);
console.log(a1.speed);

a1.curb(2);
console.log(a1.speed);
a1.curb(3);
console.log(a1.speed);

// Ejercicio 44
Array.prototype.average = function(){
    let add = 0;
    for(let i = 0; i < this.length; i++) {
        add = add + this[i];
    }
    return add / this.length;
};
console.log([1, 2, 3, 4].average());
console.log([7, 8, 9].average());
console.log([300, 100].average());

// Ejercicio 45
String.prototype.palindrome = function() { //PROBLMAS - TODO ME DA FALSE
    return this.split("").reverse().join("") === this;
};
console.log("anita lava la tina".palindrome());
console.log("aman a panama".palindrome());
console.log("hola mundo".palindrome());