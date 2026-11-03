/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 2: Operators, Type Conversion and a Calculator
*/

// ============================================================================
// ASSIGNMENT 2 — TASK 1: Perform arithmetic operations
// Run this task section separately with Node.js.
// ============================================================================

const a = 17;
const b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);


// ============================================================================
// ASSIGNMENT 2 — TASK 2: Convert between text and numbers
// Run this task section separately with Node.js.
// ============================================================================

const textNumber = "12";
console.log(Number(textNumber) + 5);

const numberValue = 7;
console.log(String(numberValue) + "3");


// ============================================================================
// ASSIGNMENT 2 — TASK 3: Select an operation with if and else if
// Run this task section separately with Node.js.
// ============================================================================

const a = 8;
const b = 4;
const operator = "+";

if (operator === "+") {
  console.log(a + b);
} else if (operator === "-") {
  console.log(a - b);
} else if (operator === "*") {
  console.log(a * b);
} else if (operator === "/") {
  console.log(a / b);
} else {
  console.log("Invalid operator");
}
