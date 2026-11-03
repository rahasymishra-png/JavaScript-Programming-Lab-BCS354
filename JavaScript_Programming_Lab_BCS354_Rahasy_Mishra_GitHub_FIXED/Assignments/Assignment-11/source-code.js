/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 11: Scope and Closures
*/

// ============================================================================
// ASSIGNMENT 11 — TASK 1: Demonstrate block scope
// Run this task section separately with Node.js.
// ============================================================================

let level = "outer";

{
  let level = "inner";
  console.log(level);
}

console.log(level);


// ============================================================================
// ASSIGNMENT 11 — TASK 2: Create a counter using a closure
// Run this task section separately with Node.js.
// ============================================================================

function makeCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();
console.log(counter());
console.log(counter());


// ============================================================================
// ASSIGNMENT 11 — TASK 3: Access a global variable in a function
// Run this task section separately with Node.js.
// ============================================================================

const school = "Sample College";

function showSchool() {
  console.log("Welcome to " + school);
}

showSchool();
