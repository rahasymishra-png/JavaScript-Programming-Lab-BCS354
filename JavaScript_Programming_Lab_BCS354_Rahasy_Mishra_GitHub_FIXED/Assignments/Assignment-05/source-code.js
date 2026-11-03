/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 5: Arrays, Array Methods and Nested Arrays
*/

// ============================================================================
// ASSIGNMENT 5 — TASK 1: Create marks array and print its length and first mark
// Run this task section separately with Node.js.
// ============================================================================

const marks = [72, 85, 64, 90];
console.log(marks.length);
console.log(marks[0]);


// ============================================================================
// ASSIGNMENT 5 — TASK 2: Print each subject using forEach()
// Run this task section separately with Node.js.
// ============================================================================

const subjects = ["Maths", "Science", "English"];
subjects.forEach(subject => console.log(subject));


// ============================================================================
// ASSIGNMENT 5 — TASK 3: Filter marks of 60 or more
// Run this task section separately with Node.js.
// ============================================================================

const marks = [72, 85, 45, 90];
const passed = marks.filter(mark => mark >= 60);
console.log(passed);


// ============================================================================
// ASSIGNMENT 5 — TASK 4: Read row 2, column 3 from a nested array
// Run this task section separately with Node.js.
// ============================================================================

const grid = [[1, 2, 3], [4, 5, 6]];
console.log(grid[1][2]);
