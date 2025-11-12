// grades.js
// Program to randomly assign marks to a student and determine their grade

// Generate random marks between 0 and 100
let marks = Math.floor(Math.random() * 101); // 0 to 100 inclusive

console.log("Student Marks: " + marks);

// Determine grade using if-else statements
let grade;

if (marks >= 90) {
  grade = "A";
} else if (marks >= 80) {
  grade = "B";
} else if (marks >= 70) {
  grade = "C";
} else if (marks >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Grade: " + grade);
