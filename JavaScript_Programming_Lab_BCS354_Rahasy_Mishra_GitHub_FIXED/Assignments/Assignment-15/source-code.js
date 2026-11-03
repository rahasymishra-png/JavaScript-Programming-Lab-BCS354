/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 15: Promises and async/await with Local Data
*/

// ============================================================================
// ASSIGNMENT 15 — TASK 1: Resolve a Promise for valid marks
// Run this task section separately with Node.js.
// ============================================================================

function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

checkMarks(80).then(value => console.log(value));


// ============================================================================
// ASSIGNMENT 15 — TASK 2: Reject a Promise for out-of-range marks
// Run this task section separately with Node.js.
// ============================================================================

function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

checkMarks(120).catch(error => console.log(error.message));


// ============================================================================
// ASSIGNMENT 15 — TASK 3: Handle Promise results with async/await
// Run this task section separately with Node.js.
// ============================================================================

function checkMarks(marks) {
  return new Promise((resolve, reject) => {
    if (marks >= 0 && marks <= 100) {
      resolve(marks);
    } else {
      reject(new Error("Marks out of range"));
    }
  });
}

async function run() {
  try {
    console.log(await checkMarks(65));
    await checkMarks(-5);
  } catch (error) {
    console.log("Caught: " + error.message);
  }
}

run();


// ============================================================================
// ASSIGNMENT 15 — TASK 4: Load local users with a Promise
// Run this task section separately with Node.js.
// ============================================================================

function getUsers() {
  return new Promise(resolve => {
    setTimeout(() => resolve([
      { id: 1, name: "Asha" },
      { id: 2, name: "Rohan" },
      { id: 3, name: "Meera" }
    ]), 100);
  });
}

async function showUsers() {
  const users = await getUsers();
  users.forEach(user => console.log(user.name));
}

showUsers();
