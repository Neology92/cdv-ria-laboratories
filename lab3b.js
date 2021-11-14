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
    return `I'm ${this.getName()}, and I'm ${this.getAge()} years old.`;
  }

  setName(newName) {
    this.#name = newName;
  }

  setAge(newAge) {
    this.#age = newAge;
  }

  getName() {
    return this.#name;
  }

  getAge() {
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
console.log(empl2.introduce());

empl2.setName("Carl");
empl2.setAge(66);
q;
console.log(empl2.introduce());
