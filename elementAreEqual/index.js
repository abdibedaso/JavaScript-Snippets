// Check if all elements in an array are equal 
// - By using the every method from Array.
// - Check if every element is equal to the first element in the array.

const elementAreEqual = array => array.every(e1 => e1 === array[0]);

console.log(elementAreEqual([12, 12, 12, 12, 12])); // true
console.log(elementAreEqual([1, 2, 3, 4, 5])); // false