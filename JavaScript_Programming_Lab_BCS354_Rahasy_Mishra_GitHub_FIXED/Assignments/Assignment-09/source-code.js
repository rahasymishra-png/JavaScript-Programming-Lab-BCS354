/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 9: DOM, Validation, Storage and Quiz
*/

// ============================================================================
// ASSIGNMENT 9 — TASK 2: Validate a name
// Run this task section separately with Node.js.
// ============================================================================

function validateForm(name) {
  const errors = [];

  if (name.trim() === "") {
    errors.push("Name is required");
  }

  return errors;
}

console.log(validateForm("Asha"));
console.log(validateForm(""));
