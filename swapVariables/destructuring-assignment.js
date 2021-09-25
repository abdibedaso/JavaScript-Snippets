// Destructuring assignment
// Destructuring assignment (a feature of ES2015) lets you extract items of an array into variables.
let a = 1;
let b = 2;

[a, b] = [b, a]; // [a, b] = [b, a] is the destructuring assignment that swaps the variables a and b.
// At the first step, on the right side of the destructuring, a temporary array [b, a] (which evaluates to [2, 1]) is created.

console.log(a); // => 2
console.log(b); // => 1