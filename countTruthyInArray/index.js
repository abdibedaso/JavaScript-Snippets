const countTruthyInArray = (array) => {
    let count = 0;
    for (let value of array)
        if (value)
            count++;
    return count;
};

console.log(countTruthyInArray([0, null, undefined, '', 2, 3]));