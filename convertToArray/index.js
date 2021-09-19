// Spread operator (…), the map method of Array, and the parseInt function 
// - to convert a given number to an array of single digits.

const convertToArray = number => [...
        `${number}`
    ]
    .map(e1 => parseInt(e1));

console.log(convertToArray(5678)); // [5, 6, 7, 8]
console.log(convertToArray(123456789)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]