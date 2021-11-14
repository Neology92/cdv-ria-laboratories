// Exercise 6

console.log("\n\n---------------");
console.log("   Exercise 6 ");
console.log("- - - - - - - -\n");

// 1
class Person {
  #name;
  #age;

  #validateAge(newAge) {
    try {
      const age = parseInt(newAge);
      if (isNaN(age)) throw new TypeError();
      if (age <= 0) throw new RangeError();
      return age;
    } catch (error) {
      switch (error.name) {
        case "TypeError":
          console.error("TypeError: age must be of number type!");
          break;

        case "RangeError":
          console.error("RangeError: age must be greater than 0!");
          break;

        default:
          console.error(error.messsage || "Something went wrong");
      }

      return this.#age;
    }
  }

  constructor(name = "Marek", age = 25) {
    this.#name = Person.formatName(name);
    this.#age = age;
  }

  introduce() {
    return `I'm ${this.getName()}, and I'm ${this.getAge()} years old.`;
  }

  setName(newName) {
    this.#name = Person.formatName(newName);
  }

  setAge(newAge) {
    this.#age = this.#validateAge(newAge);
  }

  getName() {
    return this.#name;
  }

  getAge() {
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
    return `${super.introduce().slice(0, "-1")} and I work as ${
      this.profession
    }.`;
  }
}

// 2
const employee = new Employee();

employee.setAge("asds"); // TypeError: age must be of number type!
employee.setAge("-1"); // RangeError: age must be greater than 0!
employee.setAge(-1); // RangeError: age must be greater than 0!

console.log("\nAge: ", employee.getAge()); // default age
