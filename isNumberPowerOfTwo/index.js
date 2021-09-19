// Check that number is not falsy and use the bitwise AND operator (&) to determine if number is a power of two.

const isNumberPowerOfTwo = number => !!number && (number & (number - 1)) == 0;

console.log(isNumberPowerOfTwo(100)); // false
console.log(isNumberPowerOfTwo(128)); // true