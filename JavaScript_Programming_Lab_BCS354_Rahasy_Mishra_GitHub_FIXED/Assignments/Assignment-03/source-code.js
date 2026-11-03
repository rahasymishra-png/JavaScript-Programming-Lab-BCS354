/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 3: Conditions and Loops
*/

// ============================================================================
// ASSIGNMENT 3 — TASK 1: Display a grade using conditions
// Run this task section separately with Node.js.
// ============================================================================

const marks = 72;

if (marks >= 75) {
  console.log("Grade A");
} else if (marks >= 60) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}


// ============================================================================
// ASSIGNMENT 3 — TASK 2: Print numbers from 1 to 5 using a for loop
// Run this task section separately with Node.js.
// ============================================================================

for (let i = 1; i <= 5; i++) {
  console.log(i);
}


// ============================================================================
// ASSIGNMENT 3 — TASK 3: Add numbers with a while loop until total exceeds 20
// Run this task section separately with Node.js.
// ============================================================================

let total = 0;
let number = 1;

while (total <= 20) {
  total += number;
  number++;
}

console.log(total);
