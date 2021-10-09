// 1. Remove at specific splice(5,1) -> start removing at current index 5 and remove 1 element
const removeAtSpecific = [0, 1, 2, 3, 4, 5, 6, 7, 8];
removeAtSpecific.splice(2, 1);
console.log("removeAtSpecific", removeAtSpecific);
// removeAtSpecific [0, 1, 3, 4,5, 6, 7, 8]

// 2. Add at specific splice(5,0, 99, 100) -> using 0 to not remove anything and add 99
const removeAtSpecific1 = [0, 1, 2, 3, 4, 5];
removeAtSpecific1.splice(2, 0, 99, 100);
console.log("removeAtSpecific1", removeAtSpecific1);

// 3. Slice (immutable) start from the point
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]