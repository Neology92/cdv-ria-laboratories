// Exercise 5

console.log("\n\n---------------");
console.log("   Exercise 5 ");
console.log("- - - - - - - -\n");

// 1
class Person {
  #name;
  #age;

  constructor(name = "Marek", age = 25) {
    this.#name = Person.formatName(name);
    this.#age = Person.validateAge(age);
  }

  introduce() {
    return `I'm ${this.name}, and I'm ${this.age} years old.`;
  }

  set name(newName) {
    this.#name = Person.formatName(newName);
  }

  set age(newAge) {
    this.#age = Person.validateAge(newAge);
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

  static validateAge(newAge) {
    const age = parseInt(newAge);
    if (isNaN(age)) throw new TypeError();
    if (age <= 0) throw new RangeError();
    return age;
  }
}

class Employee extends Person {
  constructor(name, age, profession = "engineer") {
    super(name, age);
    this.profession = profession;
  }

  introduce() {
    return `${super.introduce().slice(0, "-1")} and I work as ${
      this.profession
    }.`;
  }
}

// 2
const employee = new Employee();

employee.age = "asd"; // throws TypeError
employee.age = "-1"; // throws RangeError
employee.age = -1; // throws RangeError

// Program kończy działanie na pierwszym napotkanym błędzie.
