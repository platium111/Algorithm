// 1.Replacing first
// 1.1. replacing in first
//  + concat return new array -> immutable. We can use [..., newElement] with the same function
// * C1 | using immutation then concat
const addFirstArr = [0, 1, 2, 3, 4];
const newValue = -1;
const newAddFirstArr = addFirstArr
  .map((_, index) => {
    return addFirstArr[index + 1];
  })
  .filter(Boolean);
const resultNewAddFirstArr = [newValue].concat(newAddFirstArr);
console.log("resultNewAddFirstArr", resultNewAddFirstArr);

// * C2 | we can't go from 0 -> length because it will erase value unless using new Array
let addFirstArr1 = [0, 1, 2, 3, 4];
for (let i = addFirstArr1.length; i >= 0; i--) {
  addFirstArr1[i] = addFirstArr1[i - 1];
  if (i === 0) addFirstArr1[0] = newValue;
}
console.log("addFirstArr1", addFirstArr1);

// * C3 | using new array -> new array with 0 is new Value -> then newArr[i] = arr[i-1]
let addFirstArr2 = [0, 1, 2, 3, 4];
let newAddFirstArr2 = [];
for (let i = 0; i <= addFirstArr2.length; i++) {
  if (i === 0) newAddFirstArr2[0] = -1;
  else newAddFirstArr2[i] = addFirstArr2[i - 1];
}
console.log("newAddFirstArr2", newAddFirstArr2);

// * C4: spreading
const [removed, ...remainingExp1] = addFirstArr;
const newExp1 = [newValue, ...remainingExp1];
console.log("new values exp1 ", newExp1);

//1.2. add in last -> using push() OR concat OR spreading
// *********************************
// 2.remove
// 2.1 remove in first -> using map() for immutable OR shift() for mutable
let removeInFirst = [0, 1, 2, 3, 4];
for (let i = 0; i < removeInFirst.length; i++) {
  if (i === removeInFirst.length) break;
  removeInFirst[i] = removeInFirst[i + 1];
}
console.log("removeInFirst", removeInFirst);

// * using shift()
let removeInFirst1 = [0, 1, 2, 3, 4];
removeInFirst1.shift(0);
console.log("removeInFirst1", removeInFirst1);
// 2.2. remove in last -> pop()

// *********************************
// 3.update -> arr[i] = new value
