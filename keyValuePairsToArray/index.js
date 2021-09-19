// Keys method from Object and the map method from Array to map over Object’s keys and create an array of key-value pairs.

const keyValuePairsToArray = object => Object.keys(object).map(e1 => [e1, object[e1]]);

console.log(keyValuePairsToArray({ Better: 4, Programming: 2 })); // [['Better', 4], ['Programming', 2]]
console.log(keyValuePairsToArray({ x: 1, y: 2, z: 2 })); // [['x', 1], ['y', 2], ['z', 3] ]