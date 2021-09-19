// Calculate a Number’s Factorial
// Use of an arrow function and nested ternary operators.

const factorialOfNumber = number =>
    number < 0 ?
    (() => {
        throw new TypeError('No negative numbers please');
    })() :
    number <= 1 ?
    1 :
    number * factorialOfNumber(number - 1);

//Examples
console.log(factorialOfNumber(4)); // 24
console.log(factorialOfNumber(8)); // 40320