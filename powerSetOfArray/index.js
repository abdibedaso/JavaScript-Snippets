// Return the powerSet of an array of numbers.
// Using the reduce, map, and concat methods from Array.

const powerSetOfArray = array => array
    .reduce((accumulator, currentValue) => accumulator
        .concat(accumulator.map(e1 => [currentValue]
            .concat(e1))), [
            []
        ]);

console.log(powerSetOfArray([4, 2])); // [[], [4], [2], [2, 4]]
console.log(powerSetOfArray([1, 2, 3])); // [[], [1], [2], [2, 1], [3], [3, 1], [3, 2], [3, 2, 1]]