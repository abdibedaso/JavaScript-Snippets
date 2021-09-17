// Use the spread operator (…) and the reduce method from Array 
// - To return the average of two given numbers or an array

const averageOfTwoNumbers = (...numbers) => numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / numbers.length;

console.log(averageOfTwoNumbers(...[6, 7, 8])); // 7
console.log(averageOfTwoNumbers(6, 7, 8, 9)); // 7.5