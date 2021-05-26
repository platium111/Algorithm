/**
 * concat
 * every | is every element satisfy? -> iterating until get false -> if the first time get false -> return immediately
 * some | opposite with `every` => if get anything satisfy -> return
 * forEach, map, filter
 * reduce
 * Symbol.iterator -> arr[Symbol.iterator]()
 * for...of | get value from array
 * entries() | pair of position-value -> using with .next().value
 * Array.from(arr) | copy to new array
 * Array.of(1,2,3,4) | create array from args
 * Array.fill(0) | fill all elements to 0
 * Array.fill(9, 3) | fill value 9 from index 3
 * Array.fill(9, 3,5) | fill value 9 from index 3 to 5
 * Array(6).fill(1) | create array with 6 elements -> then fill with value 1
 * copyWithin(0, 3) | will get start directly from 3 to rest (size 4) -> then put it from index 0 -> if has 6 in length of array, we already have 4 from copy, then 2 left as it is
 * copyWithin(0, 3, 5) | copy element at 3,4
 * reverse()
 * sort(fn) | always AESC from low to high, if it custom a<b return -1, otherwise return 0
 * indexOf(10) | finding index of element has value 10
 * lastIndexOf(10)
 * includes(10)
 * toString() or join('-) | array to string
 *
 */

// EXAMPLE every()
const exampleEvery = [0, 1, 2, 3, 4, 5, 6, 7, 8];
// ! if get any false -> return false
const resultEvery = exampleEvery.every((x) => !isNaN(x));
console.log(resultEvery);

// EXAMPLE basic reduce()
const exampleReduce = [0, 1, 2, 3, 4, 5, 6];
const total = exampleReduce.reduce((sum, i) => (sum += i));
console.log("exampleReduce", total);

// EXAMPLE advanced reduce() with object of object
const exampleReduce1 = { obj1: { a: 1, b: 2 }, obj2: { a: 3, b: 4 } };
const resultReduce1 = Object.keys(exampleReduce1).reduce(
  (newObj, currentObj) => {
    return {
      ...newObj,
      a: newObj.a + exampleReduce1[currentObj].a,
      b: newObj.b + exampleReduce1[currentObj].b,
    };
  },
  { a: 0, b: 0 }
);

console.log("resultReduce1", resultReduce1);

// @@iterator
let iteratorArr = [1, 2, 3, 4, 5, 6, 7, 8];
let iterator = iteratorArr[Symbol.iterator]();
console.log("iterator value 1", iterator.next().value);
console.log("iterator value 2", iterator.next().value);
// * can use with for of
// ! it knows already run 2 times
for (const value of iterator) {
  console.log("iterator value for @@iterator", value);
}

// for of
const exampleForOf = [1, 2, 3, 4, 5, 6, 7];
for (const value of exampleForOf) {
  console.log("for of value ", value);
}

// entries
const exampleEntries = [1, 2, 3, 4, 5];
const entries = exampleEntries.entries();
console.log("entries", entries.next().value);

// copyWithin
const exampleCopyWithin = [1, 2, 3, 4, 5, 6, 7, 8];
console.log("copy within", exampleCopyWithin.copyWithin(0, 3));

// sort
const exampleSort = [2, 5, 4, 9, 7, 8];
console.log(
  "sort ",
  exampleSort.sort((a, b) => a - b)
);

// * advanced sort obj
const friends = [
  { name: "John", age: 30 },
  { name: "Ana", age: 20 },
  { name: "Chris", age: 25 }, // trailing comma ES2017
];

function compare(a, b) {
  if (a.age < b.age) {
    return -1;
  }
  if (a.age > b.age) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
console.log("sort obj", friends.sort(compare));
