// Exercise 4

console.log("\n\n---------------");
console.log("   Exercise 4  ");
console.log("- - - - - - - -\n");

// 1 and 2
class Person {
  #name;
  #age;

  constructor(name = "Marek", age = 25) {
    this.#name = Person.formatName(name);
    this.#age = age;
  }

  introduce() {
    return `I'm ${this.name}, and I'm ${this.age} years old.`;
  }

  set name(newName) {
    this.#name = Person.formatName(newName);
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

  static formatName(name) {
    return name[0].toUpperCase() + name.toLowerCase().slice(1);
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

// 3
console.log("\n3.\n- - -");
const empl2 = new Employee("heNRi");
console.log(empl2.introduce()); // I'm Henri, and I'm 25 years old and I work as engineer.

empl2.name = "sImoN";
empl2.age = 42;

console.log(empl2.introduce()); // I'm Simon, and I'm 42 years old and I work as engineer.
