// Return the maximum elements from an array
// Using an arrow function that takes our array and the number of elements we want the function to return. 
//  - spread operator (…) and the sort and slice methods from Array.

// If we don’t provide a second argument, number gets a default value of 1, so only one maximum element is returned.
const maxElementsFromArray = (array, number = 1) => [...array]
    .sort((x, y) => y - x).slice(0, number);

console.log(maxElementsFromArray([1, 2, 3, 4, 5])); // [ 5 ]
console.log(maxElementsFromArray([7, 8, 9, 10, 10], 2)); // [ 10, 10 ]