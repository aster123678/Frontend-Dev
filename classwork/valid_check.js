"use strict";

const value = "45.67";
const num = parseFloat(value);

console.log("Converted:", num);

if (isNaN(num)) {
    console.log("Invalid number");
} else {
    console.log("Valid number");
}
