/**
 * concat
 * every | is every element satisfy? -> iterating until get false -> if the first time get false -> return immediately
 * some | opposite with `every` => if get anything satisfy -> return
 * forEach, map, filter
 * reduce
 */

// EXAMPLE every()
const exampleEvery = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// ! if get any false -> return false
const resultEvery = exampleEvery.every((x) => !isNaN(x));
console.log(resultEvery);
