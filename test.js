// We want to write a function that creates a duplicate array...
// ... and applies a callback to each.

const costumes = ['Vampire', 'Skeleton', 'Zombie', 'Clown'];

const map = (array, callback) => {
    // Create new array.
    const newArr = [];
    // Loop through each item (we need VALUE and INDEX!)
    array.forEach(value => {
        // Run callback against each item.
        // Replace existing value (index value) with the callback return.
        // newArr[index] = callback(value);
        newArr.push(callback(value));
    });
    // Return the updated / copied array.
    return newArr;
};

console.log(costumes);
const updatedCostumes = map(costumes, string => string.toUpperCase());
console.log(updatedCostumes);
console.log(costumes);

const lowerCaseCostumes = map(costumes, string => string.toLowerCase());
console.log(lowerCaseCostumes);