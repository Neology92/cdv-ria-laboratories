// Exercise 1

// 1
const square = (a) => a * a;

// 2
const countNumbers = () => {
  const numbers = [4, 3, 456, -342, 24, 3456, 7890, 234];
  const results = [];

  results.push([]);
  for (let i = 0; i < numbers.length; i++) {
    results[0].push(square(numbers[i]));
  }

  results.push([]);
  for (let number of numbers) {
    results[1].push(square(number));
  }

  results.push([]);
  for (let i in numbers) {
    results[2].push(square(numbers[i]));
  }

  results.push([]);
  numbers.forEach(function (number) {
    results[3].push(square(number));
  });

  // 3
  results.push([]);
  numbers.forEach((number) => {
    results[4].push(square(number));
  });

  return results;
};

console.log("\n---------------");
console.log("   Exercise 1  ");
console.log("- - - - - - - -\n");
console.log(countNumbers());

//
//
//
// ---
// Exercise 2

const useBooleanFunction = () => {
  let boolVal = true;

  return () => {
    boolVal = !boolVal;
    return boolVal;
  };
};

console.log("\n---------------");
console.log("   Exercise 2  ");
console.log("- - - - - - - -\n");
const getBoolean = useBooleanFunction();
console.log(getBoolean());
console.log(getBoolean());
console.log(getBoolean());
console.log(getBoolean());
console.log(getBoolean());

//
//
//
// ---
// Exercise 3

// 1

const sum = (...values) => values.reduce((x, y) => x + y, 0);

console.log("\n---------------");
console.log("   Exercise 3  ");
console.log("- - - - - - - -\n");
console.log("\n1.\n- - -");

console.log(sum());
console.log(sum(1.1, 23, 4, 5));

// 2

const sum2 = (...args) => {
  const numbers = args
    .map((arg) => parseFloat(arg))
    .filter((arg) => !isNaN(arg));

  return numbers.length 
    ? numbers.reduce((a, b) => a + b, 0) 
    : NaN;
};

console.log("\n2.\n- - -");
console.log(sum2(3, "6", "dfdf", 1));
console.log(sum2("df", "fdf", "dfdf"));
console.log(sum2());
console.log(sum2(-3, 3));
console.log(sum2("5"));
