"use strict";

const values = ["50", "hello", false, null, "100px"];

for (let v of values) {
    const num = Number(v);
    const bool = Boolean(v);
    const str = String(v);
    console.log("Value:", v, "| Number:", num, "| Boolean:", bool, "| String:", str);
}
