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
const guy = new Person("John", 27);
console.log(guy.introduce());

// 3
guy.name = "Carl";
guy.age += 12;

// 4
console.log("\n4.\n- - -");
console.log(guy.introduce());

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
console.log(employee.introduce());

// 3

employee.name = "Chris";
employee.age = 36;

// 4
console.log("\n4.\n- - -");
console.log(employee.introduce());
