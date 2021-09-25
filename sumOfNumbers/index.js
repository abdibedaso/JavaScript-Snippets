// return the sum of two or more given numbers or an array, we again use the spread operator (…) and the reduce method from Array.

const sumOfNumbers = (...array) => [...array].reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log(sumOfNumbers(...[1, 2, 3])); // 6
console.log(sumOfNumbers(5, 6, 7, 8, 9, 10)); // 45