// Bitwise XOR operator - The XOR operator evaluates to true if the operands are different.

a = 1;
b = 2;

a = a ^ b;
b = a ^ b;
a = a ^ b;

console.log(a); // => 2
console.log(b); // => 1