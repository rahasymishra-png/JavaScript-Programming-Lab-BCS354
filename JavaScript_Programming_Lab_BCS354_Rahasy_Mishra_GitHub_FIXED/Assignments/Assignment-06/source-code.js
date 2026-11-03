/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 6: JSON Text
*/

// ============================================================================
// ASSIGNMENT 6 — TASK 1: Convert an object to JSON text
// Run this task section separately with Node.js.
// ============================================================================

const student = { name: "Rohan", marks: [70, 80] };
const jsonText = JSON.stringify(student);
console.log(jsonText);


// ============================================================================
// ASSIGNMENT 6 — TASK 2: Parse JSON text and print city
// Run this task section separately with Node.js.
// ============================================================================

const text = '{"city":"Pune", "pin":411001}';
const data = JSON.parse(text);
console.log(data.city);


// ============================================================================
// ASSIGNMENT 6 — TASK 3: Catch invalid JSON
// Run this task section separately with Node.js.
// ============================================================================

const text = "{name: Rohan}";

try {
  JSON.parse(text);
} catch (error) {
  console.log("Invalid JSON");
}
