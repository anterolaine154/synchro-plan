/* 
Filename: sophisticated_program.js

This code is a sophisticated program that calculates the prime numbers between two given numbers and performs various mathematical operations using those prime numbers.
*/

// Function to check if a number is prime
function isPrimeNumber(number) {
  if (number <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  
  return true;
}

// Function to find prime numbers between two given numbers
function findPrimesInRange(start, end) {
  const primes = [];
  
  for (let i = start; i <= end; i++) {
    if (isPrimeNumber(i)) {
      primes.push(i);
    }
  }
  
  return primes;
}

// Function to calculate the sum of an array of numbers
function calculateSum(numbers) {
  let sum = 0;
  
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  
  return sum;
}

// Function to calculate the product of an array of numbers
function calculateProduct(numbers) {
  let product = 1;
  
  for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
  }
  
  return product;
}

// Function to calculate the average of an array of numbers
function calculateAverage(numbers) {
  const sum = calculateSum(numbers);
  return sum / numbers.length;
}

// Main program
function main() {
  const start = 1;
  const end = 100;
  
  console.log(`Prime numbers between ${start} and ${end}:`);
  const primes = findPrimesInRange(start, end);
  console.log(primes);
  
  console.log(`Sum of prime numbers: ${calculateSum(primes)}`);
  console.log(`Product of prime numbers: ${calculateProduct(primes)}`);
  console.log(`Average of prime numbers: ${calculateAverage(primes)}`);
}

// Execute the main program
main();