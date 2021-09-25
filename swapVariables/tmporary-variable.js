// Temporary variable

a = 1;
b = 2;
let temp; // temp is the temporary variable.

temp = a;
a = b;
b = temp;

console.log(a); // => 2
console.log(b); // => 1