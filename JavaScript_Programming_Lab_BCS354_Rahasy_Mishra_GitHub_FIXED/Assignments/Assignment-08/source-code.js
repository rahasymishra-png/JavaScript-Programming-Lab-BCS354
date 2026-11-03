/*
INVERTIS UNIVERSITY, BAREILLY
JAVASCRIPT PROGRAMMING LAB — BCS354
STUDENT NAME: RAHASY MISHRA
UNIVERSITY ID / ROLL NO.: BCS 2025 548
BRANCH: B.Tech CSE
ASSIGNMENT 8: Inheritance, Methods and Composition
*/

// ============================================================================
// ASSIGNMENT 8 — TASK 1: Create Person and Teacher classes
// Run this task section separately with Node.js.
// ============================================================================

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi, I am " + this.name;
  }
}

class Teacher extends Person {
  constructor(name, subject) {
    super(name);
    this.subject = subject;
  }
}

const teacher = new Teacher("Anita", "Maths");
console.log(teacher.greet());


// ============================================================================
// ASSIGNMENT 8 — TASK 2: Check a locker PIN
// Run this task section separately with Node.js.
// ============================================================================

class Locker {
  constructor(pin) {
    this.pin = pin;
  }

  checkPin(number) {
    return number === this.pin;
  }
}

const locker = new Locker(1234);
console.log(locker.checkPin(1111));
console.log(locker.checkPin(1234));


// ============================================================================
// ASSIGNMENT 8 — TASK 3: Use composition with Engine and Car
// Run this task section separately with Node.js.
// ============================================================================

class Engine {
  constructor(power) {
    this.power = power;
  }
}

class Car {
  constructor(power) {
    this.engine = new Engine(power);
  }

  start() {
    return "Car starts with " + this.engine.power + " HP";
  }
}

const car = new Car(150);
console.log(car.start());
