// Exercise 1

console.log("\n---------------");
console.log("   Exercise 1  ");
console.log("- - - - - - - -\n");

// 1
const car = {
  brand: "Audi",
  price: 149900,
  hp: 235,
  increasePower(val) {
    this.hp += val;
  },
};

// 2
console.log("\n2.\n- - -");
console.log(car);

// 3
car.increasePower(50);

// 4
console.log("\n3.\n- - -");
console.log(car);

// 5

function Car(brand = "Audi", price = 149900, hp = 235) {
  this.brand = brand;
  this.price = price;
  this.hp = hp;
}

Car.prototype.increasePower = function (val) {
  this.hp += val;
};

// 6
const cars = [new Car(), new Car(), new Car()];

// 7
console.log("\n7.\n- - -");
for (let i = 0; i < cars.length; i++) console.log(cars[i]);

// 8
cars[1].increasePower(166);

// 9
console.log("\n9.\n- - -");
for (let car of cars) console.log(car);

// 10
console.log("\n10.\n- - -");
console.log(cars[0].toString());
// implementacja metody w: Object.prototype.toString

// 11
Car.prototype.toString = function () {
  return `{ brand: ${this.brand}, price: ${this.price}, hp: ${this.hp} }`;
};

// 12
console.log("\n11.\n- - -");
console.log(cars[1].toString());

//
//
//
//
//
// ---
// Exercise 2

console.log("\n---------------");
console.log("   Exercise 2  ");
console.log("- - - - - - - -\n");

// 1
console.log("\n1.\n- - -");
const json = JSON.stringify(cars[1]);
console.log(json);
// metody nie są wyświetlane

// 2
console.log("\n2.\n- - -");
const object = JSON.parse(json);
console.log(object);
