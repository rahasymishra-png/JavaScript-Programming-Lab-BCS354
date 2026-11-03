/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 10: Objects and Destructuring
*/

// ============================================================================
// ASSIGNMENT 10 — TASK 1: Read and update object properties
// Run this task section separately with Node.js.
// ============================================================================

const student = { name: "Rohan", roll: 12, marks: 78 };
console.log(student.name);

student.marks = 81;
console.log(student.marks);


// ============================================================================
// ASSIGNMENT 10 — TASK 2: Use array destructuring
// Run this task section separately with Node.js.
// ============================================================================

const subjects = ["Maths", "Science", "English"];
const [first, second] = subjects;

console.log(first);
console.log(second);


// ============================================================================
// ASSIGNMENT 10 — TASK 3: Use object destructuring
// Run this task section separately with Node.js.
// ============================================================================

const student = { name: "Rohan", roll: 12, marks: 81 };
const { name, roll } = student;

console.log(name);
console.log(roll);
