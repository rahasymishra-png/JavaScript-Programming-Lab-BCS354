/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 13: Reduce, Some, Every and Map
*/

// ============================================================================
// ASSIGNMENT 13 — TASK 1: Find the total using reduce()
// Run this task section separately with Node.js.
// ============================================================================

const prices = [120, 45, 300];
const total = prices.reduce((sum, price) => sum + price, 0);
console.log(total);


// ============================================================================
// ASSIGNMENT 13 — TASK 2: Test marks with some() and every()
// Run this task section separately with Node.js.
// ============================================================================

const marks = [72, 85, 30, 90];
console.log(marks.some(mark => mark < 40));
console.log(marks.every(mark => mark >= 35));


// ============================================================================
// ASSIGNMENT 13 — TASK 3: Increase each mark using map()
// Run this task section separately with Node.js.
// ============================================================================

const marks = [72, 85, 64, 90];
const increased = marks.map(mark => mark + 5);

console.log(increased);
console.log(marks);
