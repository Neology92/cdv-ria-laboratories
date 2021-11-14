// Exercise 3

console.log("\n\n---------------");
console.log("   Exercise 3  ");
console.log("- - - - - - - -\n");

// 1
class Person {
  #name;
  #age;

  constructor(name = "Marek", age = 25) {
    this.#name = name;
    this.#age = age;
  }

  introduce() {
    return `I'm ${this.name}, and I'm ${this.age} years old.`;
  }

  set name(newName) {
    this.#name = newName;
  }

  set age(newAge) {
    this.#age = newAge;
  }

  get name() {
    return this.#name;
  }

  get age() {
    return this.#age;
  }
}

class Employee extends Person {
  constructor(name, age, profession = "engineer") {
    super(name, age);
    this.profession = profession;
  }

  introduce() {
    return `${super.introduce().slice(0, -1)} and I work as ${
      this.profession
    }.`;
  }
}

// 2
console.log("\n2.\n- - -");
const empl2 = new Employee();
console.log(empl2.introduce()); // I'm Marek, and I'm 25 years old and I work as engineer.

empl2.name = "Carl";
empl2.age = 66;

console.log(empl2.introduce()); // I'm Carl, and I'm 66 years old and I work as engineer.
