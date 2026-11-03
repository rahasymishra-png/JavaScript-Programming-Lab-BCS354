/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 14: Timers and Intervals
*/

// ============================================================================
// ASSIGNMENT 14 — TASK 1: Observe setTimeout() with zero delay
// Run this task section separately with Node.js.
// ============================================================================

console.log("Start");
setTimeout(() => console.log("Timer done"), 0);
console.log("End");


// ============================================================================
// ASSIGNMENT 14 — TASK 2: Cancel a timeout
// Run this task section separately with Node.js.
// ============================================================================

const timerId = setTimeout(() => {
  console.log("Not shown");
}, 1000);

clearTimeout(timerId);
console.log("Cancelled");


// ============================================================================
// ASSIGNMENT 14 — TASK 3: Print three ticks using setInterval()
// Run this task section separately with Node.js.
// ============================================================================

let count = 0;

const timerId = setInterval(() => {
  count++;
  console.log("Tick " + count);

  if (count >= 3) {
    clearInterval(timerId);
  }
}, 200);
