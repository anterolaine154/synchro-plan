/**
 * Filename: complexCode.js
 * Description: A complex and elaborate JavaScript code example
 * Author: CodeBot
 */

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(`Hi, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

// Class representing a car
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  startEngine() {
    console.log(`Starting the ${this.make} ${this.model}'s engine.`);
  }
}

// Function to calculate the sum of an array
function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Function to display a pyramid pattern
function displayPyramid(rows) {
  let pyramid = "";
  for (let i = 1; i <= rows; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j + " ";
    }
    pyramid += row + "\n";
  }
  console.log(pyramid);
}

// Array of fictional person objects
const people = [
  new Person("John Doe", 30),
  new Person("Jane Smith", 25),
  new Person("Michael Johnson", 40),
];

// Array of fictional car objects
const cars = [
  new Car("Toyota", "Camry", 2018, "Silver"),
  new Car("Honda", "Civic", 2020, "Red"),
  new Car("Ford", "Mustang", 2019, "Yellow"),
];

// Calculate the sum of numbers in an array
const numbers = [1, 2, 3, 4, 5];
const sum = calculateSum(numbers);
console.log("Sum:", sum);

// Display a pyramid pattern
const numRows = 5;
displayPyramid(numRows);

// Greet each person and start the engine of each car
for (let i = 0; i < people.length; i++) {
  people[i].sayHi();
}

for (let i = 0; i < cars.length; i++) {
  cars[i].startEngine();
}

// ...
// More advanced and complex code can go here
// ...

// End of code
console.log("End of code execution.");