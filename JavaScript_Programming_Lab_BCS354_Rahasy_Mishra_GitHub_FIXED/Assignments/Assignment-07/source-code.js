/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 7: Constructor Functions and Classes
*/

// ============================================================================
// ASSIGNMENT 7 — TASK 1: Create a Student using a constructor function
// Run this task section separately with Node.js.
// ============================================================================

function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

const student = new Student("Asha", 88);
console.log(student.name);
console.log(student.marks);


// ============================================================================
// ASSIGNMENT 7 — TASK 2: Create a Book class with a summary method
// Run this task section separately with Node.js.
// ============================================================================

class Book {
  constructor(title, pages) {
    this.title = title;
    this.pages = pages;
  }

  summary() {
    return this.title + " has " + this.pages + " pages";
  }
}

const book = new Book("Algorithms", 320);
console.log(book.summary());


// ============================================================================
// ASSIGNMENT 7 — TASK 3: Add result() through Student.prototype
// Run this task section separately with Node.js.
// ============================================================================

function Student(name, marks) {
  this.name = name;
  this.marks = marks;
}

Student.prototype.result = function () {
  return this.marks >= 40 ? "Pass" : "Fail";
};

const student = new Student("Asha", 88);
console.log(student.result());
