"use strict";

// Step 01: Create Functions for Addition, Subtraction, Multiplication, and Division
// 1. **Create a function to add two numbers.**
// declare no.
let num1 = 2;
let num2 = 6;
function addition(num1, num2) {
  return num1 + num2;
}
console.log(addition(num1, num2)); // return = 8

// 2. **Create a function to subtract two numbers.**
function Subtraction(num1, num2) {
  return num1 - num2;
}
console.log(Subtraction(num1, num2)); // Output = -4

// 3. **Create a function to multiply two numbers.**
function Multiplication(num1, num2) {
  return num1 * num2;
}
console.log(Multiplication(num1, num2)); // Output = 12

// 4. **Create a function to divide two numbers.**
function divide(num1, num2) {
  if (num2 === 0) {
    return "Cannot divide by zero";
  }
  return num1 / num2;
}
console.log(divide(num1, num2)); // Output = 0.333...

// Step 02: Create a Validation Function for Inputs
function validateInputs(num1, num2) {
  if (!isNumber(num1) || !isNumber(num2)) {
    return "Both inputs must be numbers";
  }
  return null;
}
// helper function
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

// Step 03: Create a Calculator Function to Combine the Above Functions
function calculator(num1, num2, operation) {
  const validationError = validateInputs(num1, num2);
  if (validationError) {
    return validationError;
  }
  switch (operation) {
    case "add":
      return add(num1, num2);
    case "subtract":
      return subtract(num1, num2);
    case "multiply":
      return multiply(num1, num2);
    case "divide":
      return divide(num1, num2);
    default:
      return "Invalid operation. Please use 'add', 'subtract', 'multiply', or 'divide'.";
  }
}