/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 12: Callbacks and Higher-Order Functions
*/

// ============================================================================
// ASSIGNMENT 12 — TASK 1: Apply a function twice
// Run this task section separately with Node.js.
// ============================================================================

function applyTwice(fn, value) {
  return fn(fn(value));
}

function addTen(number) {
  return number + 10;
}

console.log(applyTwice(addTen, 5));


// ============================================================================
// ASSIGNMENT 12 — TASK 2: Format marks with a callback
// Run this task section separately with Node.js.
// ============================================================================

function formatMarks(marks, callback) {
  return callback(marks);
}

console.log(formatMarks(76, marks => "Marks: " + marks + "/100"));


// ============================================================================
// ASSIGNMENT 12 — TASK 3: Repeat an action three times
// Run this task section separately with Node.js.
// ============================================================================

function repeatAction(times, action) {
  for (let round = 1; round <= times; round++) {
    action(round);
  }
}

repeatAction(3, round => console.log("Round " + round));
