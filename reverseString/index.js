// Reverse a String using 
// the spread operator (…), 
// the reverse method from Array, 
// and the join method from String to reverse a given string.

const reverseString = string => [...string].reverse().join('');

//Examples
console.log(reverseString('Abdi')); // 'idbA'
console.log(reverseString('Tufa')); // 'afuT'