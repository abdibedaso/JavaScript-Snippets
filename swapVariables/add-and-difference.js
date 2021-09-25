// Addition and difference
// You can swap variables without the use of additional memory (like a temporary array or variable).

a = 1;
b = 2;

a = a + b;
b = a - b;
a = a - b;

// a = a + b assigns to a the value 1 + 2.
// b = a - b assigns to b the value 1 + 2 - 2 = 1 (b is now 1).
// a = a - b assigns to a the value 1 + 2 - 1 = 2 (a is now 2).

console.log(a); // => 2
console.log(b); // => 1