// Exercise 1

console.log("\n---------------");
console.log("   Exercise 1  ");
console.log("- - - - - - - -\n");

// 1
class Person {
  constructor(name = "Marek", age = 25) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `I'm ${this.name}, and I'm ${this.age} years old.`;
  }
}

// 2
console.log("\n2.\n- - -");
const guy = new Person("John", 27); // I'm John, and I'm 27 years old.
console.log(guy.introduce());

// 3
guy.name = "Carl";
guy.age += 12;

// 4
console.log("\n4.\n- - -");
console.log(guy.introduce()); // I'm Carl, and I'm 39 years old.

//
//
//
//
// ----
// Exercise 2

console.log("\n\n---------------");
console.log("   Exercise 2  ");
console.log("- - - - - - - -\n");

// 1

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
const employee = new Employee();
console.log(employee.introduce()); // I'm Marek, and I'm 25 years old and I work as engineer.

// 3

employee.name = "Chris";
employee.age = 36;

// 4
console.log("\n4.\n- - -");
console.log(employee.introduce()); // I'm Chris, and I'm 36 years old and I work as engineer.
