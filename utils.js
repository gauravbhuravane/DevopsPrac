// utils.js

console.log("This is a utils file");

// Function to calculate the sum of two numbers
function calculateSum(a, b) {
    return a + b;
}

// Function to print a message
function printMessage(message) {
    console.log(message);
}

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Function to check if a number is odd
function isOdd(number) {
    return number % 2 !== 0;
}

// Function to find the maximum number in an array
function findMax(arr) {
    return Math.max(...arr);
}

// Function to find the minimum number in an array
function findMin(arr) {
    return Math.min(...arr);
}

// Adding an error at line 42 (bug)
// The next line will throw an error because 'nonExistentFunction' is not defined
const result = nonExistentFunction();  // Line 42: This will throw an error
