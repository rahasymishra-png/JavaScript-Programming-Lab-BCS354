/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 4: Writing Functions
*/

// ============================================================================
// ASSIGNMENT 4 — TASK 1: Create and call greet()
// Run this task section separately with Node.js.
// ============================================================================

function greet(name) {
  return "Hello, " + name;
}

console.log(greet("Asha"));


// ============================================================================
// ASSIGNMENT 4 — TASK 2: Create an arrow function square
// Run this task section separately with Node.js.
// ============================================================================

const square = number => number * number;
console.log(square(6));


// ============================================================================
// ASSIGNMENT 4 — TASK 3: Use a default parameter in billWithTax()
// Run this task section separately with Node.js.
// ============================================================================

function billWithTax(amount, taxRate = 0.18) {
  return amount + amount * taxRate;
}

console.log(billWithTax(100));
